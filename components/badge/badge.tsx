import React, { FunctionComponent, ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';

import Icon from '../icon';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import badgeStyle from './styles';
import { useConfig } from '../configprovider';

export interface BadgeProps {
  value: any;
  dot: boolean;
  max: number;
  top: number;
  right: number;
  zIndex: number;
  color: string;
  icon: any;
  style: StyleProp<ViewStyle> | undefined;
  children?: ReactNode;
}

export type BadgeType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

const defaultProps = {
  value: '',
  dot: false,
  max: 10000,
  top: 0,
  right: 0,
  zIndex: 0,
  color: '',
  icon: '',
} as BadgeProps;

export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const { theme } = useConfig();
  const styles = badgeStyle(theme);
  const { style, children, dot, top, right, zIndex, color, icon } = {
    ...defaultProps,
    ...props,
  };
  function content() {
    if (dot) return undefined;
    const { value } = props;
    const { max } = props;
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value;
    }
    return value;
  }
  const getStyle = () => {
    const style: StyleProp<ViewStyle> = {};
    if (top) {
      style.top = top;
    }

    if (right) {
      style.right = right;
    }
    style.zIndex = zIndex;
    if (color) {
      style.backgroundColor = color;
    }
    return style;
  };

  let wrapStyle = [styles.container, fConStyle(toObj(style || {}))];
  let dotStyle = [styles.sup, dot ? styles.isDot : {}, getStyle()];
  console.log('dotStyle', content(), dot,  dotStyle)
  return (
    <View style={wrapStyle}>
      {icon !== '' ? (
        <View
          style={styles.slotIcons}
        >
          <Icon name={icon} color="#ffffff" size={12} />
        </View>
      ) : null}
      <View>{children}</View>

      <View style={dotStyle}>
        <Text style={styles.text}>{content() || ''}</Text>
      </View>
    </View>
  );
};

Badge.defaultProps = defaultProps;
Badge.displayName = 'NutBadge';
