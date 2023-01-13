# ConfigProvider 全局配置

### 介绍

用于全局配置 NutUI-React 组件，提供国际化支持。

```SnackPlayer name=ConfigProvider&dependencies=nutui-rn
import React from 'react';
import { ConfigProvider, Textarea } from "nutui-rn";
import en from "nutui-rn/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

### 安装

```javascript
import { ConfigProvider } from 'nutui-rn';
```

## 代码演示

### 基础用法

```SnackPlayer name=ConfigProvider&dependencies=nutui-rn
import React from 'react';
import { ConfigProvider, Textarea } from "nutui-rn";
import en from "nutui-rn/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

## API

### Props

| 参数   | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| locale | 设置多语言包 | BaseLang | zhCN   |
