# Swipe 組件

### 介紹

常用於儲存格左右滑删除等手勢操作

### 安裝

```tsx
import { Swipe } from '@nutui/nutui-react-native';
```

## 程式碼演示

### 基礎用法

:::demo

```tsx
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
              選擇
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
            <Text>滑動</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

:::

### 禁用滑動

:::demo

```tsx
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
            <Text>禁用滑動</Text>
          </View>
      </Swipe>
  </>
}
export default App;
```

:::

### 事件監聽

:::demo

```tsx
import React from "react";
import { View, Text } from 'react-native'
import { Swipe, Button, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const handleChange = () => {
    Toast.text('點選');
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
              選擇
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

:::

### 非同步控制

:::demo

```tsx
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
              選擇
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

:::

### 自定義內容

:::demo

```tsx
import React from "react";
import { View,Text } from 'react-native';
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
                加入購物車
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

:::

## API

### Props

| 參數        | 說明                             | 類型               | 預設值   |
| ----------- | -------------------------------- | ------------------ | -------- |
| name        | 識別字，可以在事件參數中獲取到   | _number \| string_ | `''`     |
| leftWidth   | 指定左側滑動區域寬度，組織為`px` | _number \| string_ | ` 0`     |
| rightWidth  | 指定右側滑動區域寬度，組織為`px` | _number \| string_ | ` 0`     |
| leftAction  | 左側滑動區域的內容               | _ReactNode_        | -        |
| rightAction | 右側滑動區域的內容               | _ReactNode_        | -        |
| beforeClose | 關閉前的回呼函數，返回`position` | _string_           | `left`   |
| disabled    | 是否禁用滑動                     | _boolean_          | ` false` |

### Events

|事件名|說明|回檔參數|

|--------|----------------|--------------|

| onOpen |打開儲存格側邊欄| _name: string，position: `left \| right`_ |

| onClose |收起儲存格側邊欄| _name: string，position: `left \| right`_ |

| onActionClick |點擊左側或者右側時觸發| _event: Event，position: `left \| right`_ |
