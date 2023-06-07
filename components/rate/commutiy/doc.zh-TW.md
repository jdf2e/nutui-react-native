#  Rate 評分

### 介紹

用於快速的評級操作，或對評價進行展示。

### 安裝

```SnackPlayer
import { Rate } from '@nutui/nutui-react-native';
```

## 代碼演示

### 基礎用法

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue={3} />
    </View>
  );
};
export default App;

```

### 半星

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Rate allowHalf modelValue="3.5" />
    </View>
  );
};
export default App;

```
### 自定義 icon

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate checkedIcon="heart-fill1" uncheckedIcon="heart" modelValue="3" />
    </View>
  );
};
export default App;

```
### 自定義數量

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Rate count="6" modelValue="3" />
    </View>
  );
};
export default App;

```
### 最少選中數量（支持半星）

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate count="5" modelValue="2" minimizeValue="3"/>
    </View>
  );
};
export default App;

```
### 禁用狀態

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate disabled modelValue="3" />
    </View>
  );
};
export default App;

```
### 只讀狀態

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue="3" readonly />
    </View>
  );
};
export default App;

```
### 綁定事件

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <View>
        <Rate modelValue="3" onChange={onChange} />
    </View>
  );
};
export default App;

```
### 自定義尺寸 35px

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Rate modelValue="3" iconSize="35" />
    </>
  );
};
export default App;

```

## API

## Prop

| 字段           | 說明                                      | 類型    | 默認值      |
|----------------|-------------------------------------------|---------|-------------|
| modelValue        | 當前 star 數不能大於count | Number  | -           |
| count          | star 總數                                 | Number  | 5           |
| minimizeValue  | 最少選中star數量                          | Number  | 0           |
| iconSize      | star 大小                                 | Number  | 18          |
| activeColor   | 圖標選中顏色                              | String  | #fa200c     |
| voidColor     | 圖標未選中顏色                          | String  | #ccc        |
| uncheckedIcon | 使用圖標(未選中)                          | String  | star-n      |
| checkedIcon   | 使用圖標(選中)                           | String  | star-fill-n |
| halfcheckedIcon | 使用圖標(半星 )                       | String  |      |
| allowHalf     | 是否半星                                  | Boolean | false       |
| readonly       | 是否只讀                                 | Boolean | false       |
| disabled       | 是否禁用                                  | Boolean | false       |
| spacing        | 間距                                      | Number  | 20          |

## Event
| 字段   | 說明                       | 回調參數 |
|--------|----------------------------|----------|
| onChange | 當前分值修改時時觸發的事件 | 當前值   |
