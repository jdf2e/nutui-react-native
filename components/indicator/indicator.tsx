import React, { FunctionComponent, ReactNode } from 'react';

import { View, Text, StyleProp, ViewStyle } from 'react-native';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import { useConfig } from '../configprovider';
import indicatorStyles from './styles';

export interface IndicatorProps {
  size: number;
  current: number;
  block: boolean;
  align: 'left' | 'right' | 'center';
  fillZero: boolean;
  vertical: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

const defaultProps = {
  size: 3,
  current: 1,
  block: false,
  align: 'center',
  fillZero: true,
  vertical: false,
} as IndicatorProps;

export const Indicator: FunctionComponent<Partial<IndicatorProps>> = (
  props
) => {
  const { size, current, block, align, fillZero, vertical, style } = {
    ...defaultProps,
    ...props,
  };
  const { theme } = useConfig();
  const styles = indicatorStyles(theme);

  const renderEles = () => {
    const childs: ReactNode[] = [];
    for (let item = 1; item <= size; item++) {
      const numberStyle = [
        styles.number,
        item === 1 ? styles.firstNumber : {},
        item === size ? styles.lastNumber : {},
      ];

      const dotStyle = [
        styles.dot,
        item === 1 ? styles.firstDot : {},
        item === size ? styles.lastDot : {},
        vertical ? styles.verticalDot : {},
        vertical && item === 1 ? styles.firstVerticalDot : {},
        vertical && item === size ? styles.lastVerticalDot : {},
      ];

      childs.push(
        item === current ? (
          <View key={item} style={numberStyle}>
            <Text style={styles.numberTxt}>
              {fillZero && item < 10 ? `0${item}` : item}
            </Text>
            <View style={styles.whileLine} />
          </View>
        ) : (
          <View key={item} style={dotStyle} />
        )
      );
    }
    return childs;
  };

  const wrapStyle = [
    fConStyle(toObj(style || {})),
    vertical ? styles.vertical : styles.row,
    block ? styles.block : {},
    block ? styles[`align${align}`] : {},
  ];
  return <View style={wrapStyle}>{renderEles()}</View>;
};

Indicator.defaultProps = defaultProps;
Indicator.displayName = 'NutIndicator';
