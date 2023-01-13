import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const { resolve } = path;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, '..') }],
  },
  plugins: [react()],
});
