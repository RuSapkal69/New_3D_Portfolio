/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
        playwrite: ["Playwrite NL Guides", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        rubikVinyl: ["Rubik Vinyl", "sans-serif"],
      },
    },
  },
  plugins: [],
}