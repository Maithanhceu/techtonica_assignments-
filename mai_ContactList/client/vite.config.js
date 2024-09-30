import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/mai_contacts': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/maiAdd': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/mai_contacts/:id': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/mai_add/:id': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jdom',
  }
});