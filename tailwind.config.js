export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#516288",
          pink: "#F65772",
        }
      },
      fontFamily: {
        sans: ["Play", 'sans-serif'],
      }
    },
  },
  plugins: [],
}