/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px)

      laptop: "1024px",
      // => @media (min-width: 1024px)

      TV: "1900px",
      // => @media (min-width: 1280px)
    },
    extend: {},
  },
  plugins: [],
};
