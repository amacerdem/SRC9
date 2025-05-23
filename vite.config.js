import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/SRC9/", // Repo adınla birebir aynı olmalı
  plugins: [react()],
})

 