import { sentryVitePlugin } from "@sentry/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    remix(),
    vanillaExtractPlugin(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: "xyz",
      project: "abc",
    }),
  ],
  build: {
    sourcemap: true,
  },
});
