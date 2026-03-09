import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projectDiscovery: "lazy",
      projects: ["./tsconfig.json"],
    }),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  test: {
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      provider: "istanbul",
    },
    environment: "happy-dom",
    include: ["./src/**/*.test.{ts,tsx}"],
    restoreMocks: true,
    setupFiles: ["./src/tests/setup-test-env.ts"],
  },
});
