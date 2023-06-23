const { default: plugin } = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      textColor: {
        skin: {
          main: "var(--main-color)",
        },
      },
      backgroundColor: {
        skin: {
          overlay: "var(--bg-overlay)",
          first: "var(--first-color)",
          second: "var(--second-color)",
          third: "var(--third-color)",
          fourth: "var(--fourth-color)",
          fifth: "var(--fifth-color)",
          main: "var(--main-bg-color)",
        },
      },
      keyframes: {
        "up-down": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        "up-down": "1s infinite forwards up-down",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".unset": {
          position: "unset",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
