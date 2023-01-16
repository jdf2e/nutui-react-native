import React, {
  FunctionComponent,
  useCallback,
  useContext
} from 'react';

import {
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  View,
  Text
} from 'react-native';

import RadioContext from './context';
import RadioGroup from '../radiogroup';
import Icon from '../icon/index';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTextStyle from '../utils/filter-text-style';
import { useConfig } from '../configprovider';
import radioStyles from './styles';

type Shape = 'button' | 'round';
type Position = 'right' | 'left';

export interface RadioProps {
  // className: string
  style: StyleProp<ViewStyle> | undefined;
  disabled: boolean; // 是否禁用选择 默认 FALSE
  checked: boolean;
  shape: Shape; // 形状，可选值为 button、round 默认 round
  textPosition: Position;
  value: string | number | boolean;
  iconName: string; // 图标名称，选中前(建议和icon-active-name一起修改) 默认'check-normal'
  iconActiveName: string; // 图标名称，选中后(建议和icon-name一起修改) 默认 'check-checked'
  iconSize: string | number; // 图标尺寸 18
  onChange: (e: any) => void;
  children?: React.ReactNode;
}

const defaultProps = {
  disabled: false,
  checked: false,
  shape: 'round',
  value: '',
  textPosition: 'right',
  iconName: 'check-normal',
  iconActiveName: 'check-checked',
  iconSize: 18,
  onChange: (e) => {}
} as RadioProps;

export const Radio: FunctionComponent<
Partial<RadioProps>
> & { RadioGroup: typeof RadioGroup } = (props) => {
  const { children } = {
    ...defaultProps,
    ...props
  };
  const {
    disabled,
    checked,
    shape,
    textPosition,
    value,
    iconName,
    iconActiveName,
    iconSize,
    onChange,
    style
  } = props;

  const context = useContext(RadioContext);

  const { theme } = useConfig();
  const styles = radioStyles(theme);

  const onPressCallback = useCallback((e) => {
    if (disabled || checked) return;
    onChange && onChange(e);
    context && context.onChange(value);
  }, [disabled, checked]);

  const wrapStyle = [
    styles[`shape${shape}Container`],
    styles[`${shape}Checked${checked}`],
    fConStyle(toObj(style || {})),
    styles[`${shape}Disabled${disabled}`]
  ];

  const textStyle = [
    styles[`textDefault${shape}`],
    fTextStyle(toObj(style || {})),
    styles[`textChecked${shape}${checked}`],
    styles[`textPosition${textPosition}`]
  ];

  const renderRound = () => {
    if (textPosition === 'left') {
      return [
        <Text key={1} style={textStyle}>{children}</Text>,
        <Icon
          key={2}
          name={checked ? iconActiveName : iconName}
          size={iconSize}
          color={checked ? '#f0250f' : '#d6d6d6'}
        />
      ];
    }

    return [
      <Icon
        key={1}
        name={checked ? iconActiveName : iconName}
        size={iconSize}
        color={checked ? '#f0250f' : '#d6d6d6'}
        style={styles.mr10}
      />,
      <Text key={2} style={textStyle}>{children}</Text>
    ];
  };

  const renderButton = () => {
    return (
      <Text style={textStyle}>{children}</Text>
    );
  };

  if (disabled) {
    return (
      <View
        style={wrapStyle}
      >
        { shape === 'round'
          ? renderRound()
          : renderButton()
        }
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
        { shape === 'round'
          ? renderRound()
          : renderButton()
        }
      </View>
    </TouchableHighlight>
  );
};

Radio.defaultProps = defaultProps;
Radio.displayName = 'NutRadio';
Radio.RadioGroup = RadioGroup;
