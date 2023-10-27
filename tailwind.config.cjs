/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mySpace: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
