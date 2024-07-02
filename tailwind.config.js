/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#8750F7",
      },
      fontFamily: {
        sora: "'Sora', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
