/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite'
        
      }
    },
  },
  plugins: [],
}

