import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import Icon from './index';
import pt from '../utils/pt';

export default class extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f7f8fa', width: pt(750) }}>
        <View
          style={{
            width: pt(750),
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text>基础用法</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name='dongdong' />
            <Icon name='JD' />
            <Icon
              size='40'
              name='https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text>图标颜色</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name='dongdong' color='#fa2c19' style={{ marginRight: 10 }} />
            <Icon name='dongdong' color='#64b578' style={{ marginRight: 10 }} />
            <Icon name='JD' color='#fa2c19' />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text>图标大小</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name='dongdong' />
            <Icon name='dongdong' size={24} />
            <Icon name='dongdong' size={16} />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text>粗体 Icon</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Icon name='order' />
            <Icon name='refresh' />
            <Icon name='add' />
            <Icon name='JD' />
            <Icon name='eye' />
            <Icon name='dshop' />
            <Icon name='my2' />
            <Icon name='star' />
            <Icon name='del2' />
            <Icon name='more-x' />
            <Icon name='comment' />
            <Icon name='microphone' />
            <Icon name='people' />
            <Icon name='service' />
            <Icon name='cart2' />
            <Icon name='location2' />
            <Icon name='marshalling' />
            <Icon name='fabulous' />
            <Icon name='s-follow' />
            <Icon name='shop' />
            <Icon name='jdl' />
          </View>
        </View>
      </View>
    );
  }
}
