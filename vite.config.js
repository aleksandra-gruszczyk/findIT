import react from '@vitejs/plugin-react'
import path from "path";
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  })],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './client/assets'),
      '@components': path.resolve(__dirname, './client/components'),
      '@pages': path.resolve(__dirname, './client/pages'),
      '@store': path.resolve(__dirname, './client/store'),
    },
  },
  // Dev server proxy, does not apply to production build:
  // https://vitejs.dev/config/server-options.html#server-proxy
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
