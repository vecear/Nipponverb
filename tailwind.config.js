/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nihon-indigo': '#003366',
        'sakura-pink': '#FFB7C5',
        'electric-cyan': '#00D9FF',
      },
      fontFamily: {
        'noto': ['"Noto Sans JP"', 'sans-serif'],
        'zen': ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
