import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trustlex_partners/', 

  plugins: [react()],
})