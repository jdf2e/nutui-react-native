import React from 'react';
import Tabbar from '../tabbar';
import TabbarItem from '../tabbaritem';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  ce5c5446: string;
  c38a08ef: string;
  b840c88f: string;
  a74a1fd4: string;
  '8dab2f66': string;
  cfbdc781: string;
  c3a3a1d2: string;
  e51e4582: string;
  '7db1a8b2': string;
  a52bef0c: string;
  d04fcbda: string;
  c9e6df49: string;
}

const tabbarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义选中',
      b840c88f: '徽标提示',
      a74a1fd4: '自定义颜色',
      '8dab2f66': '可自定义icon个数的tabbar',
      cfbdc781: '固定底部，可自由跳转',
      c3a3a1d2: '首页',
      e51e4582: '我的',
      '7db1a8b2': '购物车',
      a52bef0c: '发现',
      d04fcbda: '分类',
      c9e6df49: '红点'
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定義選中',
      b840c88f: '徽標提示',
      a74a1fd4: '自定義顏色',
      '8dab2f66': '可自定義icon個數的tabbar',
      cfbdc781: '固定底部，可自由跳轉',
      c3a3a1d2: '首頁',
      e51e4582: '我的',
      '7db1a8b2': '購物車',
      a52bef0c: '發現',
      d04fcbda: '分類',
      c9e6df49: '紅點'
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'custom check',
      b840c88f: 'Logo Tips',
      a74a1fd4: 'custom color',
      '8dab2f66': 'Tabbar with customizable number of icons',
      cfbdc781: 'Fixed bottom, free to jump',
      c3a3a1d2: 'first',
      e51e4582: 'mine',
      '7db1a8b2': 'cart',
      a52bef0c: 'Find',
      d04fcbda: 'Classification',
      c9e6df49: 'Red dot'
    }
  });

  return (
    <DemoPage>

      <DemoCard
        title={translated.ce5c5446}
      >
        <Tabbar
          onSwitch={(child, idx) => {
            alert(idx);
          }}
          style={{ marginBottom: 10 }}
        >
          <TabbarItem tabTitle='首页' icon='home' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' icon='cart' />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </DemoCard>

      <DemoCard
        title={translated.c38a08ef}
      >
        <Tabbar visible={2}>
          <TabbarItem tabTitle='首页' icon='home' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' icon='cart' />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </DemoCard>

      <DemoCard
        title={translated.b840c88f}
      >
        <Tabbar>
          <TabbarItem tabTitle='首页' icon='home' num='11' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' icon='cart' num='110' />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </DemoCard>

      <DemoCard
        title={translated.c9e6df49}
      >
        <Tabbar>
          <TabbarItem tabTitle='首页' icon='home' dot />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' icon='cart' dot />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </DemoCard>

      <DemoCard
        title={translated.a74a1fd4}
      >
        <Tabbar
          unactiveColor='#7d7e80'
          activeColor='#1989fa'
        >
          <TabbarItem tabTitle='首页' icon='home' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' icon='cart' />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </DemoCard>

      <DemoCard
        title={translated['8dab2f66']}
      >
        <Tabbar
          unactiveColor='#7d7e80'
          activeColor='#1989fa'
        >
          <TabbarItem tabTitle='首页' icon='home' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
        </Tabbar>
      </DemoCard>

      {/* <DemoCard
        title={translated.cfbdc781}

      >
        <Tabbar safeAreaInsetBottom>
          <TabbarItem tabTitle='首页' onhref={() => {}} icon='home' />
          <TabbarItem tabTitle='分类' icon='category' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='购物车' onhref={() => {
            alert('nihao');
          }} icon='cart'
          />
          <TabbarItem tabTitle='我的' onhref={() => {}} icon='my' />
        </Tabbar>
      </DemoCard> */}

    </DemoPage>
  );
};

export default tabbarDemo;
