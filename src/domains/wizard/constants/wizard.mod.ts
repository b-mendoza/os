import type { FileRoutesByPath } from "@tanstack/react-router";
import type * as z from "zod";

const BYTES_PER_KB = 1_024; // 1KB = 1024 bytes
const KB_PER_MB = 1_024; // 1MB = 1024KB
const MS_PER_SECOND = 1_000;
const SECONDS_PER_MINUTE = 60;

export const MAX_FILE_SIZE_MB = 10; // 10MB

export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * KB_PER_MB * BYTES_PER_KB; // 10,485,760 bytes = 10MB * 1024KB * 1024 bytes

const CLIENT_REFETCH_INTERVAL_MINUTES = 25;
const SERVER_URL_EXPIRATION_MINUTES = 30;

/** Signed URL expiration in milliseconds (25 minutes) - for client-side refetch interval */
export const SIGNED_URL_EXPIRATION_MS =
  CLIENT_REFETCH_INTERVAL_MINUTES * SECONDS_PER_MINUTE * MS_PER_SECOND;

/** Signed URL expiration in seconds (30 minutes) - for server-side R2 presigned URLs */
export const SIGNED_URL_EXPIRATION_SECONDS =
  SERVER_URL_EXPIRATION_MINUTES * SECONDS_PER_MINUTE;

export const ALLOWED_UPLOAD_FILE_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
] satisfies z.core.$ZodCheckMimeTypeDef["mime"];

/** Number of files the wizard expects users to upload */
export const WIZARD_UPLOAD_FILE_COUNT = 3;

const UPLOAD_STEP_PATH: FileRoutesByPath["/wizard/upload"]["fullPath"] =
  "/wizard/upload";

const CATEGORIZATION_STEP_PATH: FileRoutesByPath["/wizard/categorization"]["fullPath"] =
  "/wizard/categorization";

const ANALYSIS_STEP_PATH: FileRoutesByPath["/wizard/analysis"]["fullPath"] =
  "/wizard/analysis";

/** Union type of all wizard step paths */
export type WizardStepPath =
  | typeof UPLOAD_STEP_PATH
  | typeof CATEGORIZATION_STEP_PATH
  | typeof ANALYSIS_STEP_PATH;

export interface WizardStep {
  label: string;
  path: WizardStepPath;
}

/** Upload step configuration */
const UPLOAD_STEP = {
  label: "Upload",
  path: UPLOAD_STEP_PATH,
} satisfies WizardStep;

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

export const WIZARD_STEPS: WizardStep[] = [
  UPLOAD_STEP,
  CATEGORIZATION_STEP,
  ANALYSIS_STEP,
];
