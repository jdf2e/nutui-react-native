import React from 'react';
import { View, Text, Image } from 'react-native';

import Cell from './';
import CellGroup from '../cellgroup';
import Dialog from '../dialog';
import Switch from '../switch';
import pt from '../utils/pt';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';

const CellDemo = () => {
  const testClick = (event) => {
    Dialog.alert({title: '点击事件'});
  };

  return (
    <DemoPage>
      <DemoCard
        title="基本用法"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell title="我是标题" desc="描述文字" />

        <Cell title="我是标题" subTitle="副标题描述" desc="描述文字" />

        <Cell title="点击测试" onClick={(event) => testClick(event)} />

        <Cell title="圆角设置0" roundRadius={0} />
      </DemoCard>
      <DemoCard
        title="尺寸设置 large"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell size="large" title="我是标题" desc="描述文字" />

        <Cell
          size="large"
          title="我是标题"
          subTitle="副标题描述"
          desc="描述文字"
        />
      </DemoCard>
      <DemoCard
        title="直接使用插槽(slot)"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell>
          <View>
            <Text>自定义内容</Text>
          </View>
        </Cell>
      </DemoCard>
      <DemoCard
        title="直接使用插槽(slot title)"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell
          title={
            <Text>
              Title <Text style={{ color: 'red' }}>1</Text>
            </Text>
          }
          desc="描述文字"
        />
      </DemoCard>

      <DemoCard
        title="链接 | 分组用法"
        flexDirection="column"
        subTitle="使用 nut-cell-group 支持 title desc slots"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <CellGroup>
          <Cell title="链接" isLink />
          <Cell
            title="URL 跳转"
            desc="https://jd.com"
            isLink
            url="https://jd.com"
          />
        </CellGroup>
      </DemoCard>
      <DemoCard
        title="自定义右侧箭头区域"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell title="Switch" linkSlot={<Switch checked />} />
      </DemoCard>
      <DemoCard
        title="自定义左侧 Icon 区域"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell
          title="图片"
          iconSlot={
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={{
                uri: 'https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png',
              }}
            />
          }
        />
      </DemoCard>
      <DemoCard
        title="展示图标"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell title="姓名" icon="my" desc="描述文案" isLink />
      </DemoCard>
      <DemoCard
        title="只展示 desc ，可通过 desc-text-align 调整内容位置"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell descTextAlign="left" desc="描述文案" />
      </DemoCard>
      <DemoCard
        title="垂直居中"
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <Cell center title="我是标题" subTitle="副标题描述" desc="描述文字" />
      </DemoCard>
    </DemoPage>
  );
};
export default CellDemo;
