import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      manualChunks: {
        react: ['react', 'react-dom'],
        material: ['@mui/material'],
        router: ['react-router-dom'],
      },
    },
  },
  server: {
    port: Number(process.env.PORT ?? 5001),
  },
  base: './',
})
