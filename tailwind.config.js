const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: colors.emerald,
      },
      textColor: {
        primary: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
