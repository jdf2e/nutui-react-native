import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Image from '../image';
import Icon from '../icon';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lazyload: '图片懒加载'
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazyload: 'Lazyload'
    }
  });

  return (
    <DemoPage>

      <DemoCard
        title={translated.basic}
      >
        <Image
          source={{
            uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
          }}
          width={90}
          height={90}
        />
      </DemoCard>

      <DemoCard
        // title='填充模式'
        title={translated.fill}
      >

        <View
          style={{
            width: 350,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: '#fff'
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              resizeMode='contain'
              width={90}
              height={90}
            />
            <Text>contain</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              resizeMode='cover'
              width={90}
              height={90}
            />
            <Text>cover</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              resizeMode='stretch'
              width={90}
              height={90}
            />
            <Text>stretch</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              resizeMode='repeat'
              width={90}
              height={90}
            />
            <Text>repeat</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              resizeMode='center'
              width={90}
              height={90}
            />
            <Text>center</Text>
          </View>
        </View>
      </DemoCard>

      <DemoCard
        title={translated.circle}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: '#fff'
          }}
        >

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              width={90}
              height={90}
              resizeMode='contain'
              round
            />
            <Text>contain</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              width={90}
              height={90}
              round
            />
            <Text>cover</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10
            }}
          >

            <Image
              source={{ uri: 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg' }}
              width={90}
              height={90}
              radius={10}
            />
            <Text>cover</Text>
          </View>
        </View>
      </DemoCard>

      <DemoCard
        // title='加载中图片'
        title={translated.loading}
      >
        <Image
          width={90}
          height={90}
          showLoading
          slotLoding={
            <>
              <Icon name='loading' />
            </>
          }
        />
      </DemoCard>

      <DemoCard
        // title='加载失败'
        title={translated.error}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10
          }}
        >

          <Image
            width={90}
            height={90}
            source={{ uri: 'https://x' }}
            showError
            style={{
              marginRight: 10
            }}
          >
            <Icon name='circle-close' />
          </Image>

          <Image
            width={90}
            height={90}
            source={{ uri: 'https://x' }}
            showError
          />
        </View>
      </DemoCard>

    </DemoPage>
  );
};

export default ImageDemo;
