import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // Import 'path' module
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
