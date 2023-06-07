# Avatar 頭像

### 介紹

用來代表用戶或事物，支持圖片、圖標或字符展示。

### 安裝
``` ts
// react
import { Avatar } from '@nutui/nutui-react-native';

```

### 基本用法

支持三種尺寸：small、normal、large

```SnackPlayer
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

### 頭像形狀

支持兩種形狀：square、round

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

### 頭像類型

支持三種類型：圖片、Icon 以及字符

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

### 自定義顏色及背景色

Icon 和字符型可以自定義圖標顏色及背景色

```SnackPlayer
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


### Prop

| 字段     | 說明                                                           | 類型   | 默認值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | 設置頭像的大小，可選值為：large、normal、small，支持直接輸入數字   | String | normal |
| shape    | 設置頭像的形狀，可選值為：square、round            | String | round  |
| bgColor | 設置 Icon、字符類型頭像的背景色                    | String | #eee   |
| color    | 設置 Icon、字符類型頭像的顏色                     | String | #666   |
| source      | 設置圖片類型頭像的地址                           | {uri: xxx} or require('xxx') | -   |
| icon     | 設置 Icon 類型頭像圖標, 類似 Icon 組件的 name 屬性  | String | -     |
| iconSize`v1.3.11`     | [圖標尺寸](#/icon) | String、Number | `16`|



## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-avatar-square | ` 5` |
| --nutui-avatar-large-width | ` 60` |
| --nutui-avatar-large-height | ` 60` |
| --nutui-avatar-small-width | ` 32` |
| --nutui-avatar-small-height | ` 32` |
| --nutui-avatar-normal-width | ` 40` |
| --nutui-avatar-normal-height | ` 40` |
