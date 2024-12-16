import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: '1030px',
        mobile: '769px',
      },
      fontFamily: {
        tektur: ["var(--font-tektur)"],
      },
      colors: {
        regal_black: "#1C1C1C",
        regal_half_black: "#2B2B2B",
        regal_white: "#FFFFFF",
        regal_red: "#B3321E",
        regal_yellow: "#ffc822"
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
};

export default config;
