# Navbar 头部导航

### 介绍

提供导航功能。

### 安装

```tsx
import { NavBar } from '@nutui/nutui-react-native';
```

### 代码示例

### 基本用法

:::demo

```tsx
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
```

:::

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
```

:::

:::demo

```tsx
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
```

:::

:::demo

```tsx
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
```

:::

### 自定义导航栏中间内容

:::demo

```tsx
import  React from "react";
import { View } from 'react-native';
import { NavBar, Icon, Toast } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
```

:::

### Prop

| 字段                     | 说明                                               | 类型                | 默认值 |
| ------------------------ | -------------------------------------------------- | ------------------- | ------ |
| title                    | 标题名称                                           | String              | -      |
| desc                     | 右侧描述                                           | String              | -      |
| leftShow                 | 是否展示左侧箭头                                   | Boolean             | true   |
| icon`v1.2.1(废弃)`       | 左侧 [图标名称](#/icon) 或图片链接                 | String              | -      |
| titIcon                  | 标题带 icon                                        | String              | -      |
| leftText`v1.2.1`         | 左侧文案                                           | String              | -      |
| fixed`v1.2.1`            | 是否固定                                           | Boolean             | false  |
| safeAreaInsetTop`v1.2.1` | 是否适配安全区                                     | Boolean             | false  |
| border`v1.2.1`           | 是否显示底部边框                                   | Boolean             | false  |
| placeholder`v1.2.1`      | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | Boolean             | false  |
| zIndex`v1.2.1`           | 导航栏层级                                         | Number、String      | 10     |
| style`v1.2.1`            | 容器样式                                           | React.CSSProperties | {}     |

### Event

| 名称                       | 说明                   | 回调参数    |
| -------------------------- | ---------------------- | ----------- |
| onClickTitle               | 点击标题事件           | event:Event |
| onClickClear`v1.2.1(废弃)` | 点击右侧文案事件       | event:Event |
| onClickRight`v1.2.1`       | 点击右侧事件           | event:Event |
| onClickBack`v1.2.1`        | 点击返回事件           | event:Event |
| onClickIcon`v1.2.1`        | 点击标题右侧 icon 事件 | event:Event |
