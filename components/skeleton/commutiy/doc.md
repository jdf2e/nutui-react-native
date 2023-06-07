#  Skeleton 骨架屏组件

### 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

### 安装
``` ts
import { Skeleton } from '@nutui/nutui-react-native';
```


## 代码演示

### 基础用法

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated />
    </>
  )
}
export default App;
```

### 传入多行

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton
        width={250}
        height={15}
        row={3}
        title
        animated
      />
    </>
  )
}
export default App;
```

### 显示头像

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton
        width={250}
        height={15}
        row={3}
        title
        animated
        avatar
        avatarSize={100}
      />
    </>
  )
}
export default App;
```

### 标题段落圆角风格

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton
        width={250}
        height={15}
        animated
        round
      />
    </>
  )
}
export default App;
```




## API

### Prop

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|-------------------------------------------------|---------|----------|
| loading    | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏)                                    | Boolean | `true`    |
| width       | 每行宽度                                       | number  | `100` |
| height      | 每行高度                                        | number  | `100`   |
| animated    | 是否开启骨架屏动画                                | Boolean  | `false`  |
| avatar      | 是否显示头像                                     | Boolean | `false`   |
| avatarShape      | 头像形状：正方形/圆形                        | String | `round`   |
| avatarSize       | 头像大小                                   | String | `50`    |
| round  | 标题/段落是否采用圆角风格                                | Boolean | `false`  |
| row    | 设置段落行数                                           | String | `1`       |
| title  | 是否显示段落标题                                        | Boolean | `true`   |
