#  CountDown 倒計時

### 介紹

用於實時展示倒計時數值，支持毫秒精度。

### 安裝

```javascript
import { CountDown } from '@nutui/nutui-react-native'
```

## 代碼演示

### 基礎用法

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
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
### 自定義格式

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} format="DD 天 HH 時 mm 分 ss 秒"/>
    </Cell>
  );
};
export default App;
```

:::

### 毫秒級渲染

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
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



### 以服務端的時間為準

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
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

### 異步更新結束時間

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
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


### 自定義展示

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
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


## API

### Props

| 字段 | 說明 | 類型 | 默認值
| ----- | ----- | ----- | -----
| startTime | 開始時間 | Number | Date.now()
| endTime | 結束時間 | Number | Date.now()
| paused | 是否暫停 | Boolean | false
| format `v1.3.3` |  時間格式 | String | HH:mm:ss
| millisecond `v1.3.3` |  是否開啟毫秒級渲染 | Boolean | false
| autoStart `v1.3.3` |  是否自動開始倒計時 | Boolean | true
| time `v1.3.3` | 倒計時顯示時間，單位是毫秒。autoStart 為 false 時生效 | Number | 0
| showDays `v1.3.3廢棄` | 是否顯示天 | Boolean | false
| showPlainText `v1.3.3廢棄` | 顯示為純文本 | Boolean | false

### format 格式

| 格式 | 說明 | 
| ----- | ----- | 
| DD | 天數 | 
| HH | 小時 | 
| mm | 分鐘 | 
| ss | 秒數 | 
| S | 毫秒（1位） | 
| SS | 毫秒（2位） | 
| SSS | 毫秒（3位） | 

### Event

| 字段 | 說明 | 回調參數
| ----- | ----- | ----- 
| onEnd | 倒計時結束時回調函數 | 無
| onUpdate | 自定義展示內容時，實時更新倒計時數據回調函數 | 倒計時實時數據



