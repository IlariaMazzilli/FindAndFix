/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'flowbite.content()',
  ],
  theme: {
      screens: {
        '2xlarge': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xlarge': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'large': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'medium': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'mobile': {'max': '431px'},
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
    'flowbite.plugin()',
    '@tailwindcss/forms'
  ],
  darkMode:'class'
};