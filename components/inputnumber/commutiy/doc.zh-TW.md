# InputNumber 數字輸入框

### 介紹

通過點擊按鈕控制數字增減。

### 安裝

``` ts
import { InputNumber } from '@nutui/nutui-react-native';
```
### 基礎用法

初始化一個默認值

```SnackPlayer
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

### 步長設置

設置步長 `step` 5

```SnackPlayer
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val2: 0,
  })
  return (
    <>
      <InputNumber modelValue={inputState.val2} step="5" />
    </>
  )
}
export default App;
```

### 限制輸入範圍

`min` 和 `max` 屬性分別表示最小值和最大值

```SnackPlayer
import React, { useState } from "react";
import { InputNumber,Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val3: 10
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('超出限制事件觸發')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val3} min="10" max="20" onOverlimit={overlimit} />
    </>
  )
}
export default App;
```

### 禁用狀態

`disabled` 禁用狀態下無法點擊按鈕或修改輸入框。

```SnackPlayer
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

### 只讀禁用輸入框

`readonly` 設置只讀禁用輸入框輸入行為

```SnackPlayer
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

### 支持小數點

設置步長 `step` 0.1  `decimal-places` 小數保留1位

```SnackPlayer
import React, { useState } from "react";
import { InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val6: 5.5
  })
  return (
    <>
      <InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
    </>
  )
}
export default App;
```
### 支持異步修改

通過 `change` 事件和 `model-value` 進行異步修改

```SnackPlayer
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val7: 1
  })
  const onChange = (value: string | number) => {
    Toast.loading('異步演示 2 秒後更改')
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

### 自定義按鈕大小

```SnackPlayer
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

## API

### Props

| 參數         | 說明                       | 類型           | 默認值     |
|----------------|----------------------------|----------------|------------|
| modelValue        | 初始值                     | String、Number | -          |
| inputWidth    | 輸入框寬度                 | String         | `40`     |
| buttonSize    | 操作符+、-尺寸             | String         | `20`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步長                       | String、Number | `1`        |
| decimalPlaces | 設置保留的小數位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只讀狀態禁用輸入框操作行為 | Boolean        | false      |
| isAsync       | 支持異步修改 | Boolean        | false      |

### Events

| 事件名    | 說明                   | 回調參數                       |
|-----------|------------------------|--------------------------------|
| onAdd       | 點擊增加按鈕時觸發     | event: Event                   |
| onReduce     | 點擊減少按鈕時觸發     | event: Event                   |
| onOverlimit  | 點擊不可用的按鈕時觸發 | event: Event                   |
| onChangeFuc    | 值改變時觸發           | value:  number , event : Event |
| onBlurFuc      | 輸入框失去焦點時觸發   | event: Event                   |
| onFocus     | 輸入框獲得焦點時觸發   | event: Event                   |
