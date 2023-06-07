# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

``` ts
import { InputNumber } from '@nutui/nutui-react-native';
```

### Basic Usage

Initialize a default value

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

### Step size setting

Set step  `step` 5

```SnackPlayer
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

### Limit input range

`min` and `max` attributes represent the minimum and maximum values respectively

```SnackPlayer
import React, { useState } from "react";
import { InputNumber,Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val3: 10
  })
  const overlimit = (e: MouseEvent) => {
    console.log(e)
    Toast.warn('Exceeded limit event triggered')
  }
  return (
    <>
      <InputNumber modelValue={inputState.val3} min="10" max="20" onOverlimit={overlimit} />
    </>
  )
}
export default App;
```

### Disabled state

`disabled` When disabled, you cannot click the button or modify the input box.

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

### Read only disable input box

`readonly` Set read-only disable input box input behavior

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

### Support decimal point

Set step size `step` 0.1  `decimal-places` keep 1 decimal place

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
### Support asynchronous modification

Asynchronous modification through `change` event and `model-value`

```SnackPlayer
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val7: 1
  })
  const onChange = (value: string | number) => {
    Toast.loading('Asynchronous demo changes after 2 seconds')
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

### Custom button size

```SnackPlayer
import React, { useState } from "react";
import { InputNumber, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const [inputState, setInputState] = useState({
    val8: 1,
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

| Attribute           | Description                       | Type           | Default     |
|----------------|----------------------------|----------------|------------|
| modelValue        | Initial value                     | String、Number | -          |
| inputWidth    | Input box width                 | String         | `40`     |
| buttonSize    | Operators +, - Dimensions             | String         | `20`     |
| min            | Minimum limit                 | String、Number | `1`        |
| max            | Maximum limit                 | String、Number | `9999` |
| step           | step                       | String、Number | `1`        |
| decimalPlaces | Set reserved decimal places           | String、Number | `0`        |
| disabled       | Disable all features               | Boolean        | false      |
| readonly       | Read only status disables input box operation behavior | Boolean        | false      |
| isAsync       | Support for asynchronous modification | Boolean        | false      |

### Events

| Event    | Description                   | Arguments                       |
|-----------|------------------------|--------------------------------|
| onAdd    | Triggered when the Add button is clicked     | event: Event                   |
| onReduce   | Triggered when the decrease button is clicked     | event: Event                   |
| onOverlimit  | Triggered when an unavailable button is clicked | event: Event                   |
| onChangeFuc    | Triggered when the value changes           | value:  number , event : Event |
| onBlurFuc     | Triggered when the input box blur   | event: Event                   |
| onFocus    | Triggered when the input box focus   | event: Event                   |
