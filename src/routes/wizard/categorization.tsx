import { createFileRoute, Link } from "@tanstack/react-router";

import { WizardShell } from "#/domains/wizard/components/wizard-shell/wizard-shell.mod";

export const Route = createFileRoute("/wizard/categorization")({
  component: RouteComponent,
  head() {
    return {
      meta: [
        {
          title: "Categorize Documents | Spend Guard",
        },
      ],
    };
  },
});

const STEP_TITLE = "Categorize Documents";

const STEP_DESCRIPTION =
  "Categorization step placeholder - Category assignment UI will go here";

function RouteComponent() {
  return (
    <WizardShell
      navigation={<CategorizationStepNavigation />}
      stepTitle={STEP_TITLE}
    >
      <p className="text-base-content/70">{STEP_DESCRIPTION}</p>
    </WizardShell>
  );
}

function CategorizationStepNavigation() {
  return (
    <>
      <Link className="link aria-disabled:cursor-not-allowed" disabled to=".">
        Previous
      </Link>

      <Link className="link" to="/wizard/analysis">
        Next
      </Link>
    </>
  );
}
