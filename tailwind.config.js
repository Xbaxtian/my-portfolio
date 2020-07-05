const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat'],
    },
    colors: {
      ...colors,
      blue: {
        ...colors.blue,
        '900': '#152430',
      },
    },
  },
  variants: {},
  plugins: [],
};
