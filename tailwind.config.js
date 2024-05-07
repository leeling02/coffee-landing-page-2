/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFE4C4'
      }
    },
    fontFamily: {
      primary: ["Playfair Display","serif"],
      secondary: ["Poppins","sans-serif"]
    }
  },
  plugins: [require('daisyui'),],
}

