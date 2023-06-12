# Rate

### introduce

Use for quick rating actions, or to showcase reviews.

### Install

```tsx
import { Rate } from '@nutui/nutui-react-native';
```

## Code demonstration

### Basic usage

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue={3} />
    </View>
  );
};
export default App;
```

:::

### half star

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate allowHalf modelValue="3.5" />
    </View>
  );
};
export default App;
```

:::

### customize icon

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate checkedIcon="heart-fill1" uncheckedIcon="heart" modelValue="3" />
    </View>
  );
};
export default App;
```

:::

### custom quantity

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate count="6" modelValue="3" />
    </View>
  );
};
export default App;
```

:::

### Select the minimum quantity (support half star)

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate count="5" modelValue="2" minimizeValue="3"/>
    </View>
  );
};
export default App;
```

:::

### disabled state

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate disabled modelValue="3" />
    </View>
  );
};
export default App;
```

:::

### readonly state

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue="3" readonly />
    </View>
  );
};
export default App;
```

:::

### bind event

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <View>
        <Rate modelValue="3" onChange={onChange} />
    </View>
  );
};
export default App;
```

:::

### custom iconSize 35px

:::demo

```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
        <Rate modelValue="3" iconSize="35" />
    </View>
  );
};
export default App;
```

:::

## API

## Prop

| field           | explain                              | type    | default     |
| --------------- | ------------------------------------ | ------- | ----------- |
| modelValue      | The current number of stars <= count | Number  | -           |
| count           | total number of stars                | Number  | 5           |
| minimizeValue   | At least the number of STAR          | Number  | 0           |
| iconSize        | size of star                         | Number  | 18          |
| activeColor     | Icon selection color                 | String  | #fa200c     |
| voidColor       | Icon unselected color                | String  | #ccc        |
| uncheckedIcon   | Use icon (unchecked)                 | String  | star-n      |
| checkedIcon     | Use icon (checked)                   | String  | star-fill-n |
| halfcheckedIcon | Use icon(half icon)                  | String  |             |
| allowHalf       | Half star or not                     | Boolean | false       |
| readonly        | Read only                            | Boolean | false       |
| disabled        | Disable or not                       | Boolean | false       |
| spacing         | spacing                              | Number  | 20          |

## Event

| field    | explain                                            | Callback Arguments |
| -------- | -------------------------------------------------- | ------------------ |
| onChange | Event triggered when the current score is modified | Current value      |
