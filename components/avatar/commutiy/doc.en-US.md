# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install
``` ts
// react
import { Avatar } from '@nutui/nutui-react-native';

```
### Basic usage

Support three sizes：small、normal、large

:::demo
``` SnackPlayer
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

### Shape

Support two shapes：square、round

```SnackPlayer
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

### Type

Support three types：picture、icon、letter

```SnackPlayer
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

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

```SnackPlayer
import React from "react";
import { Avatar } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Avatar
        icon="my"
        color="#fff"
        bgColor="#FA2C19"
      />
      <Avatar
        color="rgb(245, 106, 0)"
        bgColor="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```

### Prop

| Attribute     | Description                                                 | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | The size of the avatar,eg：`large`、`normal`、`small`,and numbers   | String | normal |
| shape    | The shape of avatar，eg：`square`、`round`           | String | round  |
| bgColor | The colors of Icon and letter types                   | String | #eee   |
| color    | The background colors of Icon and letter types                     | String | #666   |
| source      | The address of the image for an image avatar or image element       | {uri: xxxx} or require('xxx') | -   |
| icon     | Custom icon type for an icon avatar, Refer to the name attribute of Icon component  | String | -     |
| iconSize`v1.3.11`     | [Icon size](#/icon) | String、Number | `16`             |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-avatar-square | ` 5` |
| --nutui-avatar-large-width | ` 60` |
| --nutui-avatar-large-height | ` 60` |
| --nutui-avatar-small-width | ` 32` |
| --nutui-avatar-small-height | ` 32` |
| --nutui-avatar-normal-width | ` 40` |
| --nutui-avatar-normal-height | ` 40` |
