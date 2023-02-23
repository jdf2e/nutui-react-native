#  Image組件

### 介紹

增強版的 img 標籤，提供多種圖片填充模式，支持圖片加載中提示、加載失敗提示。

### 安裝

``` javascript
// react
import { Image } from '@nutui/nutui-react-native';

```

## 代碼演示

### 基礎用法

基礎用法與原生 img 標籤類似，可以設定 source、width、height 等原生屬性。

:::demo
```SnackPlayer name=Image&dependencies=@nutui/nutui-react-native
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

通過 resizeMode 屬性可以設置圖片填充模式，等同於原生的 object-fit 屬性，可選值見下方表格。

:::demo
```SnackPlayer name=Image&dependencies=@nutui/nutui-react-native
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Image
      source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/    60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
      resizeMode='contain'
      width={90}
      height={90}
    />
  </>
}
export default App;

```

### 圓形圖片

通過 round 屬性可以設置圖片變圓

:::demo
```SnackPlayer name=Image&dependencies=@nutui/nutui-react-native
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

### 加載中圖片

`Image` 組件提供了默認的加載中提示，支持通過 `loading` 插槽自定義內容。

:::demo
```SnackPlayer name=Image&dependencies=@nutui/nutui-react-native
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
### 加載失敗

`Image` 組件提供了默認的加載失敗提示，支持通過 `error` 插槽自定義內容。

:::demo
```SnackPlayer name=Image&dependencies=@nutui/nutui-react-native
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

## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| source         | 圖片鏈接               | { uri: ''} or require('xx') | -                |
| resizeMode     | 圖片填充模式，等同於原生的 object-fit 屬性     | ImageFit | 'contain'        |
| width         | 寬度          | number | -                |
| height         | 高度         | number | -                |
| round         | 是否顯示為圓角               | Boolean | false              |
| radius         | 圓角大小               | String \| Numer | -                |
| showError         | 是否展示圖片加載失敗| Boolean | true              |
| showLoading         | 是否展示加載中圖片               | Boolean | true              |
| loadingImg `v1.4.6`    | 設置加載中提示圖片，與slotLoding衝突，優先級高於slotLoding       | String | -              |
| errorImg   `v1.4.6`    | 設置錯誤提示圖片，與slotError衝突，優先級高於slotError         | String | -              |

### ImageFit 圖片填充模

| 參數         | 說明                             |
|--------------|----------------------------------|
| contain         | 保持寬高縮放圖片，使圖片的長邊能完全顯示出來    |
| cover         | 保持寬高縮放圖片，使圖片的短邊能完全顯示出來，裁剪長邊     |
| stretch    | 拉伸圖片，使圖片填滿元素  |
| center    | 保持圖片原有尺寸  |
| repeat    | 重複平鋪圖片直到填滿容器。圖片會維持原始尺寸，但是當尺寸超過容器時會在保持寬高比的前提下縮放到能被容器包裹  |


### Slots
| 參數         | 說明                             |
|--------------|----------------------------------|
| slotLoding      | 自定義加載中的提示內容     |
| slotError    | 自定義記載失敗的提示內容  |

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onClick  | 點擊圖片時觸發 | event: Event |
| onLoad  | 圖片加載完後觸發 | -- |
| onError  | 圖片加載失敗後觸發 | -- |