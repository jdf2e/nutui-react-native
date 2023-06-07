#  Swipe组件

### 介绍

常用于单元格左右滑删除等手势操作

### 安装

```javascript
import { Swipe } from '@nutui/nutui-react-native';
```


## 代码演示

### 基础用法

```SnackPlayer
import React from "react";
import { View, Text } from 'react-native'
import { Swipe,  Button } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Swipe
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              选择
            </Button>
          }

          rightAction={
            <Button
              style={{ flex: 1 }}
              type='primary' shape='square'
            >
              删除
            </Button>
          }
        >
          <View>
            <Text>滑动</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

### 禁用滑动

```SnackPlayer
import React from "react";
import { View, Text } from 'react-native';
import { Swipe, Button } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Swipe
          rightWidth={100}
          rightAction={
            <Button
              shape='square'
              type='danger'
            >
              删除
            </Button>
          }
          disabled
        >
          <View>
            <Text>禁用滑动</Text>
          </View>
      </Swipe>
  </>
}
export default App;
```

### 事件监听

```SnackPlayer
import React from "react";
import { View, Text } from 'react-native'
import { Swipe, Button, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const handleChange = () => {
    Toast.text('点击');
  }
  return <>
     <Swipe
          leftWidth={100}
          rightWidth={200}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              选择
            </Button>
          }
          rightAction={
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
            >
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                 删除
              </Button>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='info'
              >
                收藏
              </Button>
            </View>
          }

          onActionClick={(e, position) => {
            alert(e + '  ' + position);
          }}
          onOpen={({ name, position }) => {
            alert(name + ' open ' + position);
          }}
          onClose={({ name, position }) => {
            alert(name + '  close ' + position);
          }}
        >
          <View>
            <Text>事件</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

### 异步控制

```SnackPlayer
import React, { useRef } from "react";
import { View, Text } from 'react-native';
import { Swipe, Button } from '@nutui/nutui-react-native';

const App = () => {
  const refDom = useRef(null)
  const beforeClose = (postion: string) => {
     setTimeout(() => {
      refDom.current && refDom.current.close();
     }, 2000);
  }
  return <>
        <Swipe
          ref={refDom}
          beforeClose={beforeClose}
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              选择
            </Button>
          }
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                删除
              </Button>
            </>
          }
        >
          <View>
            <Text>事件</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

### 自定义内容

```SnackPlayer
import React from "react";
import { View, Text } from 'react-native';
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  return <>
        <Swipe
          rightWidth={100}
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                加入购物车
              </Button>
            </>
          }
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 320
            }}
          >
            <Text>商品</Text>
            <InputNumber />
          </View>
        </Swipe>
  </>
}
export default App;
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name | 标识符，可以在事件参数中获取到 | _number \| string_ | `''` |
| leftWidth | 指定左侧滑动区域宽度，单位为 `px` | _number \| string_ | `0` |
| rightWidth | 指定右侧滑动区域宽度，单位为 `px` | _number \| string_ | `0` |
| leftAction | 左侧滑动区域的内容 | _ReactNode_ | - |
| rightAction | 右侧滑动区域的内容 | _ReactNode_ | - |
| beforeClose | 关闭前的回调函数，返回 `position` | _string_ | `left` |
| disabled | 是否禁用滑动 | _boolean_ | `false` |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onOpen   | 打开单元格侧边栏 | _name: string , position: `left \| right`_      |
| onClose  | 收起单元格侧边栏 | _name: string , position: `left \| right`_    |
| onActionClick  | 点击左侧或者右侧时触发 | _event: Event , position: `left \| right`_     |
