import React from 'react';
import { View } from 'react-native';

import { NavBar } from './navbar';
import { Toast } from '../toast/toast';
import { Icon } from '../icon/icon';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';

const NavBarDemo = () => {
  return (
    <DemoPage>
      <DemoCard title="基础用法" flexDirection='column' backgroundColor="rgba(0, 0, 0, 0)" padding={0}>
        <NavBar
          title="订单详情"
          border
          leftShow
          leftText="返回"
          onClickTitle={(e) => {
            Toast.text('点击标题');
          }}
          onClickBack={(e) => {
            Toast.text('点击返回');
          }}
          onClickRight={(e) => {
            Toast.text('点击分享');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
        <NavBar
          title="浏览记录"
          desc="清空"
          border
          leftShow
          onClickTitle={(e) => {
            Toast.text('点击标题');
          }}
          onClickBack={(e) => {
            Toast.text('点击返回');
          }}
          onClickRight={(e) => {
            Toast.text('点击清空');
          }}
        />
        <NavBar
          title="购物车"
          desc="编辑"
          border
          leftShow
          titIcon="https://img13.360buyimg.com/imagetools/jfs/t1/170651/33/33394/2798/63ad67fcFb1132817/9410e270ba821752.png"
          onClickTitle={(e) => {
            Toast.text('点击标题');
          }}
          onClickBack={(e) => {
            Toast.text('点击返回');
          }}
          onClickRight={(e) => {
            Toast.text('点击编辑');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
        <NavBar
          title="订单详情"
          border
          leftShow
          leftText="返回"
          onClickTitle={(e) => {
            Toast.text('点击标题');
          }}
          onClickBack={(e) => {
            Toast.text('点击返回');
          }}
          onClickRight={(e) => {
            Toast.text('点击分享');
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img10.360buyimg.com/imagetools/jfs/t1/74863/10/19950/1636/63ad6959F35d79b8e/39dfcb7f6833f666.png"
              size="16"
            />
          </View>
        </NavBar>
      </DemoCard>
      <DemoCard
        title="自定义导航栏中间内容"
        backgroundColor="rgba(0, 0, 0, 0)"
        padding={0}
      >
        <NavBar
          desc="编辑"
          border
          leftShow
          titIcon="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
          onClickTitle={(e) => {
            Toast.text('点击标题');
          }}
          onClickBack={(e) => {
            Toast.text('点击返回');
          }}
          onClickRight={(e) => {
            Toast.text('点击右侧编辑');
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
            <Icon
              name="https://img14.360buyimg.com/imagetools/jfs/t1/189314/6/30886/2384/63872bdfEbfa7b6c5/a6d8b9d2cdab31be.png"
              size="16"
            />
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
          <View style={{ marginRight: 10 }}>
            <Icon
              name="https://img12.360buyimg.com/imagetools/jfs/t1/180774/34/30834/724/63872cdfE56cfe8da/74fa5644b09cc73b.png"
              size="16"
            />
          </View>
        </NavBar>
      </DemoCard>
    </DemoPage>
  );
};

export default NavBarDemo;
