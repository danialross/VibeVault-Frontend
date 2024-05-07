/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        nunito: ["Nunito,sans-serif"],
      },
      colors: {
        "dark-violet": "#8A2BE2",
      },
    },
  },
  plugins: [],
};
