/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: "#DBE9F2",
        honeydew: "#CFEDCA",
        vanilla: "#FFFA03",
        eerieblack: "#212121",
        ghostwhite: "#F6F5FA",
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