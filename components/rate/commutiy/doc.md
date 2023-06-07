#  Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

```ts
import { Rate } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

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
### 自定义 icon

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
### 自定义数量

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
### 最少选中数量（支持半星）

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
### 禁用状态

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
### 只读状态

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
### 绑定事件

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
### 自定义尺寸 35px

```SnackPlayer
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue="3" iconSize="35" />
    </View>
  );
};
export default App;

```

## API

## Prop

| 字段                     | 说明                                      | 类型    | 默认值      |
|------------------------|-------------------------------------------|---------|-------------|
| modelValue             | 当前 star 数不能大于count | Number  | -           |
| count                  | star 总数                                 | Number  | 5           |
| minimizeValue          | 最少选中star数量                           | Number  | 0           |
| iconSize               | star 大小                                 | Number  | 18          |
| activeColor            | 图标选中颜色                              | String  | #fa200c     |
| voidColor              | 图标未选中颜色                            | String  | #ccc        |
| uncheckedIcon          | 使用图标(未选中)                          | String  | star-n      |
| checkedIcon            | 使用图标(选中)                            | String  | star-fill-n |
| halfcheckedIcon        | 使用图标(半星图标,使用半星图标时一定要传)      | String  |  |
| allowHalf              | 是否半星                                  | Boolean | false       |
| readonly               | 是否只读                                  | Boolean | false       |
| disabled               | 是否禁用                                  | Boolean | false       |
| spacing                | 间距                                      | Number  | 20          |

## Event
| 字段   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| onChange  | 当前分值修改时时触发的事件 | 当前值   |
