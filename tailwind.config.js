/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b0b0b",
        secondary: "#3d1c56",
        accent: "#a855f7",
      }
    },
  },
  plugins: [],
}