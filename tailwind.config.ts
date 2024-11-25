import type { Config } from "tailwindcss";
import { BLUE_PRIMARY, DARKBLUE_PRIMARY, DRAKGRAY_PRIMARY, GRAY_PRIMARY, GRAY_SECONDARY, WHITE_PRIMARY } from "./constants/COLORS";

export default {
  content: [
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        WHITE_PRIMARY: WHITE_PRIMARY,
        GRAY_PRIMARY: GRAY_PRIMARY,
        GRAY_SECONDARY: GRAY_SECONDARY,
        BLUE_PRIMARY: BLUE_PRIMARY,
        DARKBLUE_PRIMARY: DARKBLUE_PRIMARY,
        DRAKGRAY_PRIMARY: DRAKGRAY_PRIMARY,
      },
    },
  },
  plugins: [],
} satisfies Config;
