/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn-white-rounded": {
          padding: ".75rem  1.5rem",
          borderRadius: "9999px",
          // fontSize: "18px",
          fontWeight: "700",
          backgroundColor: "#000",
          color: "#a3aad0",
          border: "solid 1px #a3aad0",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            // boxShadow: "3px 3px 15px #33e2ffa6, -3px -3px 15px #c341ffa6",
          },
        },
      });
    }),
  ],
};
