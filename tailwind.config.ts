import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#062B49",
          deep: "#021B2F",
          soft: "#0A3D62",
        },
        gold: {
          DEFAULT: "#C89B5A",
          muted: "#B48746",
        },
        linen: "#F8F7F4",
        borderWarm: "#E7E3DC",
        ink: "#1D2939",
        muted: "#667085",
        background: "#FFFFFF",
        foreground: "#1D2939",
        border: "#E7E3DC",
        primary: "#062B49",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(2, 27, 47, 0.14)",
        card: "0 16px 45px rgba(2, 27, 47, 0.08)",
      },
      animation: {
        "shiny-text": "shiny-text 8s infinite",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
