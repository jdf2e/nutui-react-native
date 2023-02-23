import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Divider from '../divider';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  basic: string;
  withText: string;
  contentPosition: string;
  dashed: string;
  customStyle: string;
  verticalDivider: string;
  text: string;
  link: string;
}

const DividerDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      withText: '展示文本',
      contentPosition: '内容位置',
      dashed: '虚线',
      customStyle: '自定义样式',
      verticalDivider: '垂直分割线',
      text: '文本',
      link: '链接'
    },
    'en-US': {
      basic: 'Basic Usage',
      withText: 'With Text',
      contentPosition: 'Content Position',
      dashed: 'Dashed',
      customStyle: 'Custom Style',
      verticalDivider: 'Vertical Divider',
      text: 'Text',
      link: 'Link'
    }
  });

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated.basic}
      >
        <Divider />
      </DemoCard>

      <DemoCard
        // title='展示文本'
        title={translated.withText}
      >
        <Divider>{translated.text}</Divider>
      </DemoCard>

      <DemoCard
        // title='内容位置'
        title={translated.contentPosition}
        style={{
          marginBottom: 10
        }}
      >
        <Divider
          contentPosition='left'
        >{translated.text}</Divider>

      </DemoCard>

      <DemoCard>
        <Divider
          contentPosition='right'
        >{translated.text}</Divider>
      </DemoCard>

      <DemoCard
        // title='虚线'
        title={translated.dashed}
        style={{
          marginBottom: 10
        }}
      >
        <Divider dashed />
      </DemoCard>

      <DemoCard>
        <Divider dashed>{translated.text}</Divider>
      </DemoCard>

      <DemoCard
        // title='自定义样式'
        title={translated.customStyle}
      >
        <Divider styles={{
          color: '#1989fa',
          borderColor: '#1989fa',
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 20
        }}
        >{translated.text}</Divider>

      </DemoCard>

      <DemoCard
        // title='垂直分割线'
        title={translated.verticalDivider}
      >

        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text>{translated.text}</Text>
          <Divider direction='vertical' />
          <Text>{translated.link}</Text>
          <Divider direction='vertical' />
          <Text>{translated.link}</Text>
        </View>

      </DemoCard>

    </DemoPage>
  );
};

export default DividerDemo;
