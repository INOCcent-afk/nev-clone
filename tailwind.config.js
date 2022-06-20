/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
      blue: "#98d0ff",
      lightGray: "#f0f2f8",
      fontGray: "#bdc3c8",
      green: "#62dbbe",

      darkBlue: "#090c10",
      mediumBlue: "#0d1117",
      lightBlue: "#21262d",
      extraLightBlue: "#30363d",
    },
  },
  plugins: [],
};
