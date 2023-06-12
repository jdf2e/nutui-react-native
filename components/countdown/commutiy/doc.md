# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 安装

```tsx
import { CountDown } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
    </Cell>
  );
};
export default App;
```

:::

### 自定义格式

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} format="DD 天 HH 时 mm 分 ss 秒"/>
    </Cell>
  );
};
export default App;
```

:::

### 毫秒级渲染

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} millisecond format="HH:mm:ss:SS"
        />
    </Cell>
  );
};
export default App;
```

:::

### 以服务端的时间为准

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    serverTime: Date.now() - 20 * 1000,
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
        <CountDown startTime={stateRef.current.serverTime} endTime={stateRef.current.endTime} />
    </Cell>
  );
};
export default App;
```

:::

### 异步更新结束时间

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const [asyncEnd, setAsyncEnd] = useState(0)
  const stateRef = useRef({
    timer: -1,
    endTime: Date.now() + 60 * 1000,
  })
  useEffect(() => {
    stateRef.current.timer = setTimeout(() => {
      setAsyncEnd(Date.now() + 30 * 1000)
    }, 3000)
    return () => {
      clearTimeout(stateRef.current.timer)
    }
  }, [])
  return (
    <Cell>
        <CountDown  endTime={asyncEnd} />
    </Cell>
  );
};
export default App;
```

:::

### 自定义展示

:::demo

```tsx
import React, {  useRef, useState } from 'react'
import { View, Text } from 'react-native';
import { Cell, CountDown } from '@nutui/nutui-react-native';

const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
})
const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
})

const App = () => {
  const onUpdate = (v) => {
    setResetTime(v)
  }

  return (
    <Cell>
         <CountDown
            endTime={stateRef.current.endTime}
            onUpdate={onUpdate}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                {resetTime.d}{translated.day}
              </Text>
              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >

                <Text style={
                  {
                    color: '#fff',
                    fontSize: 14
                  }
                }
                >
                  {resetTime.h}
                </Text>

              </View>

              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                  :
              </Text>

              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >

                <Text style={{
                  color: '#fff',
                  fontSize: 14
                }}
                >
                  {resetTime.m}
                </Text>
              </View>

              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                  :
              </Text>
              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >

                <Text style={{
                  color: '#fff',
                  fontSize: 14
                }}
                >
                  {resetTime.s}
                </Text>
              </View>

            </View>
          </CountDown>
    </Cell>
  );
};
export default App;
```

:::

## API

### Props

| 字段                       | 说明                                                  | 类型    | 默认值     |
| -------------------------- | ----------------------------------------------------- | ------- | ---------- |
| startTime                  | 开始时间                                              | Number  | Date.now() |
| endTime                    | 结束时间                                              | Number  | Date.now() |
| paused                     | 是否暂停                                              | Boolean | false      |
| format `v1.3.3`            | 时间格式                                              | String  | HH:mm:ss   |
| millisecond `v1.3.3`       | 是否开启毫秒级渲染                                    | Boolean | false      |
| autoStart `v1.3.3`         | 是否自动开始倒计时                                    | Boolean | true       |
| time `v1.3.3`              | 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效 | Number  | 0          |
| showDays `v1.3.3废弃`      | 是否显示天                                            | Boolean | false      |
| showPlainText `v1.3.3废弃` | 显示为纯文本                                          | Boolean | false      |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Event

| 字段     | 说明                                         | 回调参数       |
| -------- | -------------------------------------------- | -------------- |
| onEnd    | 倒计时结束时回调函数                         | 无             |
| onUpdate | 自定义展示内容时，实时更新倒计时数据回调函数 | 倒计时实时数据 |
