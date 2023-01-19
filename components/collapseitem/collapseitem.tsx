import React, {
  FunctionComponent,
  useEffect,
  useState
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

import Icon from '../icon';
import { IComponent, ComponentDefaults } from '../utils/typings';
import { useConfig } from '../configprovider';
import collapseStyles from './styles';
import pt from '../utils/pt';

export interface CollapseItemProps extends IComponent {
  title: string;
  name: string;
  isOpen: boolean;
  icon: string;
  iconSize: string;
  iconColor: string;
  disabled: boolean;
  rotate: number;
  subTitle: string;
  titleIcon: string;
  titleIconColor: string;
  titleIconPosition: string;
  titleIconSize: string;
  childnull: boolean;
  children: any;
  onToggle: (isOpen: boolean, name: string) => void;
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  name: '',
  isOpen: false,
  icon: '',
  iconSize: '',
  iconColor: '',
  disabled: false,
  rotate: 180,
  subTitle: '',
  titleIcon: '',
  titleIconColor: '',
  titleIconPosition: '',
  titleIconSize: '',
  childnull: true
} as CollapseItemProps;

export const CollapseItem: FunctionComponent<
Partial<CollapseItemProps>
> = (props) => {
  const {
    children,
    title,
    isOpen,
    onToggle,
    name,
    disabled,
    icon,
    rotate,
    subTitle,
    titleIcon,
    titleIconColor,
    titleIconPosition,
    titleIconSize,
    iconSize,
    iconColor,
    childnull,
    iconClassPrefix,
    iconFontClassName
  } = {
    ...defaultProps,
    ...props
  };
  const { theme } = useConfig();
  const styles = collapseStyles(theme);

  const [currHeight, setCurrHeight] = useState<number | string>('auto'); // 设置content的高度
  const [iconStyle, setIconStyle] = useState<object>({
    transform: [{ translateY: -pt(20) }]
  });

  useEffect(() => {
    // 一开始content都有高度，在这里根据isOpen，改变其高度
    setTimeout(() => {
      const newIconStyle = isOpen
        ? { transform: [{ translateY: -pt(20) }, { rotate: `${rotate}deg` }] }
        : { transform: [{ translateY: -pt(20) }] };

      setIconStyle(newIconStyle);
    }, 10);
  }, [isOpen, rotate]);

  useEffect(() => {
    if (!isOpen) {
      setCurrHeight(0);
    } else {
      setCurrHeight('auto');
    }
  }, [children, isOpen]);

  return (
    <>
      <TouchableOpacity
        style={[styles.collapseItem__header, styles.borderBt]}
        onPress={() => {
          if (disabled) return;
          onToggle?.(isOpen, name);
        }}
      >
        <View style={styles.collapseItem__title}>
          {!!titleIcon && titleIconPosition === 'left' && (
            <View style={styles.collapseItem__titleIconLeft}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={titleIcon}
                size={titleIconSize}
                color={disabled ? '#C2C2C2' : titleIconColor}
              />
            </View>
          )}
          <Text style={[styles.collapseItem__title__text, disabled && styles.collapseItem__title__disable]}>{title}</Text>
          {!!titleIcon && titleIconPosition === 'right' && (
            <View style={styles.collapseItem__titleIconRight}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={titleIcon}
                size={titleIconSize}
                color={disabled ? '#C2C2C2' : titleIconColor}
              />
            </View>
          )}
        </View>
        <Text style={styles.collapseItem__subTitle} numberOfLines={1}>{subTitle}</Text>
        <View style={styles.collapseItem__iconBox}>
          <Animated.View style={[styles.collapseItem__icon, iconStyle]}>
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={icon}
              size={iconSize}
              color={disabled ? '#C2C2C2' : iconColor}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {childnull && (
        <View style={[styles.collapseItem__content, { height: currHeight }]} >
          <View style={styles.collapseItem__contentText}>
            {typeof children === 'string'
              ? <Text>{children}</Text>
              : children}
          </View>
        </View>
      )}
    </>
  );
};

CollapseItem.defaultProps = defaultProps;
CollapseItem.displayName = 'NutCollapseItem';
