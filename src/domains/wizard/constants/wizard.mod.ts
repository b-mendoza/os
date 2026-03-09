import type { FileRoutesByPath } from "@tanstack/react-router";

const CATEGORIZATION_STEP_PATH: FileRoutesByPath["/wizard/categorization"]["fullPath"] =
  "/wizard/categorization";

const ANALYSIS_STEP_PATH: FileRoutesByPath["/wizard/analysis"]["fullPath"] =
  "/wizard/analysis";

/** Union type of all wizard step paths */
export type WizardStepPath =
  | typeof CATEGORIZATION_STEP_PATH
  | typeof ANALYSIS_STEP_PATH;

export interface WizardStep {
  label: string;
  path: WizardStepPath;
}

/** Categorization step configuration */
const CATEGORIZATION_STEP = {
  label: "Categorize",
  path: CATEGORIZATION_STEP_PATH,
} satisfies WizardStep;

/** Analysis step configuration */
const ANALYSIS_STEP = {
  label: "Analyze",
  path: ANALYSIS_STEP_PATH,
} satisfies WizardStep;

export const WIZARD_STEPS: WizardStep[] = [CATEGORIZATION_STEP, ANALYSIS_STEP];
