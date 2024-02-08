import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://SaifOwleN.github.io",
  base: "/Portfolio",
  integrations: [mdx(), sitemap(), tailwind(), icon(), react()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
