/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      Josefin: ['Josefinsans', ]
    },  
    extend: {
      colors: {
        'grey-50': '#EAEAEA',
        'grey-100': '#BDBDBD',
        'grey-200': '#9d9d9d',
        'grey-300': '#707070',
        'grey-400': '#545454',
        'grey-500': '#292929',
        'grey-600': '#252525',
        'grey-700': '#1d1d1d',
        'grey-800': '#171717',
        'grey-900': '#111111',
      }
    },
  },
  plugins: [],
}

