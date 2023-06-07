# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

``` javascript
// react
import { Badge } from '@nutui/nutui-react-native';

```

## 代码实例

### 基本用法

```SnackPlayer
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Badge value={8}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

### 最大值

```SnackPlayer
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Badge value={200} max={9}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

### 自定义徽标内容

```SnackPlayer
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Badge icon="checklist">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="link">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="download">
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

### 自定义位置

```SnackPlayer
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Badge value={8} top="5" right="5">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76} top="10" right="10">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

### 独立展示

```SnackPlayer
import React from "react";
import { Badge } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Badge value={8}> </Badge>
      <Badge value={76}> </Badge>
      <Badge value="NEW"> </Badge>
    </>
  )
}
export default App;
```

## API

### Props

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| value   | 显示的内容  | String  | -         |
| max     | value 为数值时，最大值 | Number  | `10000`   |
| zIndex | 徽标的 z-index 值 | Number  | `10`      |
| dot     | 是否为小点 | Boolean | `false`   |
| top     | 上下偏移量，支持单位设置，可设置为：5 等 | Number  | `0`       |
| right   | 左右偏移量，支持单位设置，可设置为：5 等 | Number  | `0`       |
| icons   | 徽标自定义 | String  | - |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-badge-color | ` #fff` |
| --nutui-badge-font-size | ` $font-size-1` |
| --nutui-badge-default-background-color | `  rgba(255, 255, 255, 1)` |
| --nutui-badge-border-radius | ` 14` |
| --nutui-badge-padding-top | ` 0` |
| --nutui-badge-padding-bottom | ` 0` |
| --nutui-badge-padding-left | ` 5` |
| --nutui-badge-padding-right | ` 5` |
| --nutui-badge-z-index | ` 1` |
| --nutui-badge-dot-width | ` 7` |
| --nutui-badge-dot-height | ` 7` |
| --nutui-badge-dot-border-radius | ` 7` |
| --nutui-badge-dot-padding | ` 0` |
