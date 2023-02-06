# Layout 佈局

### 介紹

用於快速進行佈局

### 安裝

```javascript
import { Row, Col } from 'nutui-rn';
```

## 代碼演示

### 基礎佈局

```SnackPlayer name=Layout
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
export default App;

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
```

### 分欄間隔

```SnackPlayer name=Layout
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
export default App;

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
```

### Flex 佈局

```SnackPlayer name=Layout
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
export default App;

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
```

## API

### row

| 字段    | 說明                                                                    | 類型           | 默認值     |
| ------- | ----------------------------------------------------------------------- | -------------- | ---------- |
| type    | 佈局方式，可選值為 flex                                                 | String         | -          |
| gutter  | 列元素之間的間距（單位為 px）                                           | String、Number | 0          |
| justify | Flex 主軸對齊方式，可選值為 start end center space-around space-between | String         | start      |
| align   | Flex 交叉軸對齊方式，可選值為 flex-start center flex-end                | String         | flex-start |
| wrap    | Flex 是否換行，可選值為 nowrap wrap reverse                             | String         | nowrap     |

### col

| 字段   | 說明                                                            | 類型           | 默認值 |
| ------ | --------------------------------------------------------------- | -------------- | ------ |
| span   | 列元素寬度（共分為 24 份，例如設置一行 3 個，那麼 span 值為 8） | String、Number | 24     |
| offset | 列元素偏移距離                                                  | String、Number | 0      |

### row events

| 字段            | 說明       | 回調參數                       |
| --------------- | ---------- | ------------------------------ | ----- |
| onClick | 點擊時觸發 | event: MouseEvent, type: 'row' | 'col' |

### col events

| 字段            | 說明       | 回調參數                       |
| --------------- | ---------- | ------------------------------ | ----- |
| onClick | 點擊時觸發 | event: MouseEvent, type: 'row' | 'col' |
