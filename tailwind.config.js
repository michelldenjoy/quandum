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
          dark: "001F3F"
        }
      },
      fontFamily: {
        body: ["Roboto", 'sans-serif'],
        title: ["Play", 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}