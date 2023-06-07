#  Skeleton

### Intro

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

### Install
``` ts
import { Skeleton } from '@nutui/nutui-react-native';
```


## Code demonstration

### Basic usage

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated />
    </>
  )
}
export default App;
```

### Incoming multiline

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated />
    </>
  )
}
export default App;
```

### Show Faces

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} row={3} title animated avatar />
    </>
  )
}
export default App;
```

### Title paragraph fillet style

```SnackPlayer
import React from "react";
import { Skeleton } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Skeleton width={250} height={15} animated round />
    </>
  )
}
export default App;
```




## API

### Prop

| Attribute       | Description                                             | Type    | Default    |
|------------|-------------------------------------------------|---------|----------|
| loading    | Whether to display skeleton screen                                    | Boolean | `false`    |
| width       | Width per row                                        | Number  | 100 |
| height      | Height of each row                                        | Number  | 100   |
| animated    | Whether to turn on skeleton screen animation                                | Boolean  | `false`  |
| avatar      | Show avatar                                     | Boolean | `false`   |
| avatarShape      | Avatar shape: square / round                        | String | `round`   |
| avatarSize       | Avatar size                                   | Number | `50`    |
| round  | Is the title / paragraph rounded                                | Boolean | `false`  |
| row    | Set the number of paragraph lines                                           | Number | 1       |
| title  | Show paragraph titles                                        | Boolean | `false`   |
