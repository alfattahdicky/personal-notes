/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-placeholder': 'rgba(0,0,0,.4)',
        'black-btn': '#232323',
      },
      boxShadow: {
        input: '0 0 5px rgba(0,0,0,.46)',
        card: '5px 7px 6px rgba(0,0,0,.5)',
      },
    },
  },
  plugins: [],
};
