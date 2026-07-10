import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GH_PAGES === 'true' ? '/gn_immo_frontend/' : '/',
  plugins: [react()],
})
