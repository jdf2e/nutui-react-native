# Progress

### Introduce

Used to show the current progress of the operation.

### Install

```js
import { Progress, Icon } from '@nutui/nutui-react-native';
```

## Demo

### Basic Usage

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
      />
    </Cell>
  );
};
export default App;
```

### Custom Style

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
        strokeColor="rgba(250,44,25,0.47)"
        stroke-width="20"
        textColor="red"
      />
    </Cell>
  );
};
export default App;
```

### Don't Show Percentage

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="50"
        showText={false}
      />
    </Cell>
  );
};
export default App;
```

### Show Percentage

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
      />
    </Cell>
  );
};
export default App;
```

### Text Inside

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="60"
        textInside
      />
    </Cell>
  );
};
export default App;
```

### Custom Content

:::demo
```jsx
import  React from "react";
import { Progress, Icon, Cell } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage={60}
        textInside
      >
        <Icon
          size={30}
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </Progress>
    </Cell>
  );
};
export default App;
```

## Custom Size

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
    <Cell>
      <Progress
        percentage="30"
        size="small"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percentage="50"
        size="base"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percentage="70"
        size="large"
        textInside
      />
    </Cell>
    </View>
  );
};
export default App;
```

### Status Display

:::demo
```jsx
import  React from "react";
import { Progress, Icon, Cell } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Cell>
        <Progress
            percentage={30}
            strokeColor={['#05ebd0', '#2f7bfc']}
        />
      </Cell>
      <Cell>
        <Progress
          percentage={100}
          strokeColor={['#a6ed59', '#2c9628']}
          >
            <Icon
                size={30}
                name='https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'
             />
        </Progress>
      </Cell>
    </View>
  );
};
export default App;
```

### Dynamic Change

:::demo
```jsx
import  React from "react";
import { Progress, Cell, Button } from '@nutui/nutui-react-native';
import { View } from 'react-native';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
    <Cell>
      <Progress
        percentage={value}
      />
    </Cell>
    <Cell>
      <Button
        type="default"
        style={{ margin: 8 }}
        onClick={() => {
          let num = value;
          if (value <= 0) {
            return false;
          }
          num -= 10;
          setValue(num);
        }}
      >
        减少
      </Button>
      <Button
        type="primary"
        onClick={() => {
          let num = value;
          if (value >= 100) {
            return false;
          }
          num += 10;
          setValue(num);
        }}
      >
        增加
      </Button>
    </Cell>
    </View>
  );
};
export default App;
```

## API

### Props

| Props | Description | Type | Default
|----- | ----- | ----- | -----
| percentage | percentage | Number | 0
| isShowPercentage | Whether to display the percent sign | Boolean | true
| fillColor | Progress bar background color | String | #f3f3f3
| strokeColor | Stroke color | String | linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)
| strokeWidth | Stroke width | String | -
| size | Progress bar and text size, eg `small` `base` `large` | String | base
| showText | Whether to show text | Boolean | true
| textInside | Progress bar text display position(`false`外显，`true`内显) | Boolean | false
| textColor | Progress bar text color setting | String | 外显`#333` 内显`#fff`
| textWidth | Progress bar text width setting | String | 35px
| textBackground | Progress bar text background color setting | String | 同进度条颜色
| textType | Progress bar text type setting，`text`(展示文字)/`icon`(展示icon标签) | String | text
| iconName | Icon Name | String | checked
| iconColor | Icon Color | String | #439422
| iconSize | Icon Size | String | 16px

