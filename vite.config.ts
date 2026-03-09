import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    devtools(),
    cloudflare({
      viteEnvironment: {
        name: "ssr",
      },
    }),
    tsconfigPaths({
      projectDiscovery: "lazy",
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
});
