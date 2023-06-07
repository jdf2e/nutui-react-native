# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

```SnackPlayer
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@nutui/nutui-react-native';

export default class extends PureComponent {
  render() {
    return (
      <View
        style={{
          paddingLeft: 25,
        }}
      >
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>按钮类型</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button style={{ marginBottom: 10, marginRight: 20 }}>
            默认字体
          </Button>
          <Button type='primary' style={{ marginBottom: 10, marginRight: 20 }}>
            主要字体
          </Button>
          <Button type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button type='danger' style={{ marginBottom: 10, marginRight: 20 }}>
            危险字体
          </Button>
          <Button type='warning' style={{ marginBottom: 10, marginRight: 20 }}>
            警告字体
          </Button>
          <Button type='success' style={{ marginBottom: 10 }}>
            成功字体
          </Button>
        </View>
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>朴素类型</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            plain
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            plain
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>

          <Button plain type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            plain
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            plain
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button
            plain
            type='success'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            成功字体
          </Button>
        </View>
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>禁用状态</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            disabled
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button
            disabled
            type='info'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            信息字体
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            disabled
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button
            disabled
            type='success'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            成功字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            plain
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            disabled
            plain
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button
            disabled
            plain
            type='info'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            信息字体
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            plain
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            disabled
            plain
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button
            disabled
            plain
            type='success'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            成功字体
          </Button>
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>加载状态</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            loading
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            loading
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button loading type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            loading
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            loading
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button loading type='success' style={{ marginBottom: 10 }}>
            成功字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            loading
            plain
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            loading
            plain
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button loading plain type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            loading
            plain
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            loading
            plain
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button loading plain type='success' style={{ marginBottom: 10 }}>
            成功字体
          </Button>
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>形状</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            shape='square'
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            shape='square'
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button shape='square' type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            shape='square'
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            shape='square'
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button shape='square' type='success' style={{ marginBottom: 10 }}>
            成功字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            plain
            shape='square'
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            plain
            shape='square'
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button plain shape='square' type='info' style={{ marginBottom: 10 }}>
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            shape='square'
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            disabled
            shape='square'
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button
            disabled
            shape='square'
            type='success'
            style={{ marginBottom: 10 }}
          >
            成功字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            disabled
            shape='square'
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            disabled
            shape='square'
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button
            disabled
            shape='square'
            type='info'
            style={{ marginBottom: 10 }}
          >
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            plain
            disabled
            shape='square'
            type='default'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            默认字体
          </Button>
          <Button
            plain
            disabled
            shape='square'
            type='primary'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            主要字体
          </Button>
          <Button
            plain
            disabled
            shape='square'
            type='info'
            style={{ marginBottom: 10 }}
          >
            信息字体
          </Button>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            plain
            disabled
            shape='square'
            type='danger'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            危险字体
          </Button>
          <Button
            plain
            disabled
            shape='square'
            type='warning'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            警告字体
          </Button>
          <Button
            plain
            disabled
            shape='square'
            type='success'
            style={{ marginBottom: 10 }}
          >
            成功字体
          </Button>
        </View>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>按钮尺寸</Text>
        </View>

        <Button size='large' type='default' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='default' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='default' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <Button size='large' type='primary' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='primary' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='primary' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <Button size='large' type='info' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='info' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='info' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <Button size='large' type='danger' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='danger' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='danger' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <Button size='large' type='warning' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='warning' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='warning' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <Button size='large' type='success' style={{ marginBottom: 10 }}>
          默认大
        </Button>
        <Button size='normal' type='success' style={{ marginBottom: 10 }}>
          默认中
        </Button>
        <Button size='small' type='success' style={{ marginBottom: 10 }}>
          默认小
        </Button>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>块级元素</Text>
        </View>

        <Button block type='default' style={{ marginBottom: 10 }}>
          块级元素
        </Button>
        <Button block type='primary' style={{ marginBottom: 10 }}>
          块级元素
        </Button>
        <Button block type='info' style={{ marginBottom: 10 }}>
          块级元素
        </Button>
        <Button block type='danger' style={{ marginBottom: 10 }}>
          块级元素
        </Button>
        <Button block type='warning' style={{ marginBottom: 10 }}>
          块级元素
        </Button>
        <Button block type='success' style={{ marginBottom: 10 }}>
          块级元素
        </Button>

        <View
          style={{
            height: 40,
            justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <Text>自定义颜色</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button color='#7232dd' style={{ marginBottom: 10, marginRight: 20 }}>
            单色按钮
          </Button>
          <Button
            color='#7232dd'
            style={{ marginBottom: 10, marginRight: 20 }}
            plain
          >
            单色按钮
          </Button>
          <Button
            color='linear-gradient(to right, #ff6034, #ee0a24)'
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            渐变color
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            color='linear-gradient(to right, #ff6034, #ee0a24)'
            plain
            style={{ marginBottom: 10, marginRight: 20 }}
          >
            渐变color
          </Button>
        </View>
      </View>
    );
  }
}
```

