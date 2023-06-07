# Navbar 頭部導航

### 介紹


提供導航功能。

### 安裝

```SnackPlayer
import { NavBar } from '@nutui/nutui-react-native';
```

### 代碼示例

### 基本用法

```SnackPlayer
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {

  return (
    <>
      <NavBar
          title="訂單詳情"
          border
          leftShow
          leftText="返回"
          onClickTitle={(e) => {
            Toast.text('標題');
          }}
          onClickBack={(e) => {
            Toast.text('返回');
          }}
          onClickRight={(e) => {
            Toast.text('分享');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};
export default App;

```

```SnackPlayer
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react-native';

const App = () => {

  return (
    <>
      <NavBar
          title="瀏覽記錄"
          desc="清空"
          border
          leftShow
          onClickTitle={(e) => {
            Toast.text('標題');
          }}
          onClickBack={(e) => {
            Toast.text('返回');
          }}
          onClickRight={(e) => {
            Toast.text('清空');
          }}
        />
    </>
  );
};
export default App;

```

```SnackPlayer
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon } from '@nutui/nutui-react-native';

const App = () => {

  return (
    <>
      <NavBar
          title="購物車"
          desc="編輯"
          border
          leftShow
          titIcon="https://img13.360buyimg.com/imagetools/jfs/t1/170651/33/33394/2798/63ad67fcFb1132817/9410e270ba821752.png"
          onClickTitle={(e) => {
            Toast.text('標題');
          }}
          onClickBack={(e) => {
            Toast.text('返回');
          }}
          onClickRight={(e) => {
            Toast.text('編輯');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};
export default App;

```

```SnackPlayer
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <NavBar
          title="訂單詳情"
          border
          leftShow
          leftText="返回"
          onClickTitle={(e) => {
            Toast.text('標題');
          }}
          onClickBack={(e) => {
            Toast.text('返回');
          }}
          onClickRight={(e) => {
            Toast.text('分享');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};
export default App;

```


### 自定義導航欄中間內容

```SnackPlayer
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <NavBar
          desc="編輯"
          border
          leftShow
          titIcon="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
          onClickTitle={(e) => {
            Toast.text('標題');
          }}
          onClickBack={(e) => {
            Toast.text('返回');
          }}
          onClickRight={(e) => {
            Toast.text('編輯');
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
            <Icon
              name="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
              size="16"
            />
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};
export default App;

```

### Prop

| 字段            | 說明                                                                                           | 類型    | 默認值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | 標題名稱                                                                                       | String  | -       |
| desc            | 右側描述                                                                                       | String  | -       |
| leftShow        | 是否展示左側箭頭                                                                              | Boolean | true   |
| titIcon         | 標題帶icon                                                         | String  | -       |
| leftText         | 左側文案                                                         | String  | -       |
| fixed         | 是否固定                                                         | Boolean  | false       |
| safeAreaInsetTop         | 是否適配安全區                                                         | Boolean  | false       |
| border         | 是否顯示底部邊框                                      | Boolean  | false    |
| placeholder         | 固定在頂部時，是否在標籤位置生成一個等高的佔位元素           | Boolean  | false    |
| zIndex         | 導航欄層級           | Number、String  | 10    |
| style         | 容器樣式           | React.CSSProperties  | {}    |

### Event
| 名稱  | 說明     | 回調參數    |
|-------|----------|-------------|
| onClickTitle | 點擊標題事件 | event:Event |
| onClickRight | 點擊右側事件 | event:Event |
| onClickBack | 點擊返回事件 | event:Event |
| onClickIcon | 點擊標題右側icon事件 | event:Event |
