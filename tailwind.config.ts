import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f14",
        accent: {
          blue: "#38bdf8"
        },
        "neo-white": "#f8f8f8",
        "neo-black": "#111111",
        "neo-yellow": "#FFE66D",
        "neo-blue": "#4ECDC4",
        "neo-pink": "#FF6B6B",
        "neo-green": "#95E1A3",
        "neo-orange": "#FFA07A",
        "neo-purple": "#C9B1FF",
        "neo-dark-bg": "#1a1a1a",
        "neo-dark-card": "#252525",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.35)",
        "neo-sm": "4px 4px 0px 0px #111111",
        "neo-md": "6px 6px 0px 0px #111111",
        "neo-lg": "8px 8px 0px 0px #111111",
        "neo-dark-sm": "4px 4px 0px 0px #000000",
        "neo-dark-md": "6px 6px 0px 0px #000000",
        "neo-dark-lg": "8px 8px 0px 0px #000000",
      },
      transitionTimingFunction: {
        "neo-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }
    }
  },
  plugins: []
};

export default config;

