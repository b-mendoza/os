import { randomUUID } from "node:crypto";

import { eq } from "drizzle-orm";
import * as z from "zod";

import {
  ALLOWED_UPLOAD_FILE_MIME_TYPES,
  SIGNED_URL_EXPIRATION_SECONDS,
  WIZARD_UPLOAD_FILE_COUNT,
} from "#/domains/wizard/constants/wizard.mod";
import type {
  NewUploadedDocument,
  UploadedDocument,
} from "#/shared/db/db.schema.server";
import {
  analysisSessionsTable,
  documentCategoryEnum,
  uploadedDocumentsTable,
} from "#/shared/db/db.schema.server";
import {
  createTRPCRouter,
  publicProcedure,
} from "#/shared/libs/trpc/utils/initializer/initializer.mod.server";
import { getApplicationBindings } from "#/shared/middlewares/application-bindings/application-bindings.mod";

interface SelectedDocument extends Pick<
  UploadedDocument,
  "fileName" | "fileSizeBytes" | "id" | "mimeType" | "storageKey"
> {}

const appendSignedUrls = async (documents: SelectedDocument[]) => {
  const { storage } = getApplicationBindings();

  return Promise.all(
    documents.map(async (document) => {
      const cdnUrl = await storage.getSignedUrl(
        document.storageKey,
        SIGNED_URL_EXPIRATION_SECONDS,
      );

      return {
        ...document,
        cdnUrl,
      };
    }),
  );
};

const uploadedFileSchema = z.object({
  fileName: z.string().trim().nonempty(),
  fileSizeBytes: z.int().positive(),
  mimeType: z.enum(ALLOWED_UPLOAD_FILE_MIME_TYPES),
  storageKey: z.string().trim().nonempty(),
});

interface UploadedFile extends z.output<typeof uploadedFileSchema> {}

const createSessionInputSchema = z.object({
  documents: z.array(uploadedFileSchema).length(WIZARD_UPLOAD_FILE_COUNT),
});

/**
 * TEMPORARY SCAFFOLDING - Will be removed when AI categorization is implemented.
 *
 * This function generates mock AI categorization data using Faker until the real
 * AI categorization service is integrated. The dynamic import keeps faker out of
 * the main bundle since it's only used server-side for mocking.
 */
const createDocument = async (
  sessionId: string,
  uploadedFile: UploadedFile,
) => {
  const { faker } = await import("@faker-js/faker");

  const aiSuggestedCategory = faker.helpers.arrayElement(
    documentCategoryEnum.enumValues,
  );

  const category = faker.helpers.arrayElement(documentCategoryEnum.enumValues);

  const aiSuggestionConfidence = faker.number.float({
    min: 0,
    max: 1,
    multipleOf: 0.01,
  });

  return {
    aiSuggestedCategory,
    aiSuggestionConfidence: aiSuggestionConfidence.toString(),
    category,

    // File metadata from upload
    fileName: uploadedFile.fileName,
    fileSizeBytes: uploadedFile.fileSizeBytes,
    mimeType: uploadedFile.mimeType,
    storageKey: uploadedFile.storageKey,

    // Relationships
    sessionId,
  } satisfies NewUploadedDocument;
};

const getDocumentsBySessionInputsSchema = z.object({
  sessionId: z.uuidv4(),
});

export const wizardRouter = createTRPCRouter({
  createSessionWithDocuments: publicProcedure
    .input(createSessionInputSchema)
    .mutation(async (opts) => {
      const { documents } = opts.input;
      const { db } = getApplicationBindings();

      const sessionId = randomUUID();

      const newDocuments = await Promise.all(
        documents.map(async (uploadedFile) =>
          createDocument(sessionId, uploadedFile),
        ),
      );

      const insertedDocuments = await db.transaction(async (tx) => {
        await tx.insert(analysisSessionsTable).values({
          id: sessionId,
          status: "draft",
        });

        return tx
          .insert(uploadedDocumentsTable)
          .values(newDocuments)
          .returning({
            fileName: uploadedDocumentsTable.fileName,
            fileSizeBytes: uploadedDocumentsTable.fileSizeBytes,
            id: uploadedDocumentsTable.id,
            mimeType: uploadedDocumentsTable.mimeType,
            storageKey: uploadedDocumentsTable.storageKey,
          });
      });

      const documentsWithUrls = await appendSignedUrls(insertedDocuments);

      return {
        documents: documentsWithUrls,
        sessionId,
      };
    }),
  getDocumentsBySession: publicProcedure
    .input(getDocumentsBySessionInputsSchema)
    .query(async (opts) => {
      const { sessionId } = opts.input;

      const { db } = getApplicationBindings();

      const selectedDocuments = await db
        .select({
          fileName: uploadedDocumentsTable.fileName,
          fileSizeBytes: uploadedDocumentsTable.fileSizeBytes,
          id: uploadedDocumentsTable.id,
          mimeType: uploadedDocumentsTable.mimeType,
          storageKey: uploadedDocumentsTable.storageKey,
        })
        .from(uploadedDocumentsTable)
        .where(eq(uploadedDocumentsTable.sessionId, sessionId));

      const documents = await appendSignedUrls(selectedDocuments);

      return {
        documents,
      };
    }),
});
