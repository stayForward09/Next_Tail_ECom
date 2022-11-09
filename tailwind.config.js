/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fast_blue: {
          light: "#5271ff",
          DEFAULT: "#3552c8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
