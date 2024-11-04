import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weather': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
      '/users': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
      '/user': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
      '/api/users/': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
      '/newUser': {
        target: 'http://localhost:1113',
        changeOrigin: true,
      },
    },
  },
});
