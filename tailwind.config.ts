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
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

