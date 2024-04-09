/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ece5dd",
          200: "#dcf8c6",
          300: "#25d366",
          400: "#128c7e",
          500: "#075e54",
        },
        secondary: {
          100: "#34b7f1",
        },
      },
    },
  },
  plugins: [],
};
