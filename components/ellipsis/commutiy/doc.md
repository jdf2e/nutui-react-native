# Ellipsis 组件

### 介绍

展示空间不足时，隐去部分内容并用“...”替代。

### 安装

```tsx
// react
import { Ellipsis } from '@nutui/nutui-react-native';
```

## 代码演示

### 头部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react-native';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start"/>
    </Cell>
  );
};
export default App;
```

:::

### 尾部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react-native';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="end"/>
    </Cell>
  );
};
export default App;
```

:::

### 中间省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react-native';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
      <Ellipsis content={content} direction="middle"/>
    </Cell>
  );
};
export default App;
```

:::

### 多行省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start" rows="3"/>
    </Cell>
  );
};
export default App;
```

:::

## API

### Props

| 参数       | 说明       | 类型           | 默认值 |
| ---------- | ---------- | -------------- | ------ | -------- | ----- |
| content    | 文本内容   | String         | -      |
| direction  | 省略位置   | 'start'        | 'end'  | 'middle' | 'end' |
| rows       | 展示几行   | Number         | 1      |
| lineHeight | 容器的行高 | String、Number | 20     |
