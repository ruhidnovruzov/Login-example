/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 8px 24px rgba(149, 157, 165, 0.7)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}