import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), createHtmlPlugin()],
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
      { find: /^~/, replacement: "" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
