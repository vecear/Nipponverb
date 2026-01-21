import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      path: 'path-browserify',
      kuromoji: 'kuromoji/build/kuromoji.js',
    },
  },
})
