// vite.config.gh.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'my-repo' with your actual GitHub repo name
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  base: "/digital-canvas/",
});
