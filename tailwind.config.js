module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "black",
      primaryBg: "#ea3a48",
      secondary: "#0798bc",
      text_primary: "#002244",
      text_secondary: "#353b48",
      text_gray: "#555"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
