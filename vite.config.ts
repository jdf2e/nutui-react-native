import { defineConfig } from 'vite';
import config from './vite/config';

export default defineConfig(({ mode }) => {
  return config({ mode });
});
