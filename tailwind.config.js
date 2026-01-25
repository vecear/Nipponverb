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
        'ukiyo-indigo': '#1E293B', // Night Sky (Dark Slate)
        'ukiyo-light-indigo': '#334155', // Lighter Night
        'ukiyo-red': '#EF4444',    // Lantern Red (Brighter for dark mode)
        'ukiyo-gold': '#FACC15',   // Moon Gold
        'ukiyo-ink': '#0F172A',    // Deepest Dark
        'ukiyo-paper': '#1E293B',  // Dark Paper/Wood
      },
      fontFamily: {
        'dot': ['"DotGothic16"', 'sans-serif'],
        'mincho': ['"Shippori Mincho"', 'serif'],
        'noto': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
