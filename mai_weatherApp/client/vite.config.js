import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  '/weather': {
        target: 'http://localhost:1113', 
        changeOrigin: true,
      },
})
