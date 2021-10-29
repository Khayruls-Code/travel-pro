module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "black",
      primaryBg: "#ea3a48",
      secondary: "#0798bc"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
