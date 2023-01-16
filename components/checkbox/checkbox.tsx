import React, {
  FunctionComponent, useCallback
} from 'react';

import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight
} from 'react-native';

import Icon from '../icon';
import CheckboxGroup from '../checkboxgroup';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTextStyle from '../utils/filter-text-style';

import { useConfig } from '../configprovider';
import checkboxStyles from './styles';

export interface CheckboxProps {
  checked: boolean; // 是否处于选中状态  默认 FALSE
  disabled: boolean; // 是否禁用选择 默认 FALSE
  textPosition: 'left' | 'right'; // 文本所在的位置，可选值：left,right 默认 right
  iconSize: string | number; // 图标尺寸 默认 18
  iconName: string; // 图标名称，选中前(建议和icon-active-name一起修改) 默认 'check-normal'
  iconActiveName: string; // 图标名称，选中后(建议和icon-name一起修改) 默认 'checked'
  iconIndeterminateName: string; // 图标名称，半选状态 默认 'check-disabled'
  indeterminate: boolean; // 当前是否支持半选状态，一般用在全选操作中 默认 FALSE
  label: string; // 复选框的文本内容
  children: React.ReactNode;
  style: StyleProp<ViewStyle> | undefined;
  onChange: (state: boolean, label: string) => void;
}

const defaultProps = {
  checked: false,
  disabled: false,
  textPosition: 'right',
  iconSize: 18,
  iconName: 'check-normal',
  iconActiveName: 'checked',
  iconIndeterminateName: 'check-disabled',
  onChange: (state, label) => {},
  style: {}
} as CheckboxProps;

export const Checkbox: FunctionComponent<
Partial<CheckboxProps>
> = (props) => {
  const { children } = {
    ...defaultProps,
    ...props
  };

  const {
    iconName,
    iconSize,
    label,
    textPosition,
    iconActiveName,
    checked,
    disabled,
    onChange,
    indeterminate,
    iconIndeterminateName,
    getParentVals,
    max,
    style
  } = props as any;

  const { theme } = useConfig();

  const styles = checkboxStyles(theme);

  const onPressCallback = useCallback(() => {
    if (!disabled) {
      const latest = !checked;

      if (max !== undefined && latest && getParentVals().length >= max) return;
      onChange && onChange(latest, label || (children as string));
    }
  }, [disabled, checked, max, getParentVals, onChange]);

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style))
  ];

  const textStyle = [
    styles.text,
    styles[`textPosition${textPosition}`],
    fTextStyle(toObj(style)),
    styles[`textDisabled${disabled}`]
  ];

  const iconStyle = [
    styles[`icon${textPosition}`]
  ];

  const renderText = () => {
    if (typeof children === 'string') {
      return (
        <Text style={textStyle}>{children}</Text>
      );
    }
    if (label) {
      return (
        <Text style={textStyle}>{label}</Text>
      );
    }
  };

  const renderIcon = () => {
    if (disabled) { // 如果是禁止的状态
      if (indeterminate) {
        return (
          <Icon
            name={checked ? iconIndeterminateName : iconName}
            color={checked ? '#b1b1b1' : '#d6d6d6'}
            size={iconSize}
            style={iconStyle}
          />
        );
      }

      return (
        <Icon
          name={checked ? iconActiveName : iconName}
          color={checked ? '#b1b1b1' : '#d6d6d6'}
          size={iconSize}
          style={iconStyle}
        />
      );
    } else {
      if (indeterminate) {
        return (
          <Icon
            name={checked ? iconIndeterminateName : iconName}
            color={checked ? '#fa2c19' : '#d6d6d6'}
            size={iconSize}
            style={iconStyle}
          />
        );
      }

      return (
        <Icon
          name={checked ? iconActiveName : iconName}
          color={checked ? '#f50f16' : '#d6d6d6'}
          size={iconSize}
          style={iconStyle}
        />
      );
    }
  };

  const renderChildren = () => {
    if (textPosition === 'left') {
      return (
        <>
          {renderText()}
          {renderIcon()}
        </>
      );
    } else {
      return (
        <>
          {renderIcon()}
          {renderText()}
        </>
      );
    }
  };

  if (disabled) {
    return (
      <View
        style={wrapStyle}
      >
        { renderChildren() }
      </View>
    );
  }

  return (
    <TouchableHighlight
      underlayColor={null}
      activeOpacity={1}
      onPress={onPressCallback}
    >
      <View
        style={wrapStyle}
      >
        { renderChildren() }
      </View>
    </TouchableHighlight>
  );
};
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = 'NutCheckBox';
Checkbox.Group = CheckboxGroup;
