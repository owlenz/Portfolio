import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://owlenz.xyz",
	integrations: [
		mdx(),
		sitemap(),
		tailwind({ applyBaseStyles: false }),
		icon(),
		react(),
	],
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
