/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'marcilio-blue': {
      100: '#E5FAFC',
      300: '#A0C0D6',
      500: '#425A7D',
      700: '#2A3240',
    },
    'marcilio-orange': '#DF7356',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}

