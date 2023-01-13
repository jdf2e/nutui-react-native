import React, {
  ReactNode,
  FunctionComponent,
  useState,
  useCallback,
  forwardRef,
} from 'react';

import {
  View,
  Text,
  // ActivityIndicator,
  TouchableHighlight,
  TouchableHighlightProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import Background, { BgProps } from './bg';
import toObj from '../utils/style-to-obj';
// import fConfStyle from '../utils/filter-container-style';
import fSizeMarginStyle from '../utils/filter-size-margin-container';
import fSizePaddingStyle from '../utils/filter-size-padding-container';

import Icon from '../icon/index';

import px from '../utils/px';
import pt from '../utils/pt';
import { isLinearGradient, getColor } from '../utils/color';
import buttonStyles from './styles';
import { useConfig } from '../configprovider';

// 按钮类型
export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

// 按钮大小
export type ButtonSize = 'large' | 'normal' | 'small';

// 按钮形状
export type ButtonShape = 'square' | 'round';

// 按钮的签名, 继承于事件类型
export interface ButtonProps extends TouchableHighlightProps {
  type: ButtonType;
  size: ButtonSize;
  shape: ButtonShape;
  color: string;
  plain: boolean;
  disabled: boolean;
  block: boolean;
  icon: string;
  loading: boolean;
  // style: CSSProperties;
  activeStyle: StyleProp<ViewStyle> | undefined;
  children: ReactNode | string | undefined;
}

// inear-gradient(135deg, rgba(250,44,25,1) 0%,rgba(250,63,25,1) 44.59259259%,rgba(250,89,25,1) 83.40740741%,rgba(250,100,25,1) 100%);
// PartialBgProps
const getBgByButtonType = (type: ButtonType): BgProps => {
  const objStyle = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  };

  if (type === 'default') {
    return {
      locations: [],
      colors: [],
    };
  } else if (type === 'primary') {
    return {
      ...objStyle,
      useAngle: true,
      angle: 135,
      locations: [0, 0.45, 0.83, 1],
      colors: ['#FA2C19', '#FA3F19', '#FA5919', '#FA6419'],
    };
  } else if (type === 'info') {
    // 信息
    return {
      ...objStyle,
      useAngle: true,
      angle: 315,
      locations: [0, 1],
      colors: ['#498FF2', '#4965F2'],
    };
  } else if (type === 'success') {
    return {
      ...objStyle,
      useAngle: true,
      angle: 135,
      locations: [0, 0.45, 0.83, 1],
      colors: ['#26BF26', '#27C530', '#28CF3F', '#29D446'],
    };
  } else if (type === 'warning') {
    return {
      ...objStyle,
      useAngle: true,
      angle: 135,
      locations: [0, 0.45, 0.83, 1],
      colors: ['#FF9E0D', '#FFA70D', '#FFB60D', '#FFBE0D'],
    };
  } else if (type === 'danger') {
    return {
      locations: [],
      colors: [],
    };
  }
  return {
    locations: [],
    colors: [],
  };
  // return objStyle
};

const getPlainStyleByType = (type: ButtonType, color: string) => {
  const defaultStyle = {
    borderStyle: 'solid',
    borderWidth: px(1),
  };

  // // 会有自定义颜色传递过来
  if (color) {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: getColor(color),
    };
  }

  if (type === 'default') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#ccc',
    };
  } else if (type === 'primary') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#FA2C19',
    };
  } else if (type === 'info') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#496AF2',
    };
  } else if (type === 'success') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#26BF26',
    };
  } else if (type === 'warning') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#FF9E0D',
    };
  } else if (type === 'danger') {
    return {
      ...defaultStyle,
      backgroundColor: '#fff',
      borderColor: '#f00',
    };
  }
};

