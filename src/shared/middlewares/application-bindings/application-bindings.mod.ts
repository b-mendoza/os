import { AsyncLocalStorage } from "node:async_hooks";

import { createMiddleware, createServerOnlyFn } from "@tanstack/react-start";
import * as z from "zod";

import type { Env } from "#/shared/config/env/env.mod.server";
import { envSchema } from "#/shared/config/env/env.mod.server";
import { createS3StorageProvider } from "#/shared/storage/s3-storage.mod.server";
import type { StorageProvider } from "#/shared/storage/storage.types";
import { invariant } from "#/shared/utils/invariant/invariant.mod";

interface ApplicationBindingsValue {
  env: Env;
  storage: StorageProvider;
}

const ApplicationBindingsStorage =
  new AsyncLocalStorage<ApplicationBindingsValue>();

export const applicationBindingsMiddleware = createMiddleware({
  type: "request",
}).server(async (opts) => {
  const safeEnvironmentVariables = z.parse(envSchema, process.env);

  const storageProvider = createS3StorageProvider({
    bucketName: safeEnvironmentVariables.STORAGE_BUCKET,
    credentials: {
      accessKeyId: safeEnvironmentVariables.STORAGE_ACCESS_KEY_ID,
      secretAccessKey: safeEnvironmentVariables.STORAGE_SECRET_ACCESS_KEY,
    },
    endpoint: safeEnvironmentVariables.STORAGE_ENDPOINT,
    region: safeEnvironmentVariables.STORAGE_REGION,
  });

  return ApplicationBindingsStorage.run(
    {
      env: safeEnvironmentVariables,
      storage: storageProvider,
    },
    opts.next,
  );
});

export const getApplicationBindings = createServerOnlyFn(() => {
  const store = ApplicationBindingsStorage.getStore();

  invariant(
    store != null,
    "Failed to retrieve application bindings storage store",
  );

  return store;
});
