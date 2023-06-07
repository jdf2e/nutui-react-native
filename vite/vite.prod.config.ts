import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

import packageJson from '../package.json';

const banner = `/*!
* ${packageJson.name} v${packageJson.version} ${new Date()}
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/`;

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        // additionalData: `@import "@/styles/variables.scss";`,
        additionalData: `@import "@/sites/assets/styles/nutui.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              '> 0.5%',
              'last 2 versions',
              'ie > 11',
              'iOS >= 10',
              'Android >= 5',
            ],
          }),
        ],
      },
    },
  },
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      // external: ['react', 'react-dom'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
      },
    },
  },
});
