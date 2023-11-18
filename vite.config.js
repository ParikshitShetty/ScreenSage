import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_SEARCH' : JSON.stringify(process.env.VITE_SEARCH),
    'process.env.VITE_ID' : JSON.stringify(process.env.VITE_ID),
    'process.env.VITE_TITLE' : JSON.stringify(process.env.VITE_TITLE),
    'process.env.VITE_KEY' : JSON.stringify(process.env.VITE_KEY)
  }
})
