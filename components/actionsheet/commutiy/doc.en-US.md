# ActionSheet

### Intro

Action menu panel that pops up from the bottom.

### Install

```tsx
import { ActionSheet, Cell } from '@nutui/nutui-react-native';
```

## Demo

### Basic usage

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

interface Item {
  name: string
  subname?: string
  disable?: boolean
}
const App = () => {
  const [val1, setVal1] = useState('')
  const [isVisible1, setIsVisible1] = useState(false)
  const menuItemsOne: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
    },
  ]
  const chooseItem = (itemParams: any) => {
    console.log(itemParams.name, 'itemParams')
    setVal1(itemParams.name)
    setIsVisible1(false)
  }

  return (
    <>
    <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
      <View>
        <Text>Basic Usage</Text>
      </View>
      <Text>{val1}</Text>
    </Cell>

    <ActionSheet
      visible={isVisible1}
      menuItems={menuItemsOne}
      onChoose={chooseItem}
      onCancel={() => setIsVisible1(false)}
     />
    </>
  );
};
export default App;
```

:::

### Show Cancel Button

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
    },
  ]
  const chooseItemTwo = (itemParams: Item) => {
    setVal2(itemParams.name)
    setIsVisible2(false)
  }
  return (
    <>
    <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
      <View>
        <Text>Show Cancel Button</Text>
      </View>
      <Text>{val2}</Text>
    </Cell>

    <ActionSheet
      visible={isVisible2}
      cancelTxt="Cancel"
      menuItems={menuItemsOne}
      onChoose={chooseItemTwo}
      onCancel={() => setIsVisible2(false)}
     />
    </>
  );
};
export default App;
```

:::

### Display Description Information

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
      subname: 'Description Information',
    },
  ]
  const chooseItemThree = (itemParams: Item) => {
    setVal3(itemParams.name)
    setIsVisible3(false)
  }
  return (
    <>
    <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
      <View>
        <Text>Display Description Information</Text>
      </View>
      <Text>{val3}</Text>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      description="This is a descriptive message"
      cancelTxt="Cancel"
      menuItems={menuItemsTwo}
      onChoose={chooseItemThree}

      onCancel={() => setIsVisible3(false)}
     />
    </>
  );
};
export default App;
```

:::

### Option Status

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: 'Shading Options',
    },
    {
      name: 'Disable Option',
      disable: true,
    },
  ]
  return (
    <>
    <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
      <View>
        <Text>Option Status</Text>
      </View>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelTxt="Cancel"
      menuItems={menuItemsThree}
      chooseTagValue="Shading Options"
      onCancel={() => setIsVisible4(false)}

      onChoose={() => {
        setIsVisible4(false)
      }}
     />
    </>
  );
};
export default App;
```

:::

## Prop

| Attribute      | Description                                                       | Type    | Default   |
| -------------- | ----------------------------------------------------------------- | ------- | --------- |
| visible        | Mask layer visible                                                | Boolean | false     |
| cancelTxt      | Cancel Text                                                       | String  | 'Cancel'  |
| menuItems      | Menu Item                                                         | Array   | [ ]       |
| optionTag      | Set menu item display usage parameters                            | String  | 'name'    |
| optionSubTag   | Set menu item description display usage parameters                | String  | 'subname' |
| title          | Set panel title                                                   | String  | ''        |
| description    | Set panel subtitle/description                                    | String  | ''        |
| chooseTagValue | Set selected item'value, corresponds to the value of 'option-tag' | String  | ''        |
| color          | highlight color                                                   | String  | '#ee0a24' |

## Event

| Attribute | Description                             | Arguments                                           |
| --------- | --------------------------------------- | --------------------------------------------------- |
| onChoose  | Triggered after selection               | Selected list item item, selected index value index |
| onCancel  | Triggered when onCancel copy is clicked | none                                                |
