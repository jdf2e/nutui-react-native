# BackTop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```tsx
import { BackTop } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

  return (
      <View>
         <BackTop
            isShow={backIsShow}
          />
      </View>
  );
};
export default App;
```

:::

### 设置出现位置

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onPress={(e) => {
              onPressTop(e);
            }}
            bottom={200}
            right={50}
          />
      </View>
  );
};
export default App;
```

:::

### 自定义样式

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View ,Text} from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onPress={(e) => {
              onPressTop(e)
            }}
            bottom={200}
            right={50}
          >
            <View><Text>自定义</Text></View>
          </BackTop>
      </View>
  );
};
export default App;
```

:::

### click 事件

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onClick={(e) => {
              onPressTop(e);
            }}
          />
      </View>
  );
};
export default App;
```

:::

## API

### Props

| 字段   | 说明             | 类型   | 默认值 |
| ------ | ---------------- | ------ | ------ |
| bottom | 距离页面底部距离 | Number | `20`   |
| right  | 距离页面右侧距离 | Number | `10`   |
| zIndex | 设置组件页面层级 | Number | `10`   |

### Events

| 名称            | 说明               | 回调参数          |
| --------------- | ------------------ | ----------------- |
| onClick`v1.2.1` | 按钮点击时触发事件 | event: MouseEvent |
