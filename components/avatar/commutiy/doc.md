# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装

```tsx
import { Avatar } from '@nutui/nutui-react-native';
```

## 代码示例

### 基本用法

支持三种尺寸：small、normal、large

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar
        size="normal"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar
        size="small"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
    </>
  )
}
export default App;
```

:::

### 头像形状

支持两种形状：square、round

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Avatar icon="my" shape="square" />
      <Avatar icon="my" shape="round" />
    </>
  )
}
export default App;
```

:::

### 头像类型

支持三种类型：图片、Icon 以及字符

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Avatar
        source={{
          uri: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
        }}
      />
      <Avatar icon="my" />
      <Avatar>N</Avatar>
    </>
  )
}
export default App;
```

:::

### 自定义颜色及背景色

Icon 和字符型可以自定义图标颜色及背景色

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Avatar icon="my" color="#fff" bgColor="#FA2C19" />
      <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```

:::

### Prop

| 字段              | 说明                                                             | 类型                          | 默认值 |
| ----------------- | ---------------------------------------------------------------- | ----------------------------- | ------ |
| size              | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字 | String                        | normal |
| shape             | 设置头像的形状，可选值为：square、round                          | String                        | round  |
| bgColor           | 设置 Icon、字符类型头像的背景色                                  | String                        | #eee   |
| color             | 设置 Icon、字符类型头像的颜色                                    | String                        | #666   |
| source            | 设置图片类型头像的地址                                           | {uri: xxxx} or require('xxx') | -      |
| icon              | 设置 Icon 类型头像图标, 类似 Icon 组件的 name 属性               | String                        | -      |
| iconSize`v1.3.11` | [图标尺寸](#/icon)                                               | String、Number                | `16`   |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                         | 默认值 |
| ---------------------------- | ------ |
| --nutui-avatar-square        | ` 5`   |
| --nutui-avatar-large-width   | ` 60`  |
| --nutui-avatar-large-height  | ` 60`  |
| --nutui-avatar-small-width   | ` 32`  |
| --nutui-avatar-small-height  | ` 32`  |
| --nutui-avatar-normal-width  | ` 40`  |
| --nutui-avatar-normal-height | ` 40`  |
