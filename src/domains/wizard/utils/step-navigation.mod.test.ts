import { describe, expect, it } from "vitest";

import type { WizardStepPath } from "#/domains/wizard/constants/wizard.mod";

import { isStepAtOrBefore } from "./step-navigation.mod";

describe('tests for "isStepAtOrBefore" function', () => {
  /**
   * Validates that comparing a step to itself returns true.
   *
   * Why it matters: Progress indicators use this to determine if a step
   * should be marked as active or completed. If this fails, the current
   * step might not highlight correctly in the UI.
   */
  it("returns true when comparing a step to itself", () => {
    const categorizationStepPath: WizardStepPath = "/wizard/categorization";

    expect(
      isStepAtOrBefore(categorizationStepPath, categorizationStepPath),
    ).toBe(true);
  });

  /**
   * Validates that an earlier step (Categorization) is correctly identified as
   * being at or before a later step (Analysis).
   *
   * Why it matters: This is the core functionality for progress indicators.
   * If this fails, completed steps won't show as "done" and the entire
   * progress visualization breaks.
   */
  it("returns true when stepA comes before stepB in the wizard flow", () => {
    const categorizationStepPath: WizardStepPath = "/wizard/categorization";

    const analysisStepPath: WizardStepPath = "/wizard/analysis";

    expect(isStepAtOrBefore(categorizationStepPath, analysisStepPath)).toBe(
      true,
    );
  });

  /**
   * Validates that a later step (Analysis) is correctly identified as
   * NOT being at or before an earlier step (Categorization).
   *
   * Why it matters: Prevents future/incomplete steps from being marked
   * as completed. If this fails, all steps might incorrectly show as
   * complete regardless of actual progress.
   */
  it("returns false when stepA comes after stepB in the wizard flow", () => {
    const categorizationStepPath: WizardStepPath = "/wizard/categorization";

    const analysisStepPath: WizardStepPath = "/wizard/analysis";

    expect(isStepAtOrBefore(analysisStepPath, categorizationStepPath)).toBe(
      false,
    );
  });

  /**
   * Validates correct ordering for the remaining adjacent steps.
   *
   * Why it matters: Ensures the comparison logic works correctly for
   * consecutive steps, not just first and last. If this fails, intermediate
   * step indicators might render incorrectly.
   */
  it("returns true for adjacent steps in correct order", () => {
    const categorizationStepPath: WizardStepPath = "/wizard/categorization";

    const analysisStepPath: WizardStepPath = "/wizard/analysis";

    expect(isStepAtOrBefore(categorizationStepPath, analysisStepPath)).toBe(
      true,
    );
  });
});
