const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat'],
    },
    colors: {
      blue: {
        ...colors.blue,
        '900': '#223f6a',
      },
    },
  },
  variants: {},
  plugins: [],
};
