import React, { FunctionComponent, useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import { useConfig } from '../configprovider';
import tabBarStyles from './styles';

export interface TabbarProps {
  visible: number | string;
  bottom: boolean;
  size: string | number;
  unactiveColor: string;
  activeColor: string;
  safeAreaInsetBottom: boolean;
  style: StyleProp<ViewStyle>;
  tabSwitch: (child: React.ReactElement<any>, active: number) => void;
  onSwitch: (child: React.ReactElement<any>, active: number) => void;
  children?: React.ReactNode;
}

const defaultProps = {
  visible: 0,
  bottom: false,
  size: 20,
  unactiveColor: '',
  activeColor: '',
  safeAreaInsetBottom: false,
  className: '',
  style: {},
  tabSwitch: () => {},
  onSwitch: () => {}
} as TabbarProps;

export const Tabbar: FunctionComponent<Partial<TabbarProps>> = (props) => {
  const {
    children,
    visible,
    bottom,
    size,
    activeColor,
    unactiveColor,
    safeAreaInsetBottom,
    style,
    tabSwitch,
    onSwitch
  } = {
    ...defaultProps,
    ...props
  };

  const { theme } = useConfig();
  const styles = tabBarStyles(theme);

  const [selectIndex, setSelectIndex] = useState(visible);

  const handleClick = (idx: number) => {
    setSelectIndex(idx);
  };

  const wrapStyle = [
    styles.container,
    bottom ? styles.bottom : {},
    safeAreaInsetBottom ? styles.safeAreaInsetBottom : {},
    fConStyle(toObj(style || {}))
  ];

  return (
    <View
      style={wrapStyle}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        const childProps = {
          ...child.props,
          active: idx === selectIndex,
          index: idx,
          unactiveColor,
          activeColor,
          size,
          handleClick: () => {
            handleClick(idx);
            tabSwitch(child, idx);
            onSwitch(child, idx);
          }
        };

        return React.cloneElement(child, childProps);
      })}
    </View>
  );
};

Tabbar.defaultProps = defaultProps;
Tabbar.displayName = 'NutTabbar';
