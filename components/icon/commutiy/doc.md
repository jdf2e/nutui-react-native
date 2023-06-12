# Icon 图标

### 介绍

基于 IconFont 字体的图标集，可以通过 Icon 组件使用。

### 安装

```tsx
// react
import { Icon } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

:::demo

```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD"/>
    <Icon
      size={40}
      name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"/>
  </>
}
export default App;
```

:::

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

:::demo

```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" color="#fa2c19" />
    <Icon name="dongdong" color="#64b578" />
    <Icon name="JD" color="#fa2c19" />
  </>
}

export default App;
```

:::

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小。

:::demo

```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="dongdong" size={24} />
    <Icon name="dongdong" size={16} />
  </>
}

export default App;
```

:::

## API

### Props

| 参数  | 说明               | 类型   | 默认值 |
| ----- | ------------------ | ------ | ------ |
| name  | 图标名称或图片链接 | String | -      |
| color | 图标颜色           | String | -      |
| size  | 图标大小，如 `20`  | Number | -      |

### Events

| 事件名          | 说明           | 回调参数     |
| --------------- | -------------- | ------------ |
| onClick`v1.3.8` | 点击图标时触发 | event: Event |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                | 默认值 |
| ------------------- | ------ |
| --nutui-icon-height | `20`   |
| --nutui-icon-width  | `20`   |
