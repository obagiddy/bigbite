/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 15s infinite",
        underline: "underlineAnimation 0.3s ease-in-out",
      },
      keyframes: {
        underlineAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
      }
    },
  },
  plugins: [],
};
