#  Card 商品卡片

### 介紹

商品卡片，用於展示商品的圖片、價格等信息

### 安裝

import { Card,Price, Tag} from '@nutui/nutui-react-native';


## 代碼演示

### 基本用法

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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

### 自定義商品標簽

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
            {['鮮活', '禮盒', '國產'].map((item) => {
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

### 價格後自定義標簽

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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

### 自定義店鋪介紹

:::demo
```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
            自定義店鋪介紹{' '}
          </Text>
        }
      />
  );
};
export default App;
```

:::

### 自定義右下角內容

:::demo

```SnackPlayer name=Card&dependencies=@nutui/nutui-react-native
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react-native';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 陽澄湖大閘蟹公4.5兩 母3.5兩 4對8只 鮮活生鮮螃蟹現貨水產禮盒海鮮水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自營',
    delivery: '廠商配送',
    shopName: '陽澄湖大閘蟹自營店>',
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
            自定義
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


| 字段    | 說明                                       | 類型    | 默認值    |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | 左側圖片Url                                 | String  | -         |
| title     | 標題                   | String  | -    |
| price | 商品價格                         | String  | -      |
| vipPrice     | 會員價格                               | String | -    |
| shopDesc  | 店鋪介紹                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shopName   | 店鋪名稱| String  | -      |
| prolistTpl   | 自定義商品介紹| React.ReactNode  | -      |
| originTpl   | 價格後方自定義內容| React.ReactNode  | -      |
| shopTagTpl   | 店鋪介紹自定義| React.ReactNode  | -      |
| footerTpl   | 右下角內容自定義| React.ReactNode  | -      |



