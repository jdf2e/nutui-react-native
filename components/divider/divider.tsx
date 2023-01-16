import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleProp
} from 'react-native';

import toObj from '../utils/style-to-obj';
import fConStyleNoBorder from '../utils/filter-container-style-without-border';
import fBorStyle from '../utils/filter-border-style';
import fTexStyle from '../utils/filter-text-style';

import { useConfig } from '../configprovider';
import dividerStyles from './styles';

export type ContentPositionType = 'left' | 'center' | 'right';

export type DirectionType = 'horizontal' | 'vertical';

export interface DividerProps {
  contentPosition: ContentPositionType;
  dashed: boolean;
  hairline: boolean;
  styles?: StyleProp<ViewStyle> | undefined;
  direction?: DirectionType;
}

const defaultProps = {
  contentPosition: 'center', // 内容位置，可选值为left right
  dashed: false, // 是否使用虚线
  hairline: true, // 是否使用 0.5px 线, RN 0.5有兼容性问题
  direction: 'horizontal' // 水平还是垂直类型
} as DividerProps;

const renderChilden = (children, styles, contentPosition, dashed, hairline, myStyles) => {
  const Component = typeof children === 'string'
    ? <Text key={2} style={[myStyles.text, fTexStyle(toObj(styles))]}>{children}</Text>
    : children;

  return [
    <View
      key={1}
      style={[myStyles[`left${contentPosition}`],
        myStyles[`lineStyle${dashed}`],
        myStyles[`lineWidth${hairline}`],
        fBorStyle(toObj(styles))]}
    />,
    Component,
    <View
      key={3}
      style={[myStyles[`right${contentPosition}`],
        myStyles[`lineStyle${dashed}`],
        myStyles[`lineWidth${hairline}`],
        fBorStyle(toObj(styles))]}
    />
  ];
};

export const Divider: FunctionComponent<
Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    contentPosition,
    dashed,
    hairline,
    direction,
    styles
  } = {
    ...defaultProps,
    ...props
  };

  const { theme } = useConfig();

  const myStyles = dividerStyles(theme);

  let wrapStyle: any;

  if (direction === 'vertical') {
    wrapStyle = [
      myStyles.verticalStyle,
      toObj(styles || {})
    ];
  } else {
    wrapStyle = [
      myStyles[`row${!!children}Style`],
      myStyles[`dashed${dashed}${!!children}`] || {},
      myStyles[`hairline${dashed}${hairline}${!!children}`] || {},
      !children ? toObj(styles || {}) : {} // 没有子元素或将props 样式传递
    ];
  }

  if (!children) {
    return (
      <View style={wrapStyle} />
    );
  }

  return (
    <View
      style={[wrapStyle, fConStyleNoBorder(toObj(styles || {}))]}
    >
      {
        renderChilden(children, styles, contentPosition, dashed, hairline, myStyles)
      }
    </View>
  );
};

Divider.displayName = 'NutDivider';
