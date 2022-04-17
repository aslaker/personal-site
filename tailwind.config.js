const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ltsm: { max: "640px" },
        ltmd: { max: "1023px" },
        ltlg: { max: "1279px" },
        ltxl: { max: "1280px" },
      },
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
