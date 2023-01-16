import React, {
  FunctionComponent,
  useCallback,
  useState
} from 'react';

import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight
} from 'react-native';

import Background, { BgProps } from './bg';
import Icon from '../icon';

import tagStyles from './styles';

import { isLinearGradient } from '../utils/color';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import { useConfig } from '../configprovider';

import fTextStyle from '../utils/filter-text-style';

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface TagProps {
  style?: StyleProp<ViewStyle> | undefined;
  type: TagType; // 标签类型，可选值为primary success danger warning， 默认 default
  color: string; // 标签颜色
  textColor: string; // 文本颜色，优先级高于color属性 默认 white
  plain: boolean; // 是否为空心样式 默认 FALSE
  round: boolean; // 是否为圆角样式 默认 FALSE
  mark: boolean; // 是否为标记样式 默认 FALSE
  closeable: boolean; // 是否为可关闭标签 默认 FALSE
  prefixCls: string;
  onClick: (e: any) => void;
  onClose: (e?: any) => void; // 关闭事件
  children?: React.ReactNode;
}

const getBgByButtonType = (type: TagType): BgProps => {
  const objStyle = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  };

  if (type === 'danger') {
    return {
      ...objStyle,
      useAngle: true,
      angle: 135,
      locations: [0, 0.7, 1],
      colors: ['#F2140C', '#E8220E', '#F24D0C']
    };
  }

  return {
    locations: [],
    colors: []
  };
};

export const Tag: FunctionComponent<Partial<TagProps>> = ({
  type = 'default',
  color = '',
  textColor = '',
  plain = false,
  round = false,
  mark = false,
  closeable = false,
  children,
  style,
  onClose = (e: any) => {},
  onClick = (e: any) => {}
}) => {
  const { locale, theme } = useConfig();

  const styles = tagStyles(theme);

  const [isShow, setIsShow] = useState(true);

  const getBgStyle = () => {
    if (plain) {
      return {
        backgroundColor: '#fff'
      };
    }

    return getBgByButtonType(type);
  };

  const wrapStyle = [
    styles.container,
    styles[`type${type}`],
    styles[`plain${plain}`] || {},
    styles[`round${round}`] || {},
    styles[`mark${mark}`] || {},
    fConStyle(toObj(style || {})),
    !plain && color && !isLinearGradient(color) ? { backgroundColor: color } : {}
  ];

  const textStyle = [
    styles.text,
    styles[`textPlain${plain}${type}`] || {},
    fTextStyle(toObj(style || {})),
    textColor ? { color: textColor } : {}
  ];

  const onCloseCallback = useCallback((e) => {
    setIsShow(false);
    onClose(e);
  }, [setIsShow, onClose]);

  if (!isShow) {
    return <View />;
  }

  return (
    <TouchableHighlight
      underlayColor={null}
      activeOpacity={1}
      onPress={onClick}
    >
      <Background
        style={wrapStyle}
        {...getBgStyle()}
        type={type}
        plain={plain}
        color={color}
      >
        {
          closeable ? (
            <View
              style={styles.closeContainer}
            >
              <Text
                style={textStyle}
              >{children}</Text>

              <TouchableHighlight
                onPress={onCloseCallback}
              >
                <Icon
                  name='close'
                  color='#ffffff'
                  size={12}
                />
              </TouchableHighlight>
            </View>
          ) : (
            <Text
              style={textStyle}
            >{children}</Text>
          )
        }

      </Background>
    </TouchableHighlight>
  );
};

Tag.displayName = 'NutTag';
