/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'body-overpass-base': '1rem',
        'title-lexend-medium': '1.125rem',
        'title-lexend-large': '1.5rem',
        'font-size-xs': '0.75rem',
      },

      fontFamily: {
        'title-lexend': "Lexend Exa",
        'body-overpass': "Overpass Mono",
      },
      
      colors: {
        'page-background': '#2d2c5f',
        'page-accent-gray': '#242424',
        'white': '#fff',
        'lilac': '#f1dbfc',
        'icon-color': '#FFF',
        'purple-accent': '#D5A6ED',
        'navbar-background-gradient': 'linear-gradient(180deg, #2D2C5F 80.9%, rgba(45, 44, 95, 0.00) 100%)',
        'custom-hover-blue': '#002ead',
      },

      backgroundImage: {
        'gradient-overlay': 'linear-gradient(0deg, rgba(36, 36, 36, 1) 5.72%, rgba(36, 36, 36, 0.5) 80.07%, rgba(36, 36, 36, 0) 100%)',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  plugins: [],
}

