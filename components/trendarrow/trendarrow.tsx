import React, {
  FunctionComponent,
  useRef
} from 'react';

import {
  View,
  Text,
  StyleProp,
  ViewStyle
} from 'react-native';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTexStyle from '../utils/filter-text-style';
import Icon from '../icon';

import { useConfig } from '../configprovider';
import trendArrowStyles from './styles';

export interface TrendArrowProps {
  rate: number;
  digits: number;
  showSign: boolean;
  showZero: boolean;
  arrowLeft: boolean;
  syncTextColor: boolean;
  textColor: string;
  riseColor: string;
  dropColor: string;
  iconSize: string;
  upIconName: string;
  downIconName: string;
  style: StyleProp<ViewStyle> | undefined;
}

export const TrendArrow: FunctionComponent<
Partial<TrendArrowProps>
> = ({
  rate = 0,
  digits = 2,
  showSign = false,
  showZero = false,
  arrowLeft = false,
  syncTextColor = true,
  textColor = '#333',
  riseColor = '#fa2c19',
  dropColor = '#64b578',
  iconSize = 12,
  upIconName = 'triangle-up',
  downIconName = 'triangle-down',
  children,
  style
}) => {
  const rateTrend = useRef(rate > 0);

  const { theme } = useConfig();
  const styles = trendArrowStyles(theme);

  const myFixed = (num: any, digit = 2) => {
    if (Object.is(parseFloat(num), NaN)) {
      return console.log(`传入的值：${num}不是一个数字`);
    }
    num = parseFloat(num);
    const numPow = Math.pow(10, digit);

    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit);
  };

  const calcStyle = (() => {
    const arrowColor = rateTrend.current ? riseColor : dropColor;
    const textEquArrowColor = syncTextColor ? arrowColor : textColor;
    const style = {
      color: rate === 0 ? textColor : textEquArrowColor
    };

    return style;
  })();

  const calcRate = (() => {
    rateTrend.current = rate > 0;
    const absRate = Math.abs(rate);

    if (!showZero && rate === 0) {
      return '--';
    }
    const resultRate = `${
      showSign && rate !== 0 ? (rateTrend.current ? '+' : '-') : ''
    }${myFixed(Number(absRate), digits)}%`;

    return resultRate;
  })();

  const calcIconProps = (() => {
    const iconProps = {
      name: rateTrend.current ? upIconName : downIconName,
      color: rateTrend.current ? riseColor : dropColor,
      size: iconSize
    };

    return iconProps;
  })();

  const renderContent = (arrowLeft: boolean) => {
    const textStyle = [
      styles.text,
      !arrowLeft ? styles.iconAfter : styles.iconBefore,
      calcStyle,
      fTexStyle(toObj(style || {}))
    ];

    return (
      <Text
        style={textStyle}
      >
        {calcRate}
      </Text>
    );
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {}))
  ];

  return (
    <View
      style={wrapStyle}
    >
      {!arrowLeft && renderContent(!arrowLeft)}
      {children || (
        <>
          {Number(rate) !== 0 && (
            <Icon
              size={calcIconProps.size}
              name={calcIconProps.name}
              color={calcIconProps.color}
            />
          )}
        </>
      )}
      {arrowLeft && renderContent(!arrowLeft)}
    </View>
  );
};

TrendArrow.displayName = 'NutTrendArrow';
