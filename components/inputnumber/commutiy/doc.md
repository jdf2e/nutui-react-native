# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

```tsx
import { InputNumber } from '@nutui/nutui-react-native';
```

### 基础用法

初始化一个默认值

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val1: 1
  })
  return (
    <>
      <InputNumber modelValue={inputState.val1} />
    </>
  )
}
export default App;
```

:::

### 步长设置

设置步长 `step` 5

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val2: 0
  })
  return (
    <>
      <InputNumber modelValue={inputState.val2} step="5" />
    </>
  )
}
export default App;
```

:::

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber,Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val3: 10
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件触发')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val3} min="10" max="20" onOverlimit={overlimit} />
    </>
  )
}
export default App;
```

:::

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val4: 0
  })
  return (
    <>
      <InputNumber modelValue={inputState.val4} disabled />
    </>
  )
}
export default App;
```

:::

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val5: 1
  })
  return (
    <>
      <InputNumber modelValue={inputState.val5} readonly />
    </>
  )
}
export default App;
```

:::

### 支持小数点

设置步长 `step` 0.1 `decimal-places` 小数保留 1 位

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val6: 5.5,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
    </>
  )
}
export default App;
```

:::

### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val7: 1
  })
  const onChange = (value: string | number) => {
    Toast.loading('异步演示 2 秒后更改');
    setTimeout(() => {
      inputState.val7 = Number(value)
      setInputState({ ...inputState })
    }, 2000)
  }
  return (
    <>
      <InputNumber modelValue={inputState.val7} onChangeFuc={onChange} isAsync />
    </>
  )
}
export default App;
```

:::

### 自定义按钮大小

:::demo

```tsx
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val8: 1
  })
  return (
    <>
      <InputNumber modelValue={inputState.val8} buttonSize="30" inputWidth="50" />
    </>
  )
}
export default App;
```

:::

## API

### Props

| 参数          | 说明                       | 类型           | 默认值 |
| ------------- | -------------------------- | -------------- | ------ |
| modelValue    | 初始值                     | String、Number | -      |
| inputWidth    | 输入框宽度                 | String         | `40`   |
| buttonSize    | 操作符+、-尺寸             | String         | `20`   |
| min           | 最小值限制                 | String、Number | `1`    |
| max           | 最大值限制                 | String、Number | `9999` |
| step          | 步长                       | String、Number | `1`    |
| decimalPlaces | 设置保留的小数位           | String、Number | `0`    |
| disabled      | 禁用所有功能               | Boolean        | false  |
| readonly      | 只读状态禁用输入框操作行为 | Boolean        | false  |
| isAsync       | 支持异步修改               | Boolean        | false  |

### Events

| 事件名      | 说明                   | 回调参数                      |
| ----------- | ---------------------- | ----------------------------- |
| onAdd       | 点击增加按钮时触发     | event: Event                  |
| onReduce    | 点击减少按钮时触发     | event: Event                  |
| onOverlimit | 点击不可用的按钮时触发 | event: Event                  |
| onChangeFuc | 值改变时触发           | value: number , event : Event |
| onBlurFuc   | 输入框失去焦点时触发   | event: Event                  |
| onFocus     | 输入框获得焦点时触发   | event: Event                  |
