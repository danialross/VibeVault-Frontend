/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "dark-violet": "#8A2BE2",
      },
      fontSize: { intro: "12rem" },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawErase: {
          "0%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
          "33%, 66%": {
            transform: "translateX(100%)",
            opacity: 1,
          },
          "66.1%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },

          "66.2%": {
            transform: "translateX(-100%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        drawErase: "drawErase 3s ease-in-out forwards",
        appear: "appear 1s ease-out",
      },
    },
  },
  plugins: [],
};
