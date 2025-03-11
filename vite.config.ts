import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://192.168.15.7:5000',
          changeOrigin: true,
          secure: false
        }
      },
      open: true
    }
})
