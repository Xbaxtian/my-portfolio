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
      gray: {
        ...colors.gray,
        '200': '#E0E0E0', //label
        '300': '#C4C4C4',
        '700': '#828282', // Text
        '800': '#4F4F4F', // Subtitle
        '900': '#333333', //Title
      },
    },
    borderRadius: {
      default: '12px',
    },
  },
  variants: {},
  plugins: [],
};
