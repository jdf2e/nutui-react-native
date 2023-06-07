# Toast

### Intro

For light tips.

### Install

```javascript
import { Toast } from '@nutui/nutui-react-native';
```

## Demo

### Usage

#### Text

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const textToast = (msg) => {
        Toast.text(msg)
    }
    return (
        <>
        <Cell
          title="Text"
          isLink
          onClick={(
            event
          ) => textToast('text message~')}
        />
        </>
    )
}
export default App
```

#### Title

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const titleToast = (msg) => {
        Toast.text(msg,{title: 'title'})
    }
    return (
        <>
        <Cell
          title="Toast Title"
          isLink
          onClick={(
            event
          ) => titleToast('title message~')}
        />
        </>
    )
}
export default App
```

#### Success

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const successToast = (msg) => {
        Toast.success(msg)
    }
    return (
        <>
        <Cell
          title="Toast Success"
          isLink
          onClick={(
            event
          ) => successToast('Success')}
        />
        </>
    )
}
export default App
```


#### Fail

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const errorToast = (msg) => {
        Toast.fail(msg)
    }
    return (
        <>
        <Cell
          title="Toast Fail"
          isLink
          onClick={(
            event
          ) => errorToast('Fail')}
        />
        </>
    )
}
export default App
```


#### Warn

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const warningToast = (msg) => {
        Toast.warn(msg)
    }
    return (
        <>
            <Cell
            title="Toast Warn"
            isLink
            onClick={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => warningToast('Warn')}
            />
        </>
    )
}
export default App
```


#### Loading

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const loadingToast = (msg) => {
        Toast.loading(msg)
    }
    return (
        <>
            <Cell
            title="Toast Loading"
            isLink
            onClick={(
                event
            ) => loadingToast('Loading')}
            />
        </>
    )
}
export default App
```


#### Set Display Duration

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell, Button } from '@nutui/nutui-react-native';

const App = () => {
    const duringToast = (msg) => {
        Toast.text(msg, { duration: 10 })
    }
    return (
        <>
            <Cell
                title="Show for 10 seconds"
                isLink
                onClick={(
                    event
                ) => duringToast('Show for 10 seconds')}
            />
            <Cell
                title="Toast Not Disappear"
                isLink
                onClick={(
                    event
                ) => {Toast.text('Toast Not Disappear', { duration: 0 })}}
            />
            <Button
                style={{ margin: 8 }}
                type="primary"
                shape="round"
                onClick={() => {
                    Toast.hide()
                }}
            >Hide Toast</Button>
        </>
    )
}
export default App
```

#### Custom Bottom Height

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const toastBottom = (msg) => {
        Toast.text(msg, {
            center: false,
            bottom: '10%',
        })
    }
    return (
        <Cell
            title='Custom Bottom Height'
            isLink
            onClick={(
                event
            ) => toastBottom('Custom Bottom Height')}
        />
    )
}
export default App
```



#### Loading with transparent cover

```SnackPlayer
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-native';

const App = () => {
    const iconToast = (msg) => {
        Toast.loading(msg, {
            cover: true,
            coverColor: 'rgba(0, 0, 0, 0)',
            closeOnClickOverlay: true,
            onClose: () => {
                console.log('closeToast')
            },
        })
    }
    return (
        <>
            <Cell
                title="Loading with transparent cover"
                isLink
                onClick={(
                    event
                ) => iconToast('Loading')}
            />
        </>
    )
}
export default App
```



## API

| Methods           | Description              | Attribute          | Return value     |
| ---------------- | ------------------------------------------- | --------------- | ---------- |
| Toast.text      | Show text toast   |  message｜ options | toast instance(message support incoming HTML) |
| Toast.success  | Show success toast     | message｜ options| toast instance |
| Toast.fail       | Show fail toast   | message｜ options| toast instance|
| Toast.warn       | Show warn toast    | message｜ options | toast instance |
| Toast.hide      | Close toast     | clearAll: boolean   | void       |
| Toast.loading       | Show loading toast      | message｜ options | toast instance |

### Props

| Attribute                | Description              |  Type         | Default                        |
| ------------------- | -------------- | ------------- | ----------------------------- |
| id                  | Identifier, share one instance at the same time, default to multiple instances| String/Number | -            |
| duration            | Toast duration(ms), won't disappear if value is 0      | Number        | 2000                          |
| title `v1.3.0`           | title     | String        |           -             |
| center  | Whether to display in the middle of the page (display at the bottom when false) | Boolean| true                          |
| bottom | The distance from the bottom of the page (px or %), which takes effect when option.center is false | String| 30px       |
| textAlignCenter     | Whether the multi-line copy is centered           | Boolean       | true                          |
| bgColor             | background color (transparency) | String        | rgba(0, 0, 0, 0.8)      |
| customClass         |   Custom Class          | String        |          -                   |
| icon                | Custom Icon        | String        |         -                   |
| iconSize `v1.3.0`  | Custom iconSize      | String        | 20                           |
| size        | Text Size **small**/**base**/**large**          | String        | base      |
| cover      | Whether to show the mask layer     | Boolean       | false |
| coverColor          |  Cover Color   | String        | rgba(0,0,0,0)             |
| loadingRotate  | Whether the loading icon is rotated, only valid for the loading type  | Boolean | true                          |
| onClose             |Callback function after close             | function      | null         |
| closeOnClickOverlay | Whether to close when overlay is clicked         | Boolean       | false         |

