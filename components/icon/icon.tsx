import React from 'react';
import {
  Image,
  Animated,
  Easing,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import getImageUrl from '../utils/img';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';

export interface IconProps {
  name: string;
  size: string | number;
  color: string;
  onPress: (e: any) => void;
  // onClick: (e: MouseEvent) => void
  // fontClassName: string;
  // className: string
  animationName: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const defaultProps = {
  name: '', // 图标名称或图片链接
  size: '', // 图标大小，如 20px 2em 2rem
  color: '#979797', // 图标颜色
  onPress: (e: any) => {},
  style: {},
  animationName: '',
} as IconProps;

function pxCheck(value: string | number): number {
  let getValue: any = value;
  // 表示字符串类型
  if (Number.isNaN(Number(value)) || typeof value === 'string') {
    getValue = parseInt(String(value));
  }
  //  如果没有值就是20
  if (!getValue || getValue == '') {
    getValue = 20;
  }
  // 返回
  return getValue;
}

export function Icon<T>(props: Partial<IconProps> & T) {
  const {
    name,
    size,
    color,
    children,
    animationName,
    style,
    onPress,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  // 判断图片是否是远程地址
  const isImage = name ? name.indexOf('/') !== -1 : false;

  let deg = new Animated.Value(0);
  // 点击的回调函数
  const handleClick = (e: any) => {
    if (onPress) {
      onPress(e);
    }
  };

  // 旋转动画
  if (
    animationName.indexOf('am-rotate') != -1 ||
    name == 'loading' ||
    name == 'loading1'
  ) {
    Animated.loop(
      Animated.timing(deg, {
        toValue: 360,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }
  if (isImage) {
    return (
      // <TouchableHighlight
      //     onPress={handleClick}
      // >
      <Image
        style={{
          width: pxCheck(size),
          height: pxCheck(size),
          ...fConStyle(toObj(style || {})),
        }}
        source={{ uri: name }}
      />
      // </TouchableHighlight>
    );
  }

  return (
    <Animated.View
      // className={
      //   isImage
      //     ? `${b('img')} ${className || ''} `
      //     : `${fontClassName} ${b(null)} ${classPrefix}-${name} ${
      //         className || ''
      //       }`
      // }
      style={[
        {
          transform: [
            {
              rotate: deg.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          width: pxCheck(size),
          height: pxCheck(size),
        },
        fConStyle(toObj(style || {})),
      ]}
    >
      {/* <View /> */}

      <Image
        source={{ uri: getImageUrl(`${name}`) }}
        style={{
          width: pxCheck(size),
          height: pxCheck(size),
          tintColor: color,
        }}
        resizeMode={'contain'}
      />
    </Animated.View>
  );
}

Icon.defaultProps = defaultProps;
Icon.displayName = 'NutIcon';

const styles = StyleSheet.create({});
