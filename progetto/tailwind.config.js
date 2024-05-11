/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'flowbite.content()',
  ],
  theme: {
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