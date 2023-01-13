/**
 * @component LinearGradient
 * @属性
 *     就是渐变开始的位置，x、y 范围是 0 - 1 ，
 *     start: { x: number, y: number }
 *     渐变结束的位置
 *     end: {x: number, y: number}
 *     每种渐变颜色的范围
 *     locations: []
 *     colors: []
 *     useAngle: 是否使用角度
 *     angle: 角度
 *     angleCenter： 角度中心
 *  
 * 
 * @example
       start: { x: 0.3, y: 0.4 } 渐变是从 左侧30%， 上部 40% 开始
       end: { x: 0.7, y: 0.8 } 渐变是从 左侧70%， 上部 80% 结束

       以下配置可实现从左到右渐变。
       start={{x: 0, y: 0}} 
       end={{x: 1, y: 0}}

       如果想指定每种渐变颜色的范围，比如红色占20%， 绿色占70%，黑色占10%，
       locations={[0.2,0.7,1.0]}
       colors={['red', 'green', 'black']}
       red 范围就是 0.0 - 0.2；
       green 范围就是 0.2 - 0.7；
       black 范围就是 0.7 - 1.0；
 * 
 */

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient
 * css 函数用于创建一个表示两种或多种颜色线性渐变的图片
 * @web
 * linear-gradient(135deg, rgba(250,44,25,1) 0%,rgba(250,63,25,1) 44.59259259%,rgba(250,89,25,1) 83.40740741%,rgba(250,100,25,1) 100%);
 * background: linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%);
 */

/**
 * 　当为90deg时，渐变线的方向相当于to right，从左指向右
 *  background: linear-gradient(to right, red , yellow);
 *  相等
 *  background: linear-gradient(90deg, red 0%, yellow 100%);
 *
 *
 */
import React, { FunctionComponent, ReactNode } from 'react';
import { View, Platform } from 'react-native';
import { isLinearGradient, getLinearParam } from '../utils/color';

import LinearGradient from 'react-native-linear-gradient';

// 位置坐标
type Pos = {
  x: number;
  y: number;
};
type ToBgCss = {
  background?: string;
};
export interface Props {
  style?: any; // 颜色类型
  type?: string;
  color?: string;
  start?: Pos;
  end?: Pos;
  locations: [...number[]]; // 颜色范围
  colors: (string | number)[]; // 颜色模版
  useAngle?: boolean;
  angle?: number;
  angleCenter?: Pos;
  children?: ReactNode;
  plain?: boolean;
}

export type PartialBgProps = Partial<Props>;
export type BgProps = Props;

const bgStyle = <T extends PartialBgProps>(props: T): ToBgCss => {
  // const bgStyle = (props:any) => {
  let { useAngle, angle, locations, colors } = props;
  let tAngle;
  let tColorAndLoc = [];

  if (useAngle && angle) {
    tAngle = `${angle}deg`;
  }

  if (locations && colors) {
    for (let i = 0; i < locations.length; i++) {
      let itemLocPer = locations[i] * 100;
      let itemColor = colors[i];
      tColorAndLoc.push(`${itemColor} ${itemLocPer}%`);
    }
    return {
      background: `linear-gradient(${tAngle}, ${tColorAndLoc.join(',')})`,
    };
  }
  return {};
};

const toLinear = (color: string) => {
  let result = getLinearParam(color);
  let locations = [];
  let colors = [];

  for (let i = 1; i < result.length; i++) {
    let item = result[i];
    colors.push(item[0]);
    locations.push(item[1]);
  }

  if (result.length) {
    let obj = {
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      useAngle: true,
      angle: +result[0],
      colors,
      locations,
    };
    return obj;
  }

  return {};
};

// 对LinearGradient Props 是严格模式
const Background: FunctionComponent<Props> = ({
  style = [],
  type = '',
  plain = false,
  color = '',
  ...restProps
}) => {
  let { children } = restProps;

  if (plain || color) {
    if (plain || !isLinearGradient(color)) {
      return (
        <View style={[{ backgroundColor: '#fff' }, style]}>{children}</View>
      );
    }
  }

  // if(color) {
  //     return (
  //         <View style={[{ backgroundColor: color }, style]}>
  //             {children}
  //         </View>
  //     )
  // }
  // web 兼容性问题
  if (Platform.OS === 'web') {
    return <View style={[bgStyle(restProps), style]}>{children}</View>;
  }
  // 处理一下默认和danger类型
  if (!color && (type === 'default' || type === 'danger')) {
    return <View style={style}>{children}</View>;
  }

  return (
    <LinearGradient
      style={[...style, { borderWidth: 0 }]}
      {...restProps}
      {...toLinear(color)}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
