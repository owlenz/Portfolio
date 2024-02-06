/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      merriweather: ["Merriweather", "serif"],
      ibm: ["IBM Plex Sans", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      montagu: ["Montagu Slab", "serif"],
      poppins: ["Poppins", "serif"],
    },
  },
  plugins: [],
};
