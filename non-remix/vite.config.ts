import { sentryVitePlugin } from "@sentry/vite-plugin";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
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
