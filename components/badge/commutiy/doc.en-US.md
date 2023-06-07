# Badge

### Intro

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### Install

``` javascript
// react
import { Badge } from '@nutui/nutui-react-native';

```

## Demo

### Basic usage

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

### Max Size

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


### Custom context

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

### Custom Position

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

### Display Alone

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

| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| value   | value to show                                 | String  | -         |
| max     | when value is number, it's the max size                     | Number  | `10000`   |
| zIndex |  z-index                          | Number  | `10`      |
| dot     | Is dotted    | Boolean | `false`   |
| top     | Up and down offset, support unit setting, can be set to: 5, etc. | Number  | `0`       |
| right   | Left and right offset, support unit setting, can be set to: 5, etc. | Number  | `0`       |
| icons   | custom icons                               | String  | - |





## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
