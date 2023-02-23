import React from 'react';
import Skeleton from '../skeleton';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  '3b02fdee': string;
  '84aa6bce': string;
  ea3bc18a: string;
  '02a53df5': string;
  '0a001122': string;
  a4ed11b5: string;
  '07d62d5c': string;
}

const SkeletonDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '3b02fdee': '触发了change事件，开关状态：',
      '84aa6bce': '基础用法',
      ea3bc18a: '传入多行',
      '02a53df5': '显示头像',
      '0a001122': '标题段落圆角风格',
      a4ed11b5: '图片组合',
      '07d62d5c': '显示子组件'
    },
    'zh-TW': {
      '3b02fdee': '觸發了change事件，開關狀態：',
      '84aa6bce': '基礎用法',
      ea3bc18a: '傳入多行',
      '02a53df5': '顯示頭像',
      '0a001122': '標題段落圓角風格',
      a4ed11b5: '图片组合',
      '07d62d5c': '圖片組合'
    },
    'en-US': {
      '3b02fdee': 'The change event is triggered, the switch state:',
      '84aa6bce': 'Basic usage',
      ea3bc18a: 'Pass in multiple lines',
      '02a53df5': 'show avatar',
      '0a001122': 'Heading Paragraph Rounded Corner Style',
      a4ed11b5: 'picture combination',
      '07d62d5c': 'show subcomponents'
    }
  });

  return (
    <DemoPage>
      <DemoCard
        title={translated['84aa6bce']}
      >
        <Skeleton
          width={250}
          height={15}
          animated
          style={{ marginBottom: 10 }}
        />

        <Skeleton
          width={250}
          height={15}
        />

      </DemoCard>

      <DemoCard
        title={translated.ea3bc18a}
      >
        <Skeleton
          width={310}
          height={15}
          row={3}
          title
          animated
        />
      </DemoCard>

      <DemoCard
        title={translated['02a53df5']}
      >
        <Skeleton
          width={250}
          height={15}
          row={3}
          title
          animated
          avatar
          avatarSize={100}
        />
      </DemoCard>

      <DemoCard
        title={translated['0a001122']}
      >
        <Skeleton
          width={250}
          height={15}
          animated
          round
        />
      </DemoCard>

    </DemoPage>
  );
};

export default SkeletonDemo;
