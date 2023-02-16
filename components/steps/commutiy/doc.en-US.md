# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```ts
import { Steps } from '@nutui/nutui-react-native';
```

### Basic Usage

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <View>
      <Steps current={stepState.current1}>
        <Step isStart activeIndex={1} title="步骤一">1</Step>
        <Step activeIndex={2} title="步骤二">2</Step>
        <Step isEnd activeIndex={3} title="步骤三">3</Step>
      </Steps>
       <View style={styles.items} >
        <Button type="danger" onClick={() => handleStep('current1')}>
          下一步
        </Button>
      </View>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  items: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20
  }
});
```
:::

### Title and description information

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current2: 1
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <Steps current={stepState.current2}>
        <Step activeIndex={1} isStart title="步骤一" content="步骤描述">
          1
        </Step>
        <Step activeIndex={2} title="步骤二" content="步骤描述" />
        <Step activeIndex={3} isEnd title="步骤三" content="步骤描述" />
      </Steps>
     <View style={styles.items} >
        <Button type="danger" onClick={() => handleStep('current2')}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default App;

const styles = StyleSheet.create({
  items: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20
  }
});
```
:::

### Custom icon

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <Steps current={1}>
        <Step isStart activeIndex={1} title="已完成" icon="service">
          1
        </Step>
        <Step activeIndex={2} title="进行中" icon="people">
          2
        </Step>
        <Step isEnd activeIndex={3} title="未开始" icon="location2">
          3
        </Step>
      </Steps>
    </>
  )
}
export default App;
```
:::

### Vertical step bar
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
   <View style={styles.itemsHeight} >
      <Steps direction="vertical" current={2}>
        <Step isStart activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </Step>
        <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
          2
        </Step>
        <Step
          isEnd
          activeIndex={3}
          title="未开始"
          content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        >
          3
        </Step>
      </Steps>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  itemsHeight: {
      width: deviceWidth,
      height: 400,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 20
  }
});
```
:::

### Point step and vertical direction
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
     <View style={styles.itemsHeight} >
      <Steps direction="vertical" progressDot current={2}>
        <Step isStart activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </Step>
        <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
          2
        </Step>
        <Step
          isEnd
          activeIndex={3}
          title="未开始"
          renderContent={() => (
            return (<View>
                  <Text style={{ fontSize: 15, color: '#959fb1' }}>收货地址为:</Text>
                  <Text style={{ fontSize: 15, color: '#959fb1' }}>北京市经济技术开发区科创十一街18号院京东大厦</Text>
              </View>);
          )}
        >
          3
        </Step>
      </Steps>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  itemsHeight: {
      width: deviceWidth,
      height: 400,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 20
  }
});
```
:::


## API

### Props

#### Steps

| Attribute                   | Description                                                        | Type           | Default      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	Show direction，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	Current step           | Number        | 0      |
| progressDot            |  Dot step bar     | Boolean | false         |
| isStart               |  start step need     | Boolean | true         |
| isEnd               |  end step need      | Boolean | true         |


#### Step

| Attribute           | Description                   | Type     | Default      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | Title of the process step         | String | '' |
| content          | Descriptive text of process steps (supporting HTML structure)       | String | '' |
| icon          | Icon       | String | '' |
| size          | Icon size       | String | '' |
| activeIndex          | Index of process steps       | Number | 0 |
| renderContent         | The html structure of the descriptive text of the process steps      | React.ReactNode | - |