/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      sidebar: '#F6F8FC',
      sbaractive: '#D3E3FD',
      compose:'#C2E7FF',
      search:'#EAF1FB',
      primary:'#0B57D0',
      promo:'#188038',
      social:'#1A73E8',
      // ...
    },
    extend: {},
  },
  plugins: [],
}
