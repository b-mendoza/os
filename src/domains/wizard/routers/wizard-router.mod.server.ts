import { randomUUID } from "node:crypto";

import * as z from "zod";

import {
  ALLOWED_UPLOAD_FILE_MIME_TYPES,
  SIGNED_URL_EXPIRATION_SECONDS,
  WIZARD_UPLOAD_FILE_COUNT,
} from "#/domains/wizard/constants/wizard.mod";
import {
  createTRPCRouter,
  publicProcedure,
} from "#/shared/libs/trpc/utils/initializer/initializer.mod.server";
import { getApplicationBindings } from "#/shared/middlewares/application-bindings/application-bindings.mod";

interface StoredDocument {
  fileName: string;
  fileSizeBytes: number;
  id: string;
  mimeType: string;
  sessionId: string;
  storageKey: string;
}

interface SelectedDocument extends Omit<StoredDocument, "sessionId"> {}

const wizardSessionDocuments = new Map<string, StoredDocument[]>();

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

const createDocument = (sessionId: string, uploadedFile: UploadedFile) => {
  return {
    fileName: uploadedFile.fileName,
    fileSizeBytes: uploadedFile.fileSizeBytes,
    id: randomUUID(),
    mimeType: uploadedFile.mimeType,
    sessionId,
    storageKey: uploadedFile.storageKey,
  } satisfies StoredDocument;
};

const getDocumentsBySessionInputsSchema = z.object({
  sessionId: z.uuidv4(),
});

export const wizardRouter = createTRPCRouter({
  createSessionWithDocuments: publicProcedure
    .input(createSessionInputSchema)
    .mutation(async (opts) => {
      const { documents } = opts.input;

      const sessionId = randomUUID();

      const storedDocuments = documents.map((uploadedFile) =>
        createDocument(sessionId, uploadedFile),
      );

      wizardSessionDocuments.set(sessionId, storedDocuments);

      const documentsWithUrls = await appendSignedUrls(storedDocuments);

      return {
        documents: documentsWithUrls,
        sessionId,
      };
    }),
  getDocumentsBySession: publicProcedure
    .input(getDocumentsBySessionInputsSchema)
    .query(async (opts) => {
      const { sessionId } = opts.input;

      const storedDocuments = wizardSessionDocuments.get(sessionId) ?? [];

      const selectedDocuments = storedDocuments.map(
        ({ sessionId: _sessionId, ...document }) => document,
      );

      const documents = await appendSignedUrls(selectedDocuments);

      return {
        documents,
      };
    }),
});
