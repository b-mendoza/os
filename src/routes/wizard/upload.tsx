import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";

import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import * as z from "zod";

import type { UploadedFileResponseBody } from "#/domains/wizard/components/file-uploader/file-uploader.mod";
import { FileUploader } from "#/domains/wizard/components/file-uploader/file-uploader.mod";
import { WizardShell } from "#/domains/wizard/components/wizard-shell/wizard-shell.mod";
import { WIZARD_UPLOAD_FILE_COUNT } from "#/domains/wizard/constants/wizard.mod";
import { Button } from "#/shared/components/button/button.mod";

const uploadSearchParamsSchema = z.object({
  sessionId: z.optional(z.uuidv4()),
});

export const Route = createFileRoute("/wizard/upload")({
  component: RouteComponent,
  validateSearch: uploadSearchParamsSchema,
  head() {
    return {
      meta: [
        {
          title: "Upload Documents | Spend Guard",
        },
      ],
    };
  },
});

const STEP_TITLE = "Upload Documents";

function RouteComponent() {
  const [uploadedFiles, setUploadedFiles] = useState<
    UploadedFileResponseBody[]
  >([]);

  return (
    <WizardShell
      navigation={<UploadStepNavigation uploadedFiles={uploadedFiles} />}
      stepTitle={STEP_TITLE}
    >
      <FileUploader onFilesChange={setUploadedFiles} />
    </WizardShell>
  );
}

interface UploadStepNavigationProps {
  uploadedFiles: UploadedFileResponseBody[];
}

function UploadStepNavigation(props: Readonly<UploadStepNavigationProps>) {
  const { uploadedFiles } = props;

  return (
    <>
      <Link className="link aria-disabled:cursor-not-allowed" disabled to=".">
        Previous
      </Link>

      <NextButton uploadedFiles={uploadedFiles} />
    </>
  );
}

interface NextButtonProps {
  uploadedFiles: UploadedFileResponseBody[];
}

function NextButton(props: Readonly<NextButtonProps>) {
  const { uploadedFiles } = props;

  const sessionId = Route.useSearch({
    select: (searchParams) => searchParams.sessionId,
  });

  // If sessionId already exists, just navigate (no mutation)
  if (typeof sessionId === "string") {
    return (
      <Link
        className="link"
        search={{
          sessionId,
        }}
        to="/wizard/categorization"
      >
        Next
      </Link>
    );
  }

  return <CreateSessionButton uploadedFiles={uploadedFiles} />;
}

interface CreateSessionButtonProps {
  uploadedFiles: UploadedFileResponseBody[];
}

function CreateSessionButton(props: Readonly<CreateSessionButtonProps>) {
  const { uploadedFiles } = props;

  const navigate = Route.useNavigate();

  const { queryClient, trpc } = Route.useRouteContext();

  const createSessionWithDocumentsMutation = useMutation(
    trpc.wizard.createSessionWithDocuments.mutationOptions({
      async onSuccess(data) {
        queryClient.setQueryData(
          trpc.wizard.getDocumentsBySession.queryKey({
            sessionId: data.sessionId,
          }),
          {
            documents: data.documents,
          },
        );

        await navigate({
          search: {
            sessionId: data.sessionId,
          },
          to: "/wizard/categorization",
        });
      },
    }),
  );

  const handlePress = () => {
    createSessionWithDocumentsMutation.mutate({
      documents: uploadedFiles,
    });
  };

  const isDisabled = uploadedFiles.length !== WIZARD_UPLOAD_FILE_COUNT;

  const isSubmitting = createSessionWithDocumentsMutation.isPending;

  const buttonTextContent = isSubmitting
    ? "Creating session and documents..."
    : "Next";

  return (
    <Button
      isDisabled={isDisabled}
      isPending={isSubmitting}
      onPress={handlePress}
    >
      {buttonTextContent}
    </Button>
  );
}
