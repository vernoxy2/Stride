/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        stride: "#C09D78",
        secondary: "#1B2E3C",
        bg: "#F9F9F9",
      },
      fontFamily: {
        helvetica: ["HelveticaNeue", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // move half the width (since we duplicated items)
        },
        scrollReverse: {
          "0%": { transform: "translateX(-100%)" }, // start from -50%
          "100%": { transform: "translateX(0)" }, // move to 0
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite", // make it slower/smoother
        scrollReverse: "scrollReverse 5s linear infinite",
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
