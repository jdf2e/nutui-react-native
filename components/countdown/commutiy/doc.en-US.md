#  CountDown

### Introduce

Used to display the countdown value in real time, and precision supports milliseconds.

### Install

```javascript
import { CountDown } from '@nutui/nutui-react-native'
```

## Demo

### Basic Usage

:::demo

```SnackPlayer name=CountDown&dependencies=@nutui/nutui-react-native
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-native';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const onEnd = () => {
    // console.log('countdown: ended.')
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
### Custom format

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
        <CountDown endTime={stateRef.current.endTime} format="DD Day HH : mm : ss" />
    </Cell>
  );
};
export default App;
```

:::

### Millisecond

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


### Server Time Prevails

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

### End-Time of Asyn Update

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


### Custom Presentation

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

| Attribute | Description | Type | Default
| ----- | ----- | ----- | -----
| startTime | Start Time |  Number | Date.now()
| endTime | End Time | Number | Date.now()
| paused | Paused | Boolean | false
| format `v1.3.3` |  Format Time | String | HH:mm:ss
| millisecond `v1.3.3` |  Whether to enable millisecond render | Boolean | false
| autoStart `v1.3.3` |  Whether to auto start count down | Boolean | true
| time `v1.3.3` | Total time, unit milliseconds | Number | 0
| showDays `v1.3.3(Abandon)` | Show Text Day | Boolean | false
| showPlainText `v1.3.3(Abandon)` | Show Text | Boolean | false

### Format

| Name | Description | 
| ----- | ----- | 
| DD | Day | 
| HH | Hour | 
| mm | Minute | 
| ss | Second | 
| S | Millisecond, 1-digit | 
| SS | Millisecond, 2-digits | 
| SSS | Millisecond, 3-digits | 

### Event

| Event | Description | Arguments
| ----- | ----- | ----- 
| onEnd | Emitted when count down end | Residual Timestamp
| onUpdate | Real-time update of the countdown data callback function | Real-time countdown data