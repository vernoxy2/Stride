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
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
