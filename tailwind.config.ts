import { type Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "forest"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
