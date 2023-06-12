# ConfigProvider 全局配置

### 介绍

用于全局配置 NutUI-React 组件，提供国际化支持。

### 安装

```tsx
import { ConfigProvider } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react';
import { ConfigProvider } from "@nutui/nutui-react-native";
import en from "@nutui/nutui-react/dist/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

:::

## API

### Props

| 参数   | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| locale | 设置多语言包 | BaseLang | zhCN   |
