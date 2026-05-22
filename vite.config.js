import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use root base so Vercel serves assets from the site root
  base: "/",
});
