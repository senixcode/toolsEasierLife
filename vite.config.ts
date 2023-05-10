import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvPLugin from 'vite-plugin-environment'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),EnvPLugin(['VITE_API_URL'])],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'core', replacement: path.resolve(__dirname, 'src/core') },
      { find: 'domains', replacement: path.resolve(__dirname, 'src/domains') },
      { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') }
    ]
  },
})
