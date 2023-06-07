#  Skeleton組件

### 介紹

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

### 安裝
``` ts
import { Skeleton } from '@nutui/nutui-react-native';
```


## 代碼演示

### 基礎用法

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

### 傳入多行

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated />
    </>
  )
}
export default App;
```

### 顯示頭像

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated avatar />
    </>
  )
}
export default App;
```

### 標題段落圓角風格

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated round />
    </>
  )
}
export default App;
```


## API

### Prop

| 字段       | 說明                                             | 類型    | 默認值    |
|------------|-------------------------------------------------|---------|----------|
| loading    | 是否顯示骨架屏                                    | Boolean | `false`    |
| width       | 每行寬度                                        | Number  | 100 |
| height      | 每行高度                                        | Number  | 100   |
| animated    | 是否開啟骨架屏動畫                                | Boolean  | `false`  |
| avatar      | 是否顯示頭像                                    | Boolean | `false`   |
| avatarShape      | 頭像形狀：正方形/圓形                        | String | `round`   |
| avatarSize       | 頭像大小                                  | String | `50`    |
| round  | 標題/段落是否採用圓角風格                                | Boolean | `false`  |
| row    | 設置段落行數                                           | Number | 1       |
| title  | 是否顯示段落標題                                        | Boolean | `false`   |
