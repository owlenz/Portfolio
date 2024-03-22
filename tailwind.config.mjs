/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				bgGlow: "bgGlow 2s linear infinte",
			},
			keyframes: {
				bgGlow: {
					to: { "background-position": "200% center" },
				},
			},
		},
		fontFamily: {
			merriweather: ["Merriweather", "serif"],
			ibm: ["IBM Plex Sans", "sans-serif"],
			ubuntu: ["Ubuntu", "sans-serif"],
			montagu: ["Montagu Slab", "serif"],
			poppins: ["Poppins", "sans-serif"],
			inter: ["Inter", "sans-serif"],
			expose: ["Expose", "sans-serif"],
			persona: ["Persona", "sans-serif"],
			optima: ["Optima", "sans-serif"],
			krsm: ["KoreanKRSM", "sans-serif"],
		},
	},
	plugins: [],
};
