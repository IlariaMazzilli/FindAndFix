/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'flowbite.content()',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      ibmPlexSans: ['IBM Plex Sans', 'sans-serif'],
      arimo: ['Arimo', 'sans-serif'],
    },
    
    extend: {
      colors: {
        customBlue: "#0F5DA6",
        customGreen: "#66BC46",
        customGrey: "#ebeef2"
      },
    },
  },
  plugins: [
    'flowbite.plugin()',
    '@tailwindcss/forms'
  ],
  darkMode:'class'
};