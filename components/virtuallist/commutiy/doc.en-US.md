#  VirtualList

### Intro

In normal list show and pull-up loading, we usually use the InfiniteLoading component provided by NutUI. If we load a large amount of data, serious performance problems may occur, resulting in the view unable to respond to the operation for a period of time. At this time, we use the virtual list component list, which can ensure that only the current visual area is rendered, Other parts are rendered after the user scrolls to the visible area. Ensure page flow and improve performance.

### Install
```javascript
import { Virtuallist } from '@nutui/nutui-react-native';
```
## Demo


### 1、 vertical height、Vertical unequal height、horizontal width、Horizontal unequal width

:::demo
``` tsx
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import deviceWidth from '../utils/deviceWidth';
import Radio from '../radio';
import Virtuallist from '.';
import { useTranslate } from '../utils';

const ListDemo = () => {
    const [translated] = useTranslate<any>({
      'zh-CN': {
        text1: '垂直等高',
        text2: '垂直不等高',
        text3: '水平等宽',
        text4: '水平不等宽',
      },
      'zh-TW': {
        text1: '縱向等高',
        text2: '縱向不等高',
        text3: '水平等寬',
        text4: '水平不等寬',
      },
      'en-US': {
        text1: 'Vertical equal height',
        text2: 'Vertical unequal height',
        text3: 'Horizontal equal width',
        text4: 'Horizontal unequal width',
      },
    })

    const [data, setData] = useState<any>([])
    const [mHorizontal, setMHorizontal] = useState<any>(false)
    const [equal, setEqual] = useState<any>(true)

    useEffect(() => {
      getData();
    }, [])

    const getData =()=>{
      const datas = [];
        for (let i = 0; i < 150; i++) {
            datas.push(
                {
                    index: i
                }
            );
        }
        setData(datas)
    }

   const renderItem=(item:any) => {
        if (mHorizontal) {
            if (equal) {
                return (
                    <View style={styles.equalH}>
                        <Text>list{item.index}</Text>
                    </View>);
            } else {
                if (item.index % 2 === 0) {
                    return (
                        <View style={styles.equalH}>
                            <Text>list{item.index}</Text>
                        </View>);
                } else {
                    return (
                        <View style={[styles.equalH, { height: 135 }]}>
                            <Text>list{item.index}</Text>
                        </View>);
                }
            }
        } else {
            if (equal) {
                return (
                    <View style={styles.equalV}>
                        <Text>list{item.index}</Text>
                    </View>);
            } else {
                if (item.index % 2 === 0) {
                    return (
                        <View style={styles.equalV}>
                            <Text>list{item.index}</Text>
                        </View>);
                } else {
                    return (
                        <View style={[styles.equalV, { height: 135 }]}>
                            <Text>list{item.index}</Text>
                        </View>);
                }
            }
        }
    }

   const RadioChange=(value : any) => {
        let mHor = false;
        let mEqual = true;
        switch (value) {
            case 1:
                mHor = false;
                mEqual = true;
                break;
            case 2:
                mHor = false;
                mEqual = false;
                break;
            case 3:
                mHor = true;
                mEqual = true;
                break;
            case 4:
                mHor = true;
                mEqual = false;
                break;
            default:
                mHor = false;
                mEqual = true;
                break;
        }
        setMHorizontal(mHor);
        setEqual(mEqual);
    }

        return (
            <View style={{ width: deviceWidth, paddingTop: 20, flex: 1 }}>
                <View style={styles.items} >
                    <Radio.RadioGroup value={1} direction='horizontal'
                        onChange={(value) => {
                            RadioChange(value);
                        }}
                    >
                        <Radio value={1}>{translated.text1}</Radio>
                        <Radio value={2}>{translated.text2}</Radio>
                        <Radio value={3}>{translated.text3}</Radio>
                        <Radio value={4}>{translated.text4}</Radio>
                    </Radio.RadioGroup>
                </View>

                <View style={{ width: deviceWidth, flex: 1, backgroundColor: '#f5f5f5', paddingTop: 10 }} >
                    <Virtuallist
                        sourceData={data}
                        ItemRender={renderItem}
                        horizontal={mHorizontal}
                    />
                </View>

            </View>
        );
}

const styles = StyleSheet.create({
    items: {
        width: deviceWidth - 40,
        paddingVertical: 10,
        paddingHorizontal:20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center'
    },
    equalV: {
        width: deviceWidth - 40,
        marginLeft: 20,
        backgroundColor: '#fff',
        height: 45,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 6,
        paddingLeft: 10
    },
    equalH: {
        width: 50,
        height: 45,
        marginLeft: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 6,
        paddingLeft: 10
    }
});

export default ListDemo
```
:::
## API

### Props

| 参数           | 说明                               | 类型       | 默认值                                   |
|---------------|----------------------------------|----------|---------------------------------------|
| sourceData    | source data                      | Array    | -                                     |
| containerSize | container height                      | Number   | Get the element offsetWidth or offsetHeight, which is given by CSS |
| ItemRender    | virtual function rendered by the parent of the list               | React.FC | -                                     |
| horizontal    |  horizontal or vertical                    | Boolean  | false                                 |
## Events
| 方法名            | 说明       | 参数            | 返回值     |
|----------------|----------| --------------- | ---------- |
| onScroll  | scroll event |        -        |      -    |



