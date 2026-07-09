/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fed136',
          dark: '#ecb807',
        },
        dark: '#212529',
        'light-gray': '#d4d4d4f3',
        'medium-gray': '#777',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        serif: ['Droid Serif', 'Roboto Slab', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
