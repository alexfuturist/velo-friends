import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: path.resolve(__dirname, 'src') },
  //   ],
  // },
  // root: './src',
  resolve: {
    alias: {
      'src': '/src',
    },
  },
});