/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],  theme: {
    extend: {
        colors: {
          'cloud-burst': {
            '50': '#f4f4f6', 
            '100': '#e9e9ed', 
            '200': '#c8c9d1', 
            '300': '#a7a9b5', 
            '400': '#66687e', 
            '500': '#242747', 
            '600': '#202340', 
            '700': '#1b1d35', 
            '800': '#16172b', 
            '900': '#121323'
        },
        'international-orange': {
          '50': '#fff6f3', 
          '100': '#ffeee7', 
          '200': '#fed4c3', 
          '300': '#fdb99f', 
          '400': '#fc8557', 
          '500': '#fa510f', 
          '600': '#e1490e', 
          '700': '#bc3d0b', 
          '800': '#963109', 
          '900': '#7b2807'
        },
        'alto': {
          '50': '#fdfdfd', 
          '100': '#fbfbfb', 
          '200': '#f6f6f6', 
          '300': '#f0f0f0', 
          '400': '#e4e4e4', 
          '500': '#d9d9d9', 
          '600': '#c3c3c3', 
          '700': '#a3a3a3', 
          '800': '#828282', 
          '900': '#6a6a6a'
      }
      },
      backgroundImage: {
        'home-image': "url('/src/img/ho.png')",
        'about-image': "url('/src/img/about.png')"
       
      },
      fontFamily: {
        'sans': "'Maven Pro', sans-serif;",
        'anton':"'Anton', sans-serif;"
      }
      },
    },
    plugins: [],
  }