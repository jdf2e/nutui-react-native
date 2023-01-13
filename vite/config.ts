import { mergeConfig } from 'vite';
import baseConfig from './vite.base.config';
import devConfig from './vite.dev.config';
import prodConfig from './vite.prod.config';

interface Props {
  mode: any;
}

export default ({ mode }: Props) => {
  if (mode === 'development') {
    return mergeConfig(baseConfig, devConfig);
  }
  return mergeConfig(baseConfig, prodConfig);
};
