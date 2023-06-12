# Layout layout

### introduce

for quick layout

### Install

```tsx
import { Row, Col } from '@nutui/nutui-react-native';
```

## code demo

### Basic layout

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

### column interval

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

### Flex layout

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

| Field   | Description                                                                             | Type           | Default Value |
| ------- | --------------------------------------------------------------------------------------- | -------------- | ------------- |
| type    | Layout mode, optional value is flex                                                     | String         | -             |
| gutter  | The spacing between column elements (in px)                                             | String, Number | 0             |
| justify | Flex main axis alignment, optional value is start end center space-around space-between | String         | start         |
| align   | Flex cross-axis alignment, optional value is flex-start center flex-end                 | String         | flex-start    |
| wrap    | Whether Flex wraps, the optional value is nowrap wrap reverse                           | String         | nowrap        |

### col

| Field  | Description                                                                                               | Type           | Default Value |
| ------ | --------------------------------------------------------------------------------------------------------- | -------------- | ------------- |
| span   | Column element width (divided into 24 parts, for example, if a row is set to 3, then the span value is 8) | String, Number | 24            |
| offset | Column element offset distance                                                                            | String, Number | 0             |

### row events

| Fields  | Description        | Callback Parameters            |
| ------- | ------------------ | ------------------------------ | ----- |
| onClick | Fired when clicked | event: MouseEvent, type: 'row' | 'col' |

### col events

| Fields  | Description        | Callback Parameters            |
| ------- | ------------------ | ------------------------------ | ----- |
| onClick | Fired when clicked | event: MouseEvent, type: 'row' | 'col' |
