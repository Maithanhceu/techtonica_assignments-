import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1113', 
        changeOrigin: true,
      },
      '/add': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
      '/translate': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      }
    },
  },
});
