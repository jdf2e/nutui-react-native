import React, { FunctionComponent, ReactNode } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';

import Icon from '../icon';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';

import { useConfig } from '../configprovider';
import cellStyles from './styles';

export interface CellProps {
  title: ReactNode; // 标题名称
  subTitle: ReactNode; // 左侧副标题
  desc: string; // 右侧描述
  descTextAlign: string; // 右侧描述文本对齐方式 text-align
  isLink: boolean; // 是否展示右侧箭头并开启点击反馈 默认FALSE
  icon: string; // 左侧 图标名称 或图片链接
  roundRadius: number; // 圆角半径
  url: string; // 点击后跳转的链接地址
  to: string; // 点击后跳转的目标路由对象，同 vue-router 的 to 属性 属性
  replace: boolean; // 是否在跳转时替换当前页面历史 默认 FALSE
  center: boolean; // 是否使内容垂直居中 默认FALSE
  size: string; // 单元格大小，可选值为 large
  iconSlot: ReactNode;
  linkSlot: ReactNode;
  cellGroup: boolean;
  isLast: boolean;
  style: StyleProp<ViewStyle> | undefined;
  click: (event: any) => void;
  onClick: (event: any) => void;
  children: ReactNode;
}

const defaultProps = {
  title: null,
  subTitle: null,
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  icon: '',
  roundRadius: 6,
  // url: '',
  // to: '',
  // replace: false,
  center: false,
  size: '',
  iconSlot: null,
  linkSlot: null,
  cellGroup: false,
  isLast: false,
} as CellProps;

export const Cell: FunctionComponent<Partial<CellProps>> = (props) => {
  const {
    children,
    onClick,
    title,
    subTitle,
    desc,
    descTextAlign,
    isLink,
    icon,
    roundRadius,
    center,
    size,
    iconSlot,
    linkSlot,
    cellGroup,
    isLast,
    style,
  } = {
    ...defaultProps,
    ...props,
  };

  const { theme } = useConfig();

  const styles = cellStyles(theme);

  const handleClick = (event: any) => {
    onClick && onClick(event);
  };

  const baseStyle = {
    borderRadius: roundRadius,
  };

  const tTextStyle = [styles.tText, styles[`tTextSize${size}`]];

  const subTextStyle = [styles.subText, styles[`subTextSize${size}`]];

  const descCStyle = [
    styles.descC,
    center ? { alignSelf: 'center' } : {},
    title || subTitle || icon ? {} : { textAlign: descTextAlign, flex: 1 },
  ];

  const descTextStyle = [
    styles.descText,
    styles[`descAlone${!title && !subTitle}`],
    styles[`descSize${size}`],
  ];

  const innerStyle = [
    styles.innerStyle,
    styles[`innerCenter${center}`],
    fConStyle(toObj(style || {})),
  ];

  const renderComponent = () => {
    if (children) {
      return children;
    }

    return (
      <View style={innerStyle}>
        <>
          {iconSlot || null}

          {icon ? <Icon name={icon} style={styles.icon} size={18} /> : null}
          {title || subTitle ? (
            <View style={styles.titleContainer}>
              {title ? <Text style={tTextStyle}>{title}</Text> : null}
              {subTitle ? <Text style={subTextStyle}>{subTitle}</Text> : null}
            </View>
          ) : null}
        </>
        <>
          {desc ? (
            <View style={descCStyle}>
              <Text style={descTextStyle}>{desc}</Text>
            </View>
          ) : null}
          {!linkSlot && isLink ? (
            <Icon name="right" color="#979797" size={14} />
          ) : (
            <View>{linkSlot}</View>
          )}
        </>
      </View>
    );
  };

  const wrapStyle = [
    styles.container,
    styles[`container${size}`],
    styles[`containerCellGroup${cellGroup}`],
    styles[`containerIsLast${isLast}`],
    baseStyle,
  ];

  if (isLink) {
    return (
      <TouchableHighlight
        style={[baseStyle, { width: '100%' }]}
        activeOpacity={1}
        underlayColor={null}
        onPress={handleClick}
      >
        <View style={wrapStyle}>{renderComponent()}</View>
      </TouchableHighlight>
    );
  }

  if (onClick) {
    return (
      <TouchableHighlight
        style={[baseStyle, { width: '100%' }]}
        activeOpacity={1}
        underlayColor={null}
        onPress={onClick}
      >
        <View style={wrapStyle}>{renderComponent()}</View>
      </TouchableHighlight>
    );
  }

  return <View style={wrapStyle}>{renderComponent()}</View>;
};

Cell.defaultProps = defaultProps;
Cell.displayName = 'NutCell';
