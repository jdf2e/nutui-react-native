import React, {
  FunctionComponent,
  useEffect,
  useState
} from 'react';

import {
  View,
  Animated,
  StyleProp,
  ViewStyle
} from 'react-native';

import Button from './button';
import pt from '../utils/pt';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import { useConfig } from '../configprovider';
import switchStyles from './styles';

import { useAnimatedTiming } from './useAnimations';
import AntmView from './view';

export interface SwitchProps {
  isAsync: boolean; // 开关状态是否异步修改 默认 false
  checked: boolean; // 开关状态	默认 FALSE
  disable: boolean; // 禁用状态 默认 FALSE
  activeColor: string; // 打开时的背景颜色 默认 #fa2c19
  inactiveColor: string;// 关闭时的背景颜色 默认 #ebebeb
  activeText: string; // 打开时文字描述
  inactiveText: string; // 关闭时文字描述
  style: StyleProp<ViewStyle> | undefined;
  onChange: (val: boolean, event: any) => void;
}
const defaultProps = {
  isAsync: false,
  checked: false,
  disable: false,
  activeColor: '',
  inactiveColor: '',
  activeText: '',
  inactiveText: ''
} as SwitchProps;

const AnimatedView = Animated.createAnimatedComponent(AntmView);

export const Switch: FunctionComponent<Partial<SwitchProps>> = (props) => {
  const {
    isAsync,
    checked,
    disable,
    activeColor,
    inactiveColor,
    activeText,
    inactiveText,
    onChange,
    style
  } = {
    ...defaultProps,
    ...props
  };

  const { theme } = useConfig();
  const styles = switchStyles(theme);

  const checkedRef = React.useRef<undefined | boolean>();

  if (checkedRef.current === undefined) {
    checkedRef.current = checked;
  }

  const [innerChecked, setInnerChecked] = useState(checkedRef.current);

  useEffect(() => {
    checkedRef.current = checked;
    animate({ toValue: checked ? 1 : 0 });
    setInnerChecked(checked);
  }, [checked]);

  // animate1
  const [animatedValue, animate] = useAnimatedTiming();
  const transitionMargin = {
    marginLeft: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [pt(38), pt(10)]
    }),
    marginRight: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [pt(10), pt(28)]
    })
  };

  // animate2
  const [animatedValue2, animate2] = useAnimatedTiming();
  const transitionWidth = {
    width: animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [pt(26), pt(26)]
    }),
    left: !innerChecked
      ? animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [pt(8), 0]
      })
      : undefined,
    right: innerChecked
      ? animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, pt(8)]
      })
      : pt(8)
  };

  // initial animate
  React.useEffect(() => {
    if (innerChecked) {
      animate({});
      animate2({ toValue: 0 });
    } else {
      animate({ toValue: 0 });
    }
  }, [animate, animate2, innerChecked]);

  const triggerChange = (newChecked: boolean, event: any) => {
    if (!disable) {
      checkedRef.current = newChecked;
      if (!isAsync) {
        setInnerChecked(newChecked);
        onChange && onChange(newChecked, event);
        animate({ toValue: newChecked ? 1 : 0 });
      } else {
        onChange && onChange(newChecked, event);
      }
    }
  };

  const onPress = (event: any) => {
    triggerChange(!innerChecked, event);
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {})),
    styles[`disable${disable}`]
  ];

  const innerStyle = [
    styles.innerStyle,
    innerChecked ? { backgroundColor: activeColor || theme['$primary-color'] } : { backgroundColor: inactiveColor || theme['$switch-close-bg-color'] }
  ];

  const accessibilityState = {
    checked: innerChecked,
    disabled: disable
  };

  const switchStyle = [
    styles.switchHandle,
    styles[`switchHandleChecked${innerChecked}`],
    transitionWidth
  ];

  const switchInnerStyle = [
    styles.switchInner,
    styles[`inner${innerChecked}`],
    transitionMargin
  ];

  return (
    <View
      accessibilityRole='switch'
      accessibilityState={accessibilityState}
      style={wrapStyle}
    >
      <Button
        disabled={disable}
        onPress={onPress}
      >
        <View
          style={innerStyle}
        >
          <Animated.View
            style={switchStyle}
          >
            {

              !innerChecked
                ? (
                  <View style={styles.line} />
                )
                : <View />
            }
          </Animated.View>
          <AnimatedView style={switchInnerStyle}>
            {innerChecked ? activeText : inactiveText}
          </AnimatedView>

        </View>
      </Button>
    </View>
  );
};

Switch.defaultProps = defaultProps;
Switch.displayName = 'NutSwitch';
