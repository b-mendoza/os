import { createFileRoute, Link } from "@tanstack/react-router";

import { WizardShell } from "#/domains/wizard/components/wizard-shell/wizard-shell.mod";

export const Route = createFileRoute("/wizard/analysis")({
  component: RouteComponent,
  head() {
    return {
      meta: [
        {
          title: "Document Analysis | Spend Guard",
        },
      ],
    };
  },
});

const STEP_TITLE = "Analyze Documents";

const STEP_DESCRIPTION =
  "Analysis step placeholder - Analysis results UI will go here";

function RouteComponent() {
  return (
    <WizardShell navigation={<AnalysisStepNavigation />} stepTitle={STEP_TITLE}>
      <p className="text-base-content/70">{STEP_DESCRIPTION}</p>
    </WizardShell>
  );
}

function AnalysisStepNavigation() {
  return (
    <>
      <Link className="link" to="/wizard/categorization">
        Previous
      </Link>

      <Link className="link aria-disabled:cursor-not-allowed" disabled to=".">
        Complete
      </Link>
    </>
  );
}
