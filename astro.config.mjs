import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    AstroPWA({
      devOptions: {
        enabled: true,
      },
    }),
  ],
  site: "https://skollhatem.github.io/",
  base: "/",
});
