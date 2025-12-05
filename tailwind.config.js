/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.html",
    "./*.html",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'esprit-red': '#8B0000',
        'esprit-red-light': '#A52A2A',
        'esprit-pink': '#FFE4E1',
        'esprit-purple': '#9370DB',
        'crimson': '#DC143C',
        'success': '#4CAF50',
        'light-bg': '#F3F7F8',
        'dark-text': '#333333',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'almarai': ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

