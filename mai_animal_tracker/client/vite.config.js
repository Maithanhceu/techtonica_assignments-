import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css:true, 
    setupFiles: './setupTests.js',
  },
  server: {
    proxy: {
      //create a proxy to the backend 
      '/api': {
        target: 'http://localhost:1113'
      }
    }
  }
})
