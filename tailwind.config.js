const colors=require('tailwindcss/colors')

module.exports = {
  purge: [],purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green:colors.emerald,
      cyan:colors.cyan,
      blue:colors.blue,
      orange:colors.orange,
      teal:colors.teal,
      white:colors.white,
      black:colors.black,

    },

    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
