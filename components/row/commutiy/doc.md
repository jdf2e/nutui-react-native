# Layout 布局

### 介绍

用于快速进行布局

### 安装

```tsx
import { Row, Col } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础布局

:::demo

```tsx
import React from "react";
import { Row, Col } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
        <Row>
            <Col span="24">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:24</Text>
                </View>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                 <View style={styles.items}>
                   <Text style={styles.itemsTx}>span:12</Text>
                 </View>
            </Col>
            <Col span="12">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:12</Text>
                </View>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:8</Text>
                </View>
            </Col>
            <Col span="8">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:8</Text>
                </View>
            </Col>
            <Col span="8">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:8</Text>
                </View>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
    </>
  )
};

const styles = StyleSheet.create({
  items: {
      backgroundColor: '#f98883',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsPink: {
      backgroundColor: '#fcc7c5',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsTx: {
      color: '#fff',
      fontSize: 16
  },

  itemsTxTop: {
      marginBottom: 10,
      marginLeft: 20,
      marginTop: 20
  }
});

export default App;
```

:::

### 分栏间隔

:::demo

```tsx
import React from "react";
import { Layout, Row, Col } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <Row gutter="10">
        <Col span="8">
            <View style={styles.items}>
                <Text style={styles.itemsTx}>span:8</Text>
            </View>
        </Col>
        <Col span="8">
            <View style={styles.itemsPink}>
                <Text style={styles.itemsTx}>span:8</Text>
            </View>
        </Col>
        <Col span="8">
            <View style={styles.items}>
                <Text style={styles.itemsTx}>span:8</Text>
            </View>
        </Col>
    </Row>
  )
};

const styles = StyleSheet.create({
  items: {
      backgroundColor: '#f98883',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsPink: {
      backgroundColor: '#fcc7c5',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsTx: {
      color: '#fff',
      fontSize: 16
  },

  itemsTxTop: {
      marginBottom: 10,
      marginLeft: 20,
      marginTop: 20
  }
});

export default App;
```

:::

### Flex 布局

:::demo

```tsx
import React from "react";
import { Layout, Row, Col } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
        <Row type="flex" wrap="nowrap">
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
        <Row ttype="flex" justify="center">
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
        <Row ttype="flex" justify="end">
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
        <Row ttype="flex" justify="space-between">
           <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
        <Row ttype="flex" justify="space-around">
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.itemsPink}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
            <Col span="6">
                <View style={styles.items}>
                    <Text style={styles.itemsTx}>span:6</Text>
                </View>
            </Col>
        </Row>
    </>
  )
}

const styles = StyleSheet.create({
  items: {
      backgroundColor: '#f98883',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsPink: {
      backgroundColor: '#fcc7c5',
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
  },
  itemsTx: {
      color: '#fff',
      fontSize: 16
  },

  itemsTxTop: {
      marginBottom: 10,
      marginLeft: 20,
      marginTop: 20
  }
});

export default App;
```

:::

## API

### row

| 字段    | 说明                                                                    | 类型           | 默认值     |
| ------- | ----------------------------------------------------------------------- | -------------- | ---------- |
| type    | 布局方式，可选值为 flex                                                 | String         | -          |
| gutter  | 列元素之间的间距（单位为 px）                                           | String、Number | 0          |
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String         | start      |
| align   | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end                | String         | flex-start |
| wrap    | Flex 是否换行，可选值为 nowrap wrap reverse                             | String         | nowrap     |

### col

| 字段   | 说明                                                            | 类型           | 默认值 |
| ------ | --------------------------------------------------------------- | -------------- | ------ |
| span   | 列元素宽度（共分为 24 份，例如设置一行 3 个，那么 span 值为 8） | String、Number | 24     |
| offset | 列元素偏移距离                                                  | String、Number | 0      |

### row events

| 字段    | 说明       | 回调参数                       |
| ------- | ---------- | ------------------------------ | ----- |
| onClick | 点击时触发 | event: MouseEvent, type: 'row' | 'col' |

### col events

| 字段    | 说明       | 回调参数                       |
| ------- | ---------- | ------------------------------ | ----- |
| onClick | 点击时触发 | event: MouseEvent, type: 'row' | 'col' |
