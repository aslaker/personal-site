const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: colors.emerald,
        secondary: colors.coolGray,
      },
      textColor: {
        primary: colors.emerald,
        secondary: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
