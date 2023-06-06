import React, { FunctionComponent, createContext, useContext } from 'react';
import { BaseLang } from './locales/types';
import zhCN from './locales/zh-CN';
import { theme } from './styles';
import Portal from '../portal';
export interface ConfigProviderProps {
  locale: BaseLang;
  theme: any;
}

const defaultProps = {
  locale: zhCN,
  theme: {
    mode: 'light',
    ...theme
  }
} as ConfigProviderProps;

export const defaultConfigRef: {
  current: ConfigProviderProps;
} = {
  current: {
    locale: zhCN,
    theme: {
      mode: 'light',
      ...theme
    }
  }
};

export const setDefaultConfig = (config: ConfigProviderProps) => {
  defaultConfigRef.current = config;
};

export const getDefaultConfig = () => {
  return defaultConfigRef.current;
};

export const useConfig = () => {
  return useContext(ConfigContext) ? useContext(ConfigContext) :  getDefaultConfig();
};

// 创建一个 Context 对象
const ConfigContext = createContext<ConfigProviderProps>(defaultProps);

export const ConfigProvider: FunctionComponent<
  Partial<ConfigProviderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, ...config } = { ...defaultProps, ...props };
  const parentConfig = useConfig();

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      <Portal.Host>{children}</Portal.Host>
    </ConfigContext.Provider>
  );
};

ConfigProvider.defaultProps = defaultProps;
ConfigProvider.displayName = 'NutConfigProvider';
