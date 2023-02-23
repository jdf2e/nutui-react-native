# Icon 圖示

### 介紹

基於 IconFont 字體的圖示集，可以通過 Icon 元件使用。

### 安裝

``` javascript
// react
import { Icon } from '@nutui/nutui-react-native';

```

## 代碼演示

### 基礎用法

'Icon' 的 'name' 屬性支援傳入圖示名稱或圖片連結。

:::demo
```SnackPlayer name=Icon&dependencies=@nutui/nutui-react-native
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD" />
    <Icon 
        size={40}
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" 
    />

  </>
}

export default App;
```
:::


### 圖示顏色

'Icon' 的 'color' 屬性用來設置圖示的顏色。

:::demo
```SnackPlayer name=Icon&dependencies=@nutui/nutui-react-native
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

### 圖示大小

'Icon' 的 'size' 屬性用來設置圖示的尺寸大小。

:::demo
```SnackPlayer name=Icon&dependencies=@nutui/nutui-react-native
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


## API

### Props

| 屬性         | 說明                             | 類型             | 預設值           |
|--------------|----------------------------------|------------------|------------------|
| name         | 圖示名稱或圖片連結               | String           | -                |
| color        | 圖示顏色                         | String           | -                |
| size         | 圖示大小，如 `20` | Number | -                |

### Events

| 事件名稱 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onClick`v1.3.8`  | 點擊圖示時觸發 | event: Event |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-icon-height | ` 20` |
| --nutui-icon-width | ` 20` |
