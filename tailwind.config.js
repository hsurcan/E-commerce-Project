/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Görseldeki renk paleti
        'primary-blue': '#23A6F0',
        'success-green': '#23856D',
        'alert-orange': '#E77C40',
        'dark-blue': '#252B42',
        'second-text': '#737373',
        'light-gray': '#FAFAFA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}