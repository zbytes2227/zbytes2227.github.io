import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3030/",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  // base: '/',
  plugins: [react()],
})
