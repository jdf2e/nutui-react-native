import React, { FunctionComponent } from 'react';

import {
  View,
  Text,
  StyleProp,
  ViewStyle
} from 'react-native';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTextStyle from '../utils/filter-text-style';
import pt from '../utils/pt';
import { useConfig } from '../configprovider';
import priceStyles from './styles';

// 按钮大小
export type PriceSize = 'large' | 'normal' | 'small';

export type PricePosition = 'before' | 'after';

export interface PriceProps {
  price: number | string; // 价格数量 默认0
  needSymbol: boolean; // 是否需要加上 symbol 符号 默认 TRUE
  symbol: string; // 符号类型 ¥
  decimalDigits: number; // 小数位位数 默认2
  thousands: boolean; // 是否按照千分号形式显示 默认 FALSE
  style: StyleProp<ViewStyle> | undefined;
  position: PricePosition;
  size: PriceSize; // 大小默认 large
}
const defaultProps = {
  price: 0,
  needSymbol: true,
  symbol: '&yen;',
  decimalDigits: 2,
  thousands: false,
  position: 'before',
  size: 'large'
} as PriceProps;

export const Price: FunctionComponent<Partial<PriceProps>> = (props) => {
  const {
    price,
    needSymbol,
    symbol,
    decimalDigits,
    thousands,
    style,
    position,
    size
  } = {
    ...defaultProps,
    ...props
  };
  const { theme } = useConfig();

  const styles = priceStyles(theme);
  const replaceSpecialChar = (symbol: string) => {
    let desSymbol = symbol;

    desSymbol = symbol.replace(/&quot;/g, '"');
    desSymbol = symbol.replace(/&amp;/g, '&');
    desSymbol = symbol.replace(/&lt;/g, '<');
    desSymbol = symbol.replace(/&gt;/g, '>');
    desSymbol = symbol.replace(/&nbsp;/g, ' ');
    desSymbol = symbol.replace(/&yen;/g, '￥');

    return desSymbol;
  };

  const checkPoint = (price: string | number) => {
    return String(price).indexOf('.') > 0;
  };
  const formatThousands = (num: any) => {
    if (Number(num) === 0) {
      num = 0;
    }
    if (checkPoint(num)) {
      num = Number(num).toFixed(decimalDigits);
      num =
        typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0];
    } else {
      num = num.toString();
    }
    if (thousands) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }

    return num;
  };
  const formatDecimal = (decimalNum: any) => {
    if (Number(decimalNum) === 0) {
      decimalNum = 0;
    }

    if (checkPoint(decimalNum)) {
      decimalNum = Number(decimalNum).toFixed(decimalDigits);
      decimalNum =
        typeof decimalNum.split('.') === 'string' ? 0 : decimalNum.split('.')[1];
    } else {
      decimalNum = 0;
    }
    const result = `0.${decimalNum}`;
    const resultFixed = Number(result).toFixed(decimalDigits);

    return String(resultFixed).substring(2, resultFixed.length);
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {}))
  ];

  const symbolStyle = [
    styles.defaultText,
    fTextStyle(toObj(style || {})),
    { marginTop: pt(2) },
    styles[`symbol${size}`]
  ];

  const bigStyle = [
    styles.defaultText,
    size === 'large' ? { marginTop: -pt(6) } : {},
    fTextStyle(toObj(style || {})),
    styles[`big${size}`]

  ];

  const pointStyle = [
    styles.defaultText,
    size === 'large' ? { marginTop: -pt(4) } : {},
    size === 'small' ? { marginTop: -pt(6) } : {},
    fTextStyle(toObj(style || {})),
    styles[`point${size}`]
  ];

  const smallStyle = [
    styles.defaultText,
    fTextStyle(toObj(style || {})),
    styles[`small${size}`]
  ];

  return (
    <View
      style={wrapStyle}
    >
      {
        position === 'before' && needSymbol
          ? (
            <Text style={symbolStyle}>{replaceSpecialChar(symbol)}</Text>
          )
          : null
      }

      <Text style={bigStyle}>{formatThousands(price)}</Text>

      {
        decimalDigits
          ? (
            <Text style={pointStyle}>.</Text>
          )
          : null
      }
      {
        decimalDigits
          ? (
            <Text style={smallStyle}>
              {formatDecimal(price)}
            </Text>
          )
          : null
      }

      {
        position === 'after' && needSymbol
          ? (
            <Text style={symbolStyle}>{replaceSpecialChar(symbol)}</Text>
          )
          : null
      }
    </View>
  );
};

Price.defaultProps = defaultProps;
Price.displayName = 'NutPrice';
