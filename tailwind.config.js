/** @type {import('tailwindcss').Config} */
import colors from "./src/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        footer: "32px",
      },
      lineHeight: {
        footer: "38px",
      },
      colors: {
        ...colors,
      },
      backdropBlur: {
        '30': '30px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #000000 0%, #00000000 47%, #000000 100%)',
      },
    },
  },
  plugins: [],
};
