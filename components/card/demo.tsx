import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import deviceWidth from '../utils/deviceWidth';
import Card from './';
import pt from '../utils/pt';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

const CardDemo = () => {
  const { imgUrl, title, price, vipPrice, shopDesc, delivery, shopName } = {
    imgUrl:
      'https://img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  };
  return (
    <DemoPage>
      <DemoCard title="基本用法">
      <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
      />
      </DemoCard>
      <DemoCard title="自定义商品标签">
      <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
        prolistTpl={
          <View style={{ flexDirection: 'row', marginTop: pt(8) }}>
            {['鲜活', '礼盒', '国产'].map((item) => {
              return (
                <View
                  style={{
                    paddingLeft: pt(2),
                    backgroundColor: '#f2f2f7',
                    marginRight: pt(10),
                  }}
                  key={item}
                >
                  <Text style={{ fontSize: pt(24), color: '#666666' }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        }
      />
      </DemoCard>
      <DemoCard title="价格后自定义标签">
      <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
        originTpl={
          <Image
            style={{ width: pt(58), height: pt(28), marginLeft: pt(8) }}
            source={{
              uri: 'https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png',
            }}
          />
        }
      />
      </DemoCard>
      <DemoCard title="自定义店铺介绍">
      <Card
        imgUrl={imgUrl}
        title={title}
        price={price}
        vipPrice={vipPrice}
        shopDesc={shopDesc}
        delivery={delivery}
        shopName={shopName}
        shopTagTpl={
          <Text style={{ fontSize: pt(30), color: '#000' }}>
            {' '}
            自定义店铺介绍{' '}
          </Text>
        }
      />
      </DemoCard>
      <DemoCard title="自定义右下角内容">
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
            style={{ fontSize: pt(24), color: '#000', marginRight: pt(20) }}
          >
            自定义
          </Text>
        }
      />
      </DemoCard>
    </DemoPage>
  );
};

export default CardDemo;
