/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bracked': ['Roboto', 'sans-serif'],
        'maqon': ['Maqon', 'sans-serif'],
        "Josefin":['Josefin', 'sans-serif'],
        'Macon':["Macondo", 'cursive'],

      },
    },
  },
  plugins: [],
}
