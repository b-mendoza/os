import { rm } from "node:fs/promises";

const DIRS = ["coverage/", "dist/", "node_modules/", "pnpm-lock.yaml"];

await Promise.all(
  DIRS.map(async (path) =>
    rm(path, {
      force: true,
      recursive: true,
    }),
  ),
);
