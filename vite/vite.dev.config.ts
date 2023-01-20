import { defineConfig } from 'vite';
import atImport from 'postcss-import';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
    cors: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        // additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
        additionalData: `@import "@/sites/assets/styles/nutui.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
      postcss: {
        plugins: [atImport({ path: path.join(__dirname, '..', 'sites') })],
      },
    },
  },
});
