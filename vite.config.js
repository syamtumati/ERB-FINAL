import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  const isNetlify = !!process.env.NETLIFY;
  const isGithubPages = !!process.env.GITHUB_PAGES;

  return {
    plugins: [react()],
    server: {
      port: 5173,
    },
    base: isNetlify
      ? "/"
      : isGithubPages
      ? "/ERB-FINAL/"
      : "/",
  };
});

