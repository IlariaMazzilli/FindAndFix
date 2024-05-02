/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'flowbite.content()',
  ],
  theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'sm': {'max': '431px'},
        // => @media (max-width: 431px) { ... }
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
    'flowbite.plugin()'
  ],
};