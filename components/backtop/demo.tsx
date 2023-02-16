import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { useTranslate } from '../utils';
import BackTop from '.';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';
import deviceWidth from '../utils/deviceWidth';
import deviceHeight from '../utils/deviceHeight';

interface T {
  title: string;
  clg: string;
  backText: string;
  content: string;
}

const BackTopDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基本用法',
      clg: '触发返回顶部',
      content: '我是测试数据',
      backText: '顶部',
    },
    'en-US': {
      title: 'Basic Usage',
      clg: 'backtop',
      content: 'test data',
      backText: 'Top',
    },
  });
  const demoStyle = {
    height: '1600px',
  };
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  };
  const ref1 = useRef();
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [distance, setDistance] = useState(200);
  const [backIsShow, setBackIsShow] = useState(false);

  const handleClick = () => {
    console.log(translated.clg);
  };

  const onPressTop = (e) => {
    ref1 &&
      ref1.current &&
      ref1.current.scrollTo({ y: 0, x: 0, animated: true });
  };

  return (
    <DemoPage>
      <DemoCard title="基本用法" padding={0}>
        <View style={{ width: deviceWidth - 40, height: 600 }}>
          <ScrollView
            ref={ref1}
            scrollEventThrottle={16}
            onScroll={(event) => {
              if (backIsShow && event.nativeEvent.contentOffset.y <= distance) {
                setBackIsShow(false);
              } else if (
                backIsShow === false &&
                event.nativeEvent.contentOffset.y > distance
              ) {
                setBackIsShow(true);
              }
            }}
            style={{ flex: 1 }}
          >
            {data.map((value, index) => {
              return (
                <View key={index} style={styles.items}>
                  <Text>
                    {translated.content}
                    {index}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          <BackTop
            isShow={backIsShow}
            onClick={(e) => {
              onPressTop(e);
            }}
            bottom={200}
            right={50}
          />
        </View>
      </DemoCard>
    </DemoPage>
  );
};

const styles = StyleSheet.create({
  items: {
    width: deviceWidth - 40,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default BackTopDemo;
