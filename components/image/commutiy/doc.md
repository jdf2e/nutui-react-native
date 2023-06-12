# Image 组件

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

### 安装

```tsx
// react
import { Image } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

基础用法与原生 img 标签类似，可以设置 source、width、height 等原生属性。

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {

  return <>
    <Image
          source={{
            uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
          }}
          width={90}
          height={90}
        />
  </>
}
export default App;
```

:::

### 填充模式

通过 resizeMode 属性可以设置图片填充模式，等同于原生的 object-fit 属性，可选值见下方表格。

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {

  return <>
    <Image
      source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
      resizeMode='contain'
      width={90}
      height={90}
    />
  </>
}
export default App;
```

:::

### 圆形图片

通过 round 属性可以设置图片变圆

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {
  return <>
   <Image
      source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
      width={90}
      height={90}
      round
    />
  </>
}
export default App;
```

:::

### 加载中图片

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 插槽自定义内容。

:::demo

```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Image
          width={90}
          height={90}
          showLoading
          slotLoding={
            <>
              <Icon name='loading' />
            </>
          }
        />
  </>
}
export default App;
```

:::

### 加载失败

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

:::demo

```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
        <Image
            width={90}
            height={90}
            source={{ uri: 'https://x' }}
            showError
            style={{
              marginRight: 10
            }}
          >
            <Icon name='circle-close' />
        </Image>
  </>
}
export default App;
```

:::

## API

### Props

| 参数                | 说明                                                          | 类型                        | 默认值    |
| ------------------- | ------------------------------------------------------------- | --------------------------- | --------- |
| source              | 图片链接源                                                    | { uri: ''} or require('xx') | -         |
| resizeMode          | 图片填充模式，等同于原生的 object-fit 属性                    | ImageFit                    | 'contain' |
| width               | 宽度 , 明确指定                                               | number                      | -         |
| height              | 高度， 明确指定                                               | number                      | -         |
| round               | 是否显示为圆角                                                | Boolean                     | false     |
| radius              | 圆角大小                                                      | String \| Numer             | -         |
| showError           | 是否展示图片加载失败                                          | Boolean                     | true      |
| showLoading         | 是否展示加载中图片                                            | Boolean                     | true      |
| loadingImg `v1.4.6` | 设置加载中提示图片，与 slotLoding 冲突，优先级高于 slotLoding | String                      | -         |
| errorImg `v1.4.6`   | 设置错误提示图片，与 slotError 冲突，优先级高于 slotError     | String                      | -         |

### ImageFit 图片填充模式

| 参数    | 说明                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来                                                               |
| cover   | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边                                                     |
| stretch | 拉伸图片，使图片填满元素                                                                                   |
| center  | 居中不拉伸                                                                                                 |
| repeat  | 重复平铺图片直到填满容器。图片会维持原始尺寸，但是当尺寸超过容器时会在保持宽高比的前提下缩放到能被容器包裹 |

### Slots

| 参数       | 说明                     |
| ---------- | ------------------------ |
| slotLoding | 自定义加载中的提示内容   |
| slotError  | 自定义记载失败的提示内容 |

### Events

| 事件名  | 说明               | 回调参数     |
| ------- | ------------------ | ------------ |
| onClick | 点击图片时触发     | event: Event |
| onLoad  | 图片加载完后触发   | --           |
| onError | 图片加载失败后触发 | --           |
