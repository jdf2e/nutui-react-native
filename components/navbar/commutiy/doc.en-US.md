# Navbar

### introduce 


Provides navigation capabilities.

### Install

```ts
import { NavBar } from '@nutui/nutui-react-native';
```

### code example

### Basic usage

:::demo
```SnackPlayer name=NavBar&dependencies=@nutui/nutui-react-native
import React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="detail"
          border
          leftShow
          leftText="back"
          onClickTitle={(e) => {
            Toast.text('title');
          }}
          onClickBack={(e) => {
            Toast.text('back');
          }}
          onClickRight={(e) => {
            Toast.text('share');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};  
export default App;

```
:::

:::demo
```SnackPlayer name=NavBar&dependencies=@nutui/nutui-react-native
import  React from "react";
import { NavBar } from '@nutui/nutui-react-native';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="Broswing historyu"
          desc="clear"
          border
          leftShow
          onClickTitle={(e) => {
            Toast.text('title');
          }}
          onClickBack={(e) => {
            Toast.text('back');
          }}
          onClickRight={(e) => {
            Toast.text('clear');
          }}
        />
    </>
  );
};  
export default App;

```
:::

:::demo
```SnackPlayer name=NavBar&dependencies=@nutui/nutui-react-native
import  React from "react";
import { NavBar, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return ( 
    <>   
      <NavBar
          title="cart"
          desc="edit"
          border
          leftShow
          titIcon="https://img13.360buyimg.com/imagetools/jfs/t1/170651/33/33394/2798/63ad67fcFb1132817/9410e270ba821752.png"
          onClickTitle={(e) => {
            Toast.text('title');
          }}
          onClickBack={(e) => {
            Toast.text('back');
          }}
          onClickRight={(e) => {
            Toast.text('edit');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};  
export default App;

```
:::

:::demo
```SnackPlayer name=NavBar&dependencies=@nutui/nutui-react-native
import  React from "react";
import { NavBar, Icon } from '@nutui/nutui-react-native';

const App = () => {
  return ( 
    <>
      <NavBar
          title="order details"
          border
          leftShow
          leftText="back"
          onClickTitle={(e) => {
            Toast.text('title');
          }}
          onClickBack={(e) => {
            Toast.text('back');
          }}
          onClickRight={(e) => {
            Toast.text('share');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};  
export default App;

```
:::


### Customize the middle content of the navigation bar

:::demo
```SnackPlayer name=NavBar&dependencies=@nutui/nutui-react-native
import  React, { useState } from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return ( 
    <>   
      <NavBar
          desc="edit"
          border
          leftShow
          titIcon="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
          onClickTitle={(e) => {
            Toast.text('title');
          }}
          onClickBack={(e) => {
            Toast.text('back');
          }}
          onClickRight={(e) => {
            Toast.text('edit');
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
            <Icon
              name="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
              size="16"
            />
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
    </>
  );
};  
export default App;

```
:::

### Prop  

| Prop            | Description                                                                                           | Type    | Default  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | title name                                                                                       | String  | -       |
| desc            | Description on the right                                                                                       | String  | -       |
| leftShow        | Whether to show the left arrow                                                                              | Boolean | true   |
| titIcon         | title with icon                                                         | String  | -       |   
| leftText         | copy on the left                                                         | String  | -       |   
| fixed         | Is it fixed                                                         | Boolean  | false       |   
| safeAreaInsetTop         | Whether it is suitable for the safe area                                                         | Boolean  | false       |   
| border         | whether to show the bottom border                                      | Boolean  | false    | 
| placeholder         | When fixed to the top, whether to generate a placeholder element of equal height at the label position           | Boolean  | false    |
| zIndex         | Navigation Bar Hierarchy           | Number、String  | 10    |
| style         | container style           | React.CSSProperties  | {}    |                                        

### Event

| Event  | Description     | callback parameter    |
|-------|----------|-------------|
| onClickTitle | click title event | event:Event |
| onClickRight | Click on the event on the right | event:Event |
| onClickBack | click back event | event:Event |
| onClickIcon | Click the icon event on the right side of the title | event:Event |