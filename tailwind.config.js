/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F99909',
        'secondary': '#CDCCCC',
        'tertiary': '#575757',
        'accent': '#4E4E4E',
        'primaryalt': '#251E13',
        'dark': '#1A1A1A'
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
