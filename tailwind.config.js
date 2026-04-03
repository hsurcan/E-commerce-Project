/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
        DEFAULT: '2rem',     
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '8rem',      
      },
      }, 
      colors: {
        'primary-blue': '#23A6F0',
        'success-green': '#23856D',
        'alert-orange': '#E77C40',
        'dark-blue': '#252B42',
        'second-text': '#737373',
        'light-gray': '#FAFAFA',
        'hover-color': '#2A7CC7',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}