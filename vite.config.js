import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      // Avoid preloading every lazy chunk on phones — only entry + CSS.
      resolveDependencies: (_filename, deps) =>
        deps.filter((d) => d.endsWith(".css")),
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          if (id.includes("node_modules/@emailjs") || id.includes("node_modules/@formspree")) {
            return "forms";
          }
          if (id.includes("/src/data/blogPosts")) {
            return "blog-data";
          }
        },
      },
    },
  },
});