export const Button: FunctionComponent<Partial<ButtonProps>> = forwardRef(
  (
    {
      type = 'default', // 默认defaut
      size = 'normal', // normal
      shape = 'round',
      color = '',
      plain = false,
      disabled = false,
      block = false,
      loading = false,
      icon,
      style,
      activeStyle,
      children,
      onPress,
      onPressIn,
      onPressOut,
      onShowUnderlay,
      onHideUnderlay,
      ...restProps
    },
    ref
  ) => {
    const { theme } = useConfig();
    const styles = buttonStyles(theme);
    // 标注 onPressIn事件的标示
    const [pressIn, setPressIn] = useState(false);
    //  当底层颜色被显示时， 设置true , 否则就显示false
    // 回调函数 显示onShowUnderlay
    // 隐藏 onHideUnderlay
    const [touchIt, setTouchIt] = useState(false);
    // 设置 TouchableHighlight 的样式
    const wrapperStyle = [
      styles.wrapperStyle, // 默认样式
      styles[`${size}Raw`], // 尺寸的样式
      styles[`${type}Raw`], //  类型的样式
      (disabled && styles.disabledRaw) || {},
      pressIn && styles[`${type}Highlight`], // 按钮按下去的样式
      // (activeStyle && touchIt && activeStyle) || {}, // 需外接传递这个样式
      color && !isLinearGradient(color) ? { backgroundColor: color } : {},
      plain ? getPlainStyleByType(type, color) : {},
      shape === 'square' ? { borderRadius: 0 } : {},
      block ? styles.blockStyle : {},
    ];
    // 这两种颜色 不是渐变色
    // wrapperStyle = !plain && && (type === 'default' || type === 'danger')
    //     ? [...wrapperStyle, bgStyle.style]
    //     : wrapperStyle;

    // 包含了外部传递过来的style
    const wrapperInStyle = [
      ...wrapperStyle,
      { borderWidth: 0 },
      fSizeMarginStyle(toObj(style || {})),
    ];

    const wrapperInnter = [
      ...wrapperStyle,

      fSizePaddingStyle(toObj(style || {})),
    ];
    const getBgStyle = () => {
      if (plain) {
        return {
          backgroundColor: '#fff',
        };
      }
      return getBgByButtonType(type);
    };

    // button 文本样式
    const textStyle = [
      styles[`${size}RawText`], // 大小字体样式
      styles[`${type}RawText`], // type字体样式
      styles[`plain${plain}${type}RawText`] || {},
      plain && color
        ? { color: getColor(color) }
        : !plain && color
        ? { color: '#fff' }
        : {},
      // disabled && styles[`${type}DisabledRawText`], // disabled 字体样式
      (disabled && styles.disabledRawText) || {},
      // pressIn && styles[`${type}HighlightText`] // 高亮时的样式
    ];

    const iconColor =
      type === 'default'
        ? styles.defaultIndicatorColor.color
        : plain
        ? styles[`plain${plain}${type}IconColor`].color
        : styles.indicatorColor.color;

    // 设置 TouchableHighlight 属性 underlayColor
    const underlayColor = StyleSheet.flatten(
      activeStyle ||
        (plain ? styles.plainHighlight : styles[`${type}Highlight`])
    ).backgroundColor; // 背景色

    // 设置loading 的字体颜色
    // const indicatorColor = (
    //     StyleSheet.flatten(
    //       pressIn
    //         ? styles[`${type}HighlightText`]
    //         : styles[`${type}RawText`],
    //     ) as any
    // ).color

    // onPress 回调
    const onPressCallback = useCallback(
      (e: any) => {
        onPress && onPress(e);
      },
      [onPress]
    );

    const onPressInCallback = useCallback(
      (e: any) => {
        setPressIn(true);
        onPressIn && onPressIn(e);
      },
      [onPressIn, setPressIn]
    );

    const onPressOutCallback = useCallback(
      (e: any) => {
        setPressIn(false);
        onPressOut && onPressOut(e);
      },
      [onPressOut, setPressIn]
    );

    const onShowUnderlayCallback = useCallback(() => {
      setTouchIt(true);
      onShowUnderlay && onShowUnderlay();
    }, [onShowUnderlay, setTouchIt]);

    const onHideUnderlayCallback = useCallback(() => {
      setTouchIt(false);
      onHideUnderlay && onHideUnderlay();
    }, [onHideUnderlay, setTouchIt]);

    return (
      <TouchableHighlight
        ref={ref}
        accessibilityRole='button'
        accessibilityState={{ disabled: !!disabled }}
        activeOpacity={0.4}
        {...restProps}
        style={wrapperInStyle}
        disabled={disabled}
        underlayColor={underlayColor}
        // onPress={(e) => onPress && onPress(e)}
        onPress={onPressCallback}
        onPressIn={onPressInCallback}
        onPressOut={onPressOutCallback}
        onShowUnderlay={onShowUnderlayCallback}
        onHideUnderlay={onHideUnderlayCallback}
      >
        <Background
          {...getBgStyle()}
          style={wrapperInnter}
          type={type}
          plain={plain}
          color={color}
        >
          <View style={styles.container}>
            {loading ? (
              <Icon
                style={{ marginRight: pt(16) }}
                name='loading'
                size={18}
                color={iconColor}
              />
            ) : null}
            {!loading && icon ? (
              <Icon
                style={{ marginRight: pt(16) }}
                name={icon}
                size={16}
                color={styles.indicatorColor.color}
              />
            ) : null}
            {typeof children === 'string' ? (
              <Text style={textStyle}>{children}</Text>
            ) : (
              <>{children}</>
            )}
          </View>
        </Background>
      </TouchableHighlight>
    );
  }
);

Button.displayName = 'NutButton';
