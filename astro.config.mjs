import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://owlenz.xyz",
	integrations: [
		mdx(),
		sitemap(),
		// tailwind({ applyBaseStyles: false }),
		icon(),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
		// server: {
		// 	watch: {
		// 	  usePolling: true,
		// 	  interval: 100,
		// 	},
		// },
	},
});
