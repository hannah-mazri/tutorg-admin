const { screens, spacing, fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans]
      },
      transitionProperty: {
        'width': 'width'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
