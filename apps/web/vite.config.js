import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/hooks", replacement: path.resolve(__dirname, "hooks") },
      { find: "@/lib", replacement: path.resolve(__dirname, "web/lib") },
      { find: "@/api", replacement: path.resolve(__dirname, "web/api") },
      { find: "@", replacement: path.resolve(__dirname, "web") },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
