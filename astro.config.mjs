import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// Helper imports
import { manifest } from './src/utils/seoConfig'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    AstroPWA({
      manifest,
      devOptions: {
        enabled: true,
      },
    }),
  ],
  site: "https://skollhatem.github.io/",
  base: "/",
});
