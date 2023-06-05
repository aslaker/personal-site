/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "forest"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;

export default config;
