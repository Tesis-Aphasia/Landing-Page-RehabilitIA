import { defineConfig } from "tailwindcss";

export default defineConfig({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "brand-blue-light": "#A7D0F0",
        "brand-lavender": "#CDB4DB",
        "brand-green-soft": "#B7E4C7",
        "brand-gray-warm": "#F7F7F7",
        "brand-text-dark": "#0d121b",
        "brand-text-light": "#6b7280"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
});
