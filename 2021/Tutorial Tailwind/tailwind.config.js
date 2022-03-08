module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rale: ["Raleway"],
    },
    extend: {
      colors: {
        danger: "#ff5f40",
        info: {
          100: "#24a19c",
          200: "#6ebfb5"
        }
      }
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}
