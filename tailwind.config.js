/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        hero: "50em",
      },
      backgroundColor: {
        heroBiege: "#e9ad96",
      },
    },
  },
  plugins: [],
};
