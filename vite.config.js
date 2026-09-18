import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        trusted: path.resolve(__dirname, 'trusted.html'),
        cennik: path.resolve(__dirname, 'cennik.html'),
        vision: path.resolve(__dirname, 'vision.html'),
        faq: path.resolve(__dirname, 'faq.html'),
      },
    },
  },
})
