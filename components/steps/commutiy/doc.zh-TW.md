# Steps 步驟條

### 介紹

拆分展示某項流程的步驟，引導用戶按流程完成任務或向用戶展示當前狀態。

### 安裝

```ts
import { Steps } from '@nutui/nutui-react-native';
```

### 基本用法

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

### 標題和描述信息

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

### 自定義圖標

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

### 豎向步驟條
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

### 點狀步驟和垂直方向
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

| 參數                   | 說明                                                        | 類型           | 默認值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	顯示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	當前所在的步驟           | Number        | 0      |
| progressDot            |  點狀步驟條     | Boolean | false         |
| isStart               |  开始步驟     | Boolean | true         |
| isEnd               |  结束步驟     | Boolean | true         |



#### Step

| 參數           | 說明                   | 類型     | 默認值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步驟的標題         | String | '' |
| content          | 流程步驟的描述性文字       | String | '' |
| icon          | 圖標       | String | '' |
| size          | 圖標尺寸大小       | String | '' |
| activeIndex          | 流程步驟的索引       | Number | 0 |
| renderContent         | 流程步驟的描述性文字的html結構      | React.ReactNode | - |