import React from 'react';

import Avatar from '../avatar';
import Badge from '../badge';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

const BadgeDemo = () => {
  return (
    <DemoPage>
      <DemoCard title="默认用法">
        <Badge value={8}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value={76}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value="NEW">
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge dot>
          <Avatar icon="my" shape="square" />
        </Badge>
      </DemoCard>
      <DemoCard title="最大值">
        <Badge value={200} max={9}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value={200} max={20}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value={200} max={99}>
          <Avatar icon="my" shape="square" />
        </Badge>
      </DemoCard>
      <DemoCard title="自定义徽标内容">
        <Badge icon="checklist">
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge icon="link">
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge icon="download">
          <Avatar icon="my" shape="square" />
        </Badge>
      </DemoCard>
      <DemoCard title="自定义位置">
        <Badge value={8} top={5} right={5}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value={76} top={10} right={10}>
          <Avatar icon="my" shape="square" />
        </Badge>
        <Badge value="NEW">
          <Avatar icon="my" shape="square" />
        </Badge>
      </DemoCard>
    </DemoPage>
  );
};

export default BadgeDemo;
