import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import vitePluginCssModules from "vite-plugin-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      'src': '/src',
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]--[hash:base64:5]',
    }
  }
});
