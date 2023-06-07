#  Switch

### Introduction

Used to open or close the options.

### Install

```ts
import { Switch } from '@nutui/nutui-react-native';
```

## Code demonstration

### Basic usage

```SnackPlayer
import  React from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Switch checked />
    </>
  );
};
export default App;

```


### disable status

```SnackPlayer
import  React from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Switch checked disable />
    </>
  );
};
export default App;

```

### change event

```SnackPlayer
import  React from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  const change = (value: boolean, event: Event) => {
    alert(`Triggering the change event, the switch status：${value}`)
  }
  return (
    <>
    <Switch change={(value, event) => change(value, event)} />
    </>
  );
};
export default App;

```
### Asynchronous control

```SnackPlayer
import  React, { useState } from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)

  const changeAsync = (value: boolean, event: Event) => {
    alert(`Asynchronous trigger after 2 seconds ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return (
    <>
    <Switch
      checked={checkedAsync}
      isAsync
      change={(value, event) => changeAsync(value, event)}
     />
    </>
  );
};
export default App;

```
### Custom color

```SnackPlayer
import  React from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Switch activeColor="blue" />
    </>
  );
};
export default App;

```
### Support text

```SnackPlayer
import  React from "react";
import { Switch } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
    <Switch activeText="open" inactiveText="close" />
    </>
  );
};
export default App;

```




## API

### Props

| parameter            | illustrate             | type    | Defaults   |
|----------------|------------------|---------|-----------------------|
| checked        | switch status              | Boolean | `false`    |
| disable        | Disable                     | Boolean | `false`   |
| activeColor   | Background color when opening | String  | `#fa2c19`|
| inactiveColor | Background color when closed | String  | `#ebebeb` |
| activeText    | Text description when opening | String  | -        |
| inactiveText  | Text description when closed  | String  | -        |
| isAsync  | Whether the switch state is modified asynchronous   | Boolean  | `false`                     |


### Events

| Incident name | illustrate           | Callback parameter       |
|--------|----------------|-------------------------------|
| change | Trigger when switching switches | (value: boolean,event: Event) |
