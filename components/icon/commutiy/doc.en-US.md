# Icon

### Introduce

Icon set based on IconFont fonts, which can be used through the Icon component.

### Install

``` javascript
// react
import { Icon } from '@nutui/nutui-react-native';

```

## Demo

### Basic usage

The `name` attribute of `Icon` supports passing in icon names or image links.

```SnackPlayer
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD" />
    <Icon size={40}
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />

  </>
}

export default App;
```

### Color

The 'color' property of 'Icon' is used to set the color of the icon.

```SnackPlayer
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" color="#fa2c19" />
    <Icon name="dongdong" color="#64b578" />
    <Icon name="JD" color="#fa2c19" />
  </>
}

export default App;
```

### Size

The 'size' property of 'Icon' is used to set the size of the icon

```SnackPlayer
import React from "react";
import { Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="dongdong" size={24} />
    <Icon name="dongdong" size={16} />
  </>
}

export default App;
```

## API

### Props

| Props        | Description                                                  | Type             | Default          |
|--------------|-----------------------------------------------------|------------------|------------------|
| name         | Icon name or picture link                           | String           | -                |
| color        | Icon color                                          | String           | -                |
| size         | Icon size, such as:  `20`   | Number | -                |

### Events

| Event | Description           | callback parameters |
|-------|----------------|---------------------|
| onClick`v1.3.8` | Triggered when the icon is tapped | event: Event        |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-icon-height | `20` |
| --nutui-icon-width | `20` |
