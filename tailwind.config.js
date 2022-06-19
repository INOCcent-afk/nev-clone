/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "996px",

        desktop: "1199px",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      aurora: "#f7f2f2",
      gray: "#ede8e8",
      blue: "#bddcfc",
    },
  },
  plugins: [],
};
