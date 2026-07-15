import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sanity-api': {
        target: 'https://tdcw2j5b.api.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sanity-api/, ''),
      },
    },
  },
})
