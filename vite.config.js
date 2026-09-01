import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      ignored: ["**/FINAL_JSX_VENUES/**"],
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
});
