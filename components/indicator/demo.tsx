import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Indicator } from './indicator';
import Cell from '../cell';
import Row from '../row';
import Col from '../col';
import Button from '../button';
import { useTranslate } from '../utils';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  ce5c5446: string;
  c38a08ef: string;
  b840c88f: string;
  a74a1fd4: string;
  c123sda1: string;
}
const IndicatorDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '主要按钮',
      b840c88f: 'block用法',
      a74a1fd4: '不补0',
      c123sda1: '竖向展示',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '主要按鈕',
      b840c88f: 'block用法',
      a74a1fd4: '不補0',
      c123sda1: '豎向展示',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Button',
      b840c88f: 'Block usage',
      a74a1fd4: "Not Add '0'",
      c123sda1: 'Vertical display',
    },
  });
  return (
    <DemoPage>
      <DemoCard title={translated.ce5c5446} flexDirection="column">
        <Cell>
          <Indicator size={3} current={3} />
        </Cell>
        <Cell>
          <Row>
            <View style={{flex: 1}}>
              <Button size="small" type="primary">
                {translated.c38a08ef}
              </Button>
            </View>
            <View style={{flex: 1}}>
              <Indicator block align="right" size={6} current={5} />
            </View>
          </Row>
        </Cell>
      </DemoCard>
      <DemoCard title={translated.b840c88f} flexDirection="column">
        <Cell>
          <Indicator block align="center" size={6} current={5} />
        </Cell>
        <Cell>
          <Indicator block align="left" size={6} current={1} />
        </Cell>
        <Cell>
          <Indicator block align="right" size={6} current={5} />
        </Cell>
      </DemoCard>
      <DemoCard title={translated.a74a1fd4}>
        <Cell>
          <Indicator fillZero={false} size={6} current={5} />
        </Cell>
      </DemoCard>
      <DemoCard title={translated.c123sda1}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.vertical_cell}>
            <Indicator fillZero={false} size={6} current={5} vertical />
          </View>
          <View style={styles.vertical_cell}>
            <Indicator size={6} current={2} vertical />
          </View>
        </View>
      </DemoCard>
    </DemoPage>
  );
};

const styles = StyleSheet.create({
  vertical_cell: {
    height: 100,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default IndicatorDemo;
