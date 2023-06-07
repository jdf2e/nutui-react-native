# BackTop

### Intro

Provides a quick return to the top function for long pages.

### Install

```javascript
import { BackTop } from '@nutui/nutui-react-native';
```


### Basic Usage

```SnackPlayer
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

  return (
      <View>
         <BackTop
            isShow={backIsShow}
          />
      </View>
  );
};
export default App;
```

### Distance

```SnackPlayer
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onPress={(e) => {
              onPressTop(e);
            }}
            bottom={200}
            right={50}
          />
      </View>
  );
};
export default App;
```
### Custom Style

```SnackPlayer
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View ,Text} from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onPress={(e) => {
              onPressTop(e)
            }}
            bottom={200}
            right={50}
          >
            <View><Text>自定义</Text></View>
          </BackTop>
      </View>
  );
};
export default App;
```

### Click

```SnackPlayer
import  React from "react";
import { BackTop } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [backIsShow, setBackIsShow] = useState(false);

   const onPressTop = (e) => {

  };

  return (
      <View>
         <BackTop
            isShow={backIsShow}
            onClick={(e) => {
              onPressTop(e);
            }}
          />
      </View>
  );
};
export default App;
```

## API

### Props

| Attribute        | Description                            | Type    | Default |
| ----------- | ------------------------------- | ------- | ------ |
| bottom      | Distance from bottom of page                | Number  | `20`   |
| right       | Distance from the right side of the page                | Number  | `10`   |
| zIndex      | Set the component z-index                | Number  | `10`   |

### Event

| Event         | Description               | Arguments          |
| ------------ | ------------------ | ----------------- |
| onClick | Emitted when component is clicked | event: MouseEvent |