### 安装

```javascript
import { Button } from '@nutui/nutui-react-native';
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="default">默认按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="success">成功按钮</Button>
    </>
  );
};
export default App;
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button plain type="primary">朴素按钮</Button>
      <Button plain type="info">朴素按钮</Button>
    </>
  );
};
export default App;
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button disabled type="primary">禁用状态</Button>
      <Button plain disabled type="info">禁用状态</Button>
      <Button plain disabled type="primary">禁用状态</Button>
    </>
  );
};
export default App;
```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button shape="square" type="primary">方形按钮</Button>
      <Button type="info">圆形按钮</Button>
    </>
  );
};
export default App;
```

### 加载状态

```SnackPlayer
import  React ,{useState} from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  const [loading,setLoading] = useState(false)
  return (
    <>
      <Button loading type="info" />
      <Button loading type="warning">加载中...</Button>
      <Button
            loading={loading}
            type="success"
            onClick={() => {
              setTimeout(() => {
                setLoading(false)
              }, 1500),
                setLoading(!loading)
            }}
            style={{ margin: 8 }}
          >
            Click me!
      </Button>
    </>
  );
};
export default App;
```

### 图标按钮

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button shape="square" plain type="primary" icon="star-fill" />
      <Button shape="square" type="primary" icon="star">收藏</Button>
    </>
  );
};
export default App;
```

### 按钮尺寸

支持 `large`、`normal`、`small` 三种尺寸，默认为 `normal`。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button size="large" type="primary">大号按钮</Button>
      <Button type="primary">普通按钮</Button>
      <Button size="small" type="primary">小型按钮</Button>
    </>
  );
};
export default App;
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button block type="primary">块级元素</Button>
    </>
  );
};
export default App;
```

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。

```SnackPlayer
import  React from "react";
import { Button } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>单色按钮</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </Button>
    </>
  );
};
export default App;
```

## API

### Props

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| type     | 类型，可选值为 `primary` `info` `warning` `danger` `success` | String  | `default` |
| size     | 尺寸，可选值为 `large` `small`                               | String  | `normal`  |
| shape    | 形状，可选值为 `square`                                      | String  | `round`   |
| color    | 按钮颜色，支持传入 linear-gradient 渐变色                    | String  | -         |
| plain    | 是否为朴素按钮                                               | Boolean | `false`   |
| disabled | 是否禁用按钮                                                 | Boolean | `false`   |
| block    | 是否为块级元素                                               | Boolean | `false`   |
| icon     | 按钮图标，同 Icon 组件 name 属性                             | String  | -         |
| loading  | 按钮 loading 状态                                            | Boolean | `false`   |

### Events

| 事件名  | 说明           | 回调参数  |
| ------- | -------------- | --------- |
| onPress | 点击按钮时触发 | event: {} |
