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
  build: {
    // Optimize build output
    target: ["es2015", "safari13"],
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
    },
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion", "@lottiefiles/dotlottie-react"],
          "ui-vendor": ["lucide-react"],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps only for errors
    sourcemap: false,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
});
