const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    aspectRatio: {
      '4/3': '4 / 3',
      '16/9': '16 / 9',
    },
    borderWidth: {
      '1': '1px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    flex: {
      '2': '0 0 25%',
      '3': '0 0 50%',
    },

    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        body: ["YakuHanJP", "Noto Sans JP", "Hiragino Kaku Gothic", "Yu Gothic", ...defaultTheme.fontFamily.sans],
        heading: ["YakuHanJP", "Montserrat", "Noto Sans JP", "Hiragino Kaku Gothic", "Yu Gothic", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        'white': '#fefefe',
        'black': '#333333',
        'f4f4f5': '#f4f4f5',
        'dbdad8': '#dbdad8',
        'd1cecc': '#d1cecc',
        '232d40': '#232d40',
        '4e575a': '#4e575a',
        'grayscale100': '#1b152c',
        'ecdb56': '#ecdb56',
        '455b78': '#455b78',
      }
    },
  },
  plugins: [],
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
}