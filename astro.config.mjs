import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// Helper imports
import { manifest } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        globDirectory: "dist",
        globPatterns: [
          "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
        ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  site: "https://skollhatem.github.io/",
  base: "/",
});
