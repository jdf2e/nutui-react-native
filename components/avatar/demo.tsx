import React from 'react';

import Avatar from './';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

const AvatarDemo = () => {
  return (
    <DemoPage>
      <DemoCard title="支持三种尺寸：small、normal、large">
        <Avatar
          style={{
            marginRight: 10,
          }}
          size="large"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
        <Avatar
          style={{
            marginRight: 10,
          }}
          size="normal"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
        <Avatar
          size="small"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </DemoCard>
      <DemoCard title="支持两种形状：square、round">
        <Avatar
          style={{
            marginRight: 10,
          }}
          icon="my"
          shape="square"
        />
        <Avatar icon="my" shape="round" />
      </DemoCard>
      <DemoCard title="支持三种类型：图片、Icon 以及字符">
        <Avatar
          style={{
            marginRight: 10,
          }}
          source={{
            uri: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
          }}
        />
        <Avatar
          icon="my"
          style={{
            marginRight: 10,
          }}
        />
        <Avatar>N</Avatar>
      </DemoCard>
    </DemoPage>
  );
};
export default AvatarDemo;
