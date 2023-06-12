# Swipe

### introduce

It is often used for gesture operations such as sliding left and right to delete cells

### Install

```tsx
import { Swipe } from '@nutui/nutui-react-native';
```

## Code demonstration

### Basic usage

:::demo

```tsx
import React from "react";
import {
  View,
  Text
} from 'react-native';
import { Swipe, Cell, Button } from '@nutui/nutui-react-native';

const App = () => {
  return <>
        <Swipe
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              choice
            </Button>
          }

          rightAction={
            <Button
              style={{ flex: 1 }}
              type='primary' shape='square'
            >
              delete
            </Button>
          }
        >
          <View>
            <Text>slide</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

:::

### Disable sliding

:::demo

```tsx
import React from "react";
import {
  View,
  Text
} from 'react-native';
import { Swipe, Button } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Swipe
          rightWidth={100}
          rightAction={
            <Button
              shape='square'
              type='danger'
            >
              delete
            </Button>
          }
          disabled
        >
          <View>
            <Text>disabled slide</Text>
          </View>
      </Swipe>
  </>
}

export default App;
```

:::

### Event monitoring

:::demo

```tsx
import React from "react";
import {
  View,
  Text
} from 'react-native';
import { Swipe, Button, Toast } from '@nutui/nutui-react-native';

const App = () => {
  const handleChange = () => {
    Toast.text ('click ');
  }
  return <>
    <Swipe
          leftWidth={100}
          rightWidth={200}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              choice
            </Button>
          }
          rightAction={
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
            >
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                 delete
              </Button>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='info'
              >
                collect
              </Button>
            </View>
          }

          onActionClick={(e, position) => {
            alert(e + '  ' + position);
          }}
          onOpen={({ name, position }) => {
            alert(name + ' open ' + position);
          }}
          onClose={({ name, position }) => {
            alert(name + '  close ' + position);
          }}
        >
          <View>
            <Text>event</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

:::

### Asynchronous control

:::demo

```tsx
import React, { useRef } from "react";
import {
  View,
  Text
} from 'react-native';
import { Swipe, Button } from '@nutui/nutui-react-native';

const App = () => {
  const refDom = useRef(null)
  const beforeClose = (postion: string) => {
     setTimeout(() => {
      refDom.current && refDom.current.close();
     }, 2000);
  }
  return <>
      <Swipe
          ref={refDom}
          beforeClose={beforeClose}
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              chioce
            </Button>
          }
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                delete
              </Button>
            </>
          }
        >
          <View>
            <Text>event</Text>
          </View>
        </Swipe>
  </>
}
export default App;
```

:::

### Custom content

:::demo

```tsx
import React from "react";
import { View, Text } from 'react-native'
import { Swipe, Button, InputNumber } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Swipe
          rightWidth={100}
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                cart
              </Button>
            </>
          }
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 320
            }}
          >
            <Text>goods</Text>
            <InputNumber />
          </View>

        </Swipe>
  </>
}
export default App;
```

:::

## API

### Props

| Parameter   | description                                                   | type               | default value |
| ----------- | ------------------------------------------------------------- | ------------------ | ------------- |
| name        | identifier, which can be obtained in the event parameters     | _number \| string_ | `''`          |
| leftwidth   | specifies the width of the left sliding area, in 'PX'         | _number \| string_ | `0`           |
| rightwidth  | specifies the width of the sliding area on the right, in 'PX' | _number \| string_ | `0`           |
| leftaction  | contents of the left sliding area                             | _ReactNode_        | -             |
| rightaction | content of right sliding area                                 | _ReactNode_        | -             |
| beforeclose | the callback function before closing returns `position`       | _string_           | `left`        |
| disabled    | disable sliding                                               | _boolean_          | `false`       |

### Events

| Event name    | description                                  | callback parameters                        |
| ------------- | -------------------------------------------- | ------------------------------------------ |
| onOpen        | open the cell sidebar                        | _name: string , position: `left \| right`_ |
| onClose       | collapse the cell sidebar                    | _name: string , position: `left \| right`_ |
| onActionClick | triggered when clicking on the left or right | _event: Event , position: `left \| right`_ |
