import React from 'react';

import Icon from './index';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';

const IconDemo = () => {
  return (
    <DemoPage>
      <DemoCard title="基础用法">
        <Icon name="dongdong" />
        <Icon name="JD" />
        <Icon
          size="40"
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </DemoCard>
      <DemoCard title="图标颜色">
        <Icon name="dongdong" color="#fa2c19" style={{ marginRight: 10 }} />
        <Icon name="dongdong" color="#64b578" style={{ marginRight: 10 }} />
        <Icon name="JD" color="#fa2c19" />
      </DemoCard>
      <DemoCard title="图标大小">
        <Icon name="dongdong" />
        <Icon name="dongdong" size={24} />
        <Icon name="dongdong" size={16} />
      </DemoCard>
      <DemoCard title="粗体 Icon">
        <Icon name="order" />
        <Icon name="refresh" />
        <Icon name="add" />
        <Icon name="JD" />
        <Icon name="eye" />
        <Icon name="dshop" />
        <Icon name="my2" />
        <Icon name="star" />
        <Icon name="del2" />
        <Icon name="more-x" />
        <Icon name="comment" />
        <Icon name="microphone" />
        <Icon name="people" />
        <Icon name="service" />
        <Icon name="cart2" />
        <Icon name="location2" />
        <Icon name="marshalling" />
        <Icon name="fabulous" />
        <Icon name="s-follow" />
        <Icon name="shop" />
        <Icon name="jdl" />
      </DemoCard>
    </DemoPage>
  );
};

export default IconDemo;
