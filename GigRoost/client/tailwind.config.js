/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pallette1: "#790000",
        pallette2: "#970000",
        pallette3: "#BA2727",
        pallette4: "#424242",
        pallette5: "#CCCCCC",
        pallette6: "#DDDDDD",
      },
    },
  },
  plugins: [],
};