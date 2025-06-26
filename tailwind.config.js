/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegray: "#DBDFE9",
        greenish: "#CFDECA",
        vanilla: "#EFF0A3",
        dark: "#212121",
        light: "#F6F5FA",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        lg: "0.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(33,33,33,0.06)",
      },
    },
  },
  plugins: [],
} 