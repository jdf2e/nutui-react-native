#  Card 

### Intro

Used to display product pictures, prices and other information.

### Install

import { Card,Price, Tag} from '@nutui/nutui-react-native';


## Demo

### Basic Usage

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
    ></Card>
  );
};
export default App;
```

:::

### Custom prolist

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { View, Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        prolistTpl={
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            {['鲜活', '礼盒', '国产'].map((item) => {
              return (
                <View
                  style={{
                    paddingLeft: 1,
                    backgroundColor: '#f2f2f7',
                    marginRight: 5,
                  }}
                  key={item}
                >
                  <Text style={{ fonSnackPlayer name=Card&dependencies=@nutui/nutui-react-nativeize: 12, color: '#666666' }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        }
    ></Card>
  );
};
export default App;

```

:::

### Price after custom tag

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag, Image } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  const tagStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '5px',
    marginLeft: '2px',
    height: '14px',
  }
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        originTpl={
          <Image
            style={{ width: 29, height: 14, marginLeft: 4 }}
            source={{
              uri: 'https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png',
            }}
          />
        }
    ></Card>
  );
};
export default App;
```

:::

### Custom Content

:::demo
```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
        shopTagTpl={
          <Text style={{ fonSnackPlayer name=Card&dependencies=@nutui/nutui-react-nativeize: 15, color: '#000' }}>
            {' '}
            Custom Content{' '}
          </Text>
        }
      />
  );
};
export default App;
```

:::

### Customize bottom right content

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'desc',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  
  return (
    <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
        footerTpl={
          <Text
            style={{ fonSnackPlayer name=Card&dependencies=@nutui/nutui-react-nativeize: 12, color: '#000', marginRight: 10}}
          >
            custom
          </Text>
        }
      />
  );
};
export default App;
```

:::


## API

### Props


| Attribute            | Description               | Type   | Default  |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | Left thumb image                                  | String  | -         |
| title     | Title                   | String  | -    |
| price | Price                         | String  | -      |
| vipPrice     | vip-price                               | String | -    |
| shopDesc  | shop-desc                                   | String | -    |
| delivery     | delivery | String  | -      |
| shopName   | shop-name| String  | -      |
| prolistTpl   | Custom product introduction| React.ReactNode  | -      |
| originTpl   | Custom content behind the price| React.ReactNode  | -      |
| shopTagTpl   | Custom shop introduction| React.ReactNode  | -      |
| footerTpl   | Customize bottom right content| React.ReactNode  | -      |



