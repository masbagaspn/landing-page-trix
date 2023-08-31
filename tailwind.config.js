/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
      },
      colors: {
        yellow: {
          primary: "#F6CD55",
          secondary: "#FFC40D",
        },
        blue: {
          primary: "#4A7CB9",
        },
        brown: "#7E4538",
        white: "#EAEAEA",
        grey: "#E1E1E1",
      },
      dropShadow: {
        grey: "-2px 0 0 rgb(200,199,199)",
        trixadon: "12px -14px 34px rgba(255,255,255,0.25)",
        service: "0 12px 20px rgba(0,0,0,0.25)",
        "price-start": "0 4px 4px rgba(0,0,0,0.3)",
        "price-price": "-4px -2px 4px rgba(0,0,0,0.4)",
        "price-title": "0 4px 4px rgba(0,0,0,0.48)",
        case: "0 10px 30px rgba(0,0,0,0.25)",
        jargon: "0 -2px 4px rgba(0,0,0,0.75)",
        offer: "0 10px 20px rgba(0,0,0,0.25)",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
