# Image

### Intro

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

### Install

```tsx
// react
import { Image } from '@nutui/nutui-react-native';
```

## Code

### Basic Usage

The basic usage is similar to the native img tag. You can set the source, width, height and other native attributes.

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Image
          source={{
            uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
          }}
          width={90}
          height={90}
        />
  </>
}
export default App;
```

:::

### Object Fill

The `resizeMode` attribute is used to set the image filling mode, which is equivalent to the original `Object-fit` attribute.

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {
  return <>
      <Image
      source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
      resizeMode='contain'
      width={90}
      height={90}
    />
  </>
}
export default App;
```

:::

### Round

The round attribute allows you to set the image to be round.

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-native';

const App = () => {

  return <>
   <Image
      source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
      width={90}
      height={90}
      round
    />
  </>
}
export default App;
```

:::

### Loading

The Image component provides a default loading prompt and supports custom content through the loading slot.

:::demo

```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
     <Image
          width={90}
          height={90}
          showLoading
          slotLoding={
            <>
              <Icon name='loading' />
            </>
          }
        />
  </>
}
export default App;
```

:::

### Error

The Image component provides a default loading failure warning and supports custom content through the error slot.

:::demo

```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return <>
        <Image
            width={90}
            height={90}
            source={{ uri: 'https://x' }}
            showError
          >
            <Icon name='circle-close' />
        </Image>
  </>
}
export default App;
```

:::

## API

### Props

| Attribute           | Description                                                                                                        | Type                        | Default   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- | --------- |
| source              | Src                                                                                                                | { uri: ''} or require('xx') | -         |
| resizeMode          | Fit mode, same as object-fit                                                                                       | ImageFit                    | 'contain' |
| width               | Width                                                                                                              | number                      | -         |
| height              | Height                                                                                                             | number                      | -         |
| round               | Whether to be round                                                                                                | Boolean                     | false     |
| radius              | Border Raduis                                                                                                      | String \| Numer             | -         |
| showError           | Whether to show error placeholder                                                                                  | Boolean                     | true      |
| showLoading         | Whether to show loading placeholder                                                                                | Boolean                     | true      |
| loadingImg `v1.4.6` | Set the prompt image during loading, which conflicts with `slotLoding` and has a higher priority than `slotLoding` | String                      | -         |
| errorImg `v1.4.6`   | Set the error prompt image, which conflicts with `slotError` and has a higher priority than `slotError`            | String                      | -         |

### ImageFit

| Attribute | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| contain   | Keep aspect ratio, fully display the long side of the image                         |
| cover     | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| stretch   | Stretch and resize image to fill the content box                                    |
| center    | Center without stretching                                                           |
| repeat    | Repeat tiling the picture until the container is filled                             |

### Slots

| Attribute | Description                |
| --------- | -------------------------- |
| loading   | Custom loading placeholder |
| error     | Custom error placeholder   |

### Events

| Event   | Description                    | Arguments    |
| ------- | ------------------------------ | ------------ |
| onClick | Emitted when image is clicked  | event: Event |
| onLoad  | Emitted when image loaded      | -            |
| onError | Emitted when image load failed | event: Event |
