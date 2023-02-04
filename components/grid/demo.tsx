import React from 'react';
import { View, Text } from 'react-native';

import { useTranslate } from '../utils';
import Grid from '.';
import GridItem from '../griditem';
import Toast from '../toast';
import Icon from '../icon';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  basic: string;
  text: string;
  columnNum: string;
  square: string;
  gutter: string;
  reverse: string;
  horizontal: string;
  iconStyle: string;
  customContent: string;
}
const GridDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      text: '文字',
      columnNum: '自定义列数',
      square: '正方形格子',
      gutter: '格子间距',
      reverse: '内容翻转',
      horizontal: '内容横向',
      iconStyle: '图标颜色/大小',
      customContent: '自定义内容',
    },
    'zh-TW': {
      basic: '基本用法',
      text: '文字',
      columnNum: '自定義列數',
      square: '正方形格子',
      gutter: '格子間距',
      reverse: '內容翻轉',
      horizontal: '內容橫向',
      iconStyle: '圖標顏色/大小',
      customContent: '自定義內容',
    },
    'en-US': {
      basic: 'Basic Usage',
      text: 'text',
      columnNum: 'Column Num',
      square: 'Square',
      gutter: 'Gutter',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      iconStyle: 'Icon Style',
      customContent: 'Custom Content',
    },
  });

  const handleClick = () => {
    Toast.text({ title: '点击了第几个' });
  };
  return (
    <DemoPage>
      <DemoCard title={translated.basic}>
        <Grid>
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.columnNum}>
        <Grid columnNum={3}>
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.square}>
        <Grid columnNum={3} square>
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.gutter} backgroundColor="rgba(0, 0, 0, 0)" padding={0}>
        <Grid gutter={3}>
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.reverse}>
        <Grid reverse>
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.horizontal}>
        <Grid direction="horizontal">
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.iconStyle}>
        <Grid columnNum="3" iconColor="#fa2c19">
          <GridItem icon="dongdong" text={translated.text} />
          <GridItem
            icon="dongdong"
            text={translated.text}
            iconColor="#478EF2"
            iconSize="40"
          />
          <GridItem icon="dongdong" text={translated.text} />
        </Grid>
      </DemoCard>

      <DemoCard title={translated.customContent}>
        <Grid columnNum="4" gutter={0.5}>
          <GridItem
            icon="https://img12.360buyimg.com/imagetools/jfs/t1/182890/28/30878/3163/63ad4804F7d4e7ff8/bce589043277a902.png"
            text="More"
          />
          <GridItem
            icon={
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#ff0a22',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  name={
                    'https://img14.360buyimg.com/imagetools/jfs/t1/98068/14/29342/2507/63ad4d52F6ad3bfd7/9b8e07778d2f25a1.png'
                  }
                  size={20}
                />
              </View>
            }
          />
          <GridItem
            text={
              <View style={{ width: 40, backgroundColor: 'green' }}>
                <Text>自定义内容22</Text>
              </View>
            }
          />
          <GridItem
            icon={
              <Icon
                name={
                  'https://img13.360buyimg.com/imagetools/jfs/t1/30115/11/19935/116736/63ad4d53F4af517eb/afb9f57d0d47559a.png'
                }
                size={55}
              />
            }
          />
        </Grid>
      </DemoCard>
    </DemoPage>
  );
};

export default GridDemo;
