 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["inter"],
    },
    extend: {
      backgroundImage: {
        open: "url('./assets/images/icon-menu.svg')",
        close: "url('./assets/images/icon-menu-close.svg')",
      }
    },
  },
  plugins: [],
}