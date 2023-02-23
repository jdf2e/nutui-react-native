# Cell 

### Intro

The cell is a single display item in the list.

### Install

```ts
// react
import { Cell, CellGroup } from '@nutui/nutui-react-native'

```

## Demo

###  Basic Usage

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  const testClick = (
    event
  ) => {
    // console.log('Click Test')
  }
  return (
    <>
      <Cell title="Title" desc="Description" />
      <Cell title="Title" subTitle="Subtitle Description" desc="Description" />
      <Cell
        title="Click Test"
        onClick={(
          event
        ) => testClick(event)}
      />
      <Cell title="Round Radius 0" roundRadius={0} />
    </>
  )
}
export default App
```

:::

### Size setting large

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <>
      <Cell size="large" title="Title" desc="Description" />
      <Cell
        size="large"
        title="Title"
        subTitle="Subtitle Description"
        desc="Description"
      />
    </>
  )
}
export default App
```

:::

### Use Slots

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Text } from 'react-native';
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <>
      <Cell>
        <Text>Content</Text>
      </Cell>
    </>
  )
}
export default App
```

:::

### Use Slots(title slots)

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Text } from 'react-native';
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <Cell
      title={
        <Text>
          Title 1
        </Text>
      }
      desc="Description"
    />
  )
}
export default App
```

:::

### Link | CellGroup Usage

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { CellGroup, Cell } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <>
      <CellGroup
        title="Link | CellGroup Usage"
        desc="Usage nut-cell-group support title desc slots"
      >
        <Cell title="Link Usage" isLink />
        <Cell
          title="URL Jump"
          desc="https://jd.com"
          isLink
          url="https://jd.com"
        />
      </CellGroup>
    </>
  )
}
export default App
```

:::

### Customize the right arrow area

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { CellGroup, Cell, Switch } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <CellGroup title="Customize the right arrow area">
      <Cell title="Switch" linkSlot={<Switch checked />} />
    </CellGroup>
  )
}
export default App
```

:::

### Customize the left Icon area

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { CellGroup, Cell, Image } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <CellGroup title="Customize the left Icon area">
      <Cell
        title="Image"
        iconSlot={
          <Image
              style={{
                width: 30,
                height: 30
              }}
              source={{
                uri: 'https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'
              }}
            />
        }
      />
    </CellGroup>
  )
}
export default App
```

:::

### Cell Display Icon

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return <Cell title="Name" icon="my" desc="Description" isLink />
}
export default App
```

:::

### Only display desc , you can adjust the content position through desc-text-align

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return <Cell descTextAlign="left" desc="Description" />
}
export default App
```

:::

### Vertical Center

You can center the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```SnackPlayer name=Cell&dependencies=@nutui/nutui-react-native
import React from 'react'
import { Cell } from '@nutui/nutui-react-native'

const App = () => {
  return (
    <Cell center title="Title" subTitle="Subtitle Description" desc="Desc" />
  )
}
export default App
```

:::

## API


### CellGroup Prop

| Attribute | Description | Type   | Default |
|-------|----------|--------|--------|
| title | Title | String | -      |
| desc  | Description | String | -      |
| titleSlot        | Custom`title`slot                        | React.ReactNode          | -  |
| descSlot        | Custom`desc`slot                         | React.ReactNode          | -  |

### Cell Prop

| Attribute         | Description                                                                                              | Type             | Default          |
|-------------------|----------------------------------------------------------------------------------------------------------|------------------|------------------|
| title             | Title                      |  React.ReactNode           | -      |
| subTitle          | Subtitle                           |  React.ReactNode           | -      |
| desc              | Description                                     | String      | -      |
| descTextAlign     | Right description text alignment [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp), is only available when displaying desc | String | right  |
| isLink            | Whether to show the right arrow and turn on click feedback            | Boolean          | false  |
| to`v1.4.0 Abandon`       | C Target route of the link | String  | -      |
| replace           | If true, the navigation will not leave a history record                             | Boolean          | false  |
| roundRadius`v1.2.0` | Corner radius                                      | Number            | 6    |
| url               | Link                                         | String           | -      |
| icon              |  Left [icon name](#/icon) or image              | String           | -      |
| center`v1.2.0`    | Whether to center content                                                                              | Boolean          | false  |
| size`v1.2.0`      | Size, can be set to `large`                         | String          | -  |
| iconSlot`v1.2.0`  |  Custom Left `icon`                        | React.ReactNode          | -  |
| linkSlot`v1.2.0`  | Custom Right`link`                      | React.ReactNode          | -  |



### Cell Event

| Event | Description                  | Arguments   |
|-------|------------------------------|-------------|
| onClick`v1.3.8` | Emitted when cell is clicked | event |



## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-cell-color | ` $gray1` |
| --nutui-cell-title-font | ` $font-size-2` |
| --nutui-cell-title-desc-font | ` $font-size-1` |
| --nutui-cell-desc-font | ` $font-size-2` |
| --nutui-cell-desc-color | ` $gray2` |
| --nutui-cell-subtitle-color | ` $gray2` |
| --nutui-cell-border-radius | ` 6` |
| --nutui-cell-padding-top | ` 13` |
| --nutui-cell-padding-bottom | ` 13` | 
| --nutui-cell-padding-left | ` 16` |
| --nutui-cell-padding-right | ` 16` | 
| --nutui-cell-after-right | ` 16` |
| --nutui-cell-after-border-bottom-width | `  2` |
| --nutui-cell-after-border-bottom-color | ` #f5f6f7` |
| --nutui-cell-default-icon-margin-top | `  0` |
| --nutui-cell-default-icon-margin-right | `  4` |
| --nutui-cell-default-icon-margin-bottom | `  0` |
| --nutui-cell-default-icon-margin-left | `  0` |
| --nutui-cell-large-title-font | `  $font-size-large` |
| --nutui-cell-large-title-desc-font | `  $font-size-base` |
| --nutui-cell-large-padding-top | ` 15` |
| --nutui-cell-large-padding-bottom | ` 15` |
| --nutui-cell-large-padding-left | ` 16` |
| --nutui-cell-large-padding-right | ` 16` |
| --nutui-cell-background | ` $gray6` |
| --nutui-cell-group-title-padding-top | `  0` |
| --nutui-cell-group-title-padding-bottom | `  0` |
| --nutui-cell-group-title-padding-left | ` 10` |
| --nutui-cell-group-title-padding-right | ` 10` |
| --nutui-cell-group-title-color | ` #909ca4` |
| --nutui-cell-group-title-font-size | `  $font-size-2` |
| --nutui-cell-group-desc-padding-top | ` 0` |
| --nutui-cell-group-desc-padding-bottom | ` 0` |
| --nutui-cell-group-desc-padding-left | ` 10` |
| --nutui-cell-group-desc-padding-right | ` 10` |
| --nutui-cell-group-desc-color | ` #909ca4` |
| --nutui-cell-group-desc-font-size | `  $font-size-1` |
| --nutui-cell-group-background-color | `  $white` |