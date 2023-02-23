import React from 'react';
import { View } from 'react-native';
import TrendArrow from '../trendarrow';
import Icon from '../icon';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  basic: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
}
const TrendArrowDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标'
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Change text color',
      title2: 'Specify decimal places',
      title3: 'Arrow ahead',
      title4: 'Show sign',
      title5: 'Whether to show 0',
      title6: 'Custom color',
      title7: 'Custom icon'
    }
  });

  return (
    <DemoPage>
      <DemoCard
        title={translated.basic}
      >

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow style={{ marginRight: 10 }} syncTextColor={false} rate={1} />
          <TrendArrow syncTextColor={false} rate={-0.2535} />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title1}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{
              marginRight: 10
            }}
            rate={10.2365}
          />
          <TrendArrow rate={-0.2535} />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title2}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            digits={1}
            rate={10.2365}
            style={{ marginRight: 10 }}
          />
          <TrendArrow digits={3} rate={-0.2535} />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title3}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{ marginRight: 10 }}
            arrowLeft rate={0.2535}
          />
          <TrendArrow arrowLeft rate={-0.2535} />
        </View>
      </DemoCard>
      <DemoCard
        title={translated.title4}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{ marginRight: 10 }}
            showSign
            rate={1}
          />
          <TrendArrow showSign rate={-0.2535} />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title5}
      >

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{ marginRight: 10 }}
            showSign
            rate={0}
          />
          <TrendArrow showSign showZero rate={0} />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title6}
      >

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{ marginRight: 10 }}
            rate={10.2365}
            riseColor='rgb(73,143,242)'
          />
          <TrendArrow
            style={{ marginRight: 10 }}
            rate={-0.2535}
            showSign
            dropColor='rgb(255, 190, 13)'
          />
          <TrendArrow
            syncTextColor={false}
            rate={-0.2535}
            showSign
            textColor='rgb(39,197,48)'
            dropColor='rgb(39,197,48)'
          />
        </View>
      </DemoCard>

      <DemoCard
        title={translated.title7}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TrendArrow
            style={{ marginRight: 10 }}
            rate={10.2365}
            upIconName='success'
          />
          <TrendArrow
            style={{ marginRight: 10 }}
            rate={-10.2365}
            downIconName='failure'
          />
          <TrendArrow rate={10.2365}>
            <Icon name='heart-fill' color='#fa2c19' size={12} />
          </TrendArrow>
        </View>

      </DemoCard>

    </DemoPage>
  );
};

export default TrendArrowDemo;
