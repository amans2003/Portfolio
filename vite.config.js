import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  preview: {
    host: true,
    port: 10000,
    allowedHosts: [".onrender.com"],
  },
});
