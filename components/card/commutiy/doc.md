#  Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息

### 安装

import { Card,Price, Tag} from '@nutui/nutui-react-native';


## 代码演示

### 基本用法

```SnackPlayer
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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

### 自定义商品标签

```SnackPlayer
import  React from "react";
import { View, Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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

### 价格后自定义标签

```SnackPlayer
import  React from "react";
import { Card,Price, Tag, Image } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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

### 自定义店铺介绍

```SnackPlayer
import  React from "react";
import { Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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
            自定义店铺介绍{' '}
          </Text>
        }
      />
  );
};
export default App;
```

### 自定义右下角内容

```SnackPlayer
import  React from "react";
import { Text } from 'react-native';
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
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
            自定义
          </Text>
        }
      />
  );
};
export default App;
```


## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | 左侧图片Url                                 | String  | -         |
| title     | 标题                   | String  | -    |
| price | 商品价格                         | String  | -      |
| vipPrice     | 会员价格                               | String | -    |
| shopDesc  | 店铺介绍                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shopName   | 店铺名称| String  | -      |
| prolistTpl   | 自定义商品介绍| React.ReactNode  | -      |
| originTpl   | 价格后方自定义内容| React.ReactNode  | -      |
| shopTagTpl   | 店铺介绍自定义| React.ReactNode  | -      |
| footerTpl   | 右下角内容自定义| React.ReactNode  | -      |



