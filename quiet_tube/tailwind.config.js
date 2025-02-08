/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: "#478764",
        textBlack: "#0E1207",
      },
    },
  },
  plugins: [],
};
