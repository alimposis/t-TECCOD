import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'https'
import { start } from 'repl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    ],
    server:{
      open:true,
    },
})
