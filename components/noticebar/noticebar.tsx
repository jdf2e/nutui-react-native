import React, {
  useState,
  useRef,
  FunctionComponent,
  MouseEvent
} from 'react';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTexStyle from '../utils/filter-text-style';

import Carousel from './carousel';

import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TouchableHighlight
} from 'react-native';

import { useConfig } from '../configprovider';
import noticebarStyles from './styles';

import Icon from '../icon';
import Marquee from './marquee';

export interface NoticeBarProps {
  // 滚动方向  across 横向 vertical 纵向
  direction: string; // 滚动的方向，可选 across、vertical
  style?: StyleProp<ViewStyle> | undefined;
  list: any; // 纵向滚动数据列表
  standTime: number; // 停留时间(毫秒)
  complexAm: boolean; // 稍复杂的动画，耗能会高
  height: number; // 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值
  text: string; // 提示的信息
  closeMode: boolean; // 是否启用关闭模式
  wrapable: boolean; // 是否开启文本换行
  leftIcon: string; // close为没有左边icon,其他为自定义的图片链接，没有为默认图片
  color: string; // 导航栏的文字颜色
  backgroundColor: string; // 导航栏的背景颜色
  delay: string | number; // 延时多少秒
  scrollable: boolean | null; // 是否可以滚动
  speed: number; // 滚动速率 (px/s)
  rightIcon?: HTMLElement | any; // closeMode 模式下，默认为 ‘close’,其他模式下，没有为默认图片
  close?: (list?: any) => void;
  click?: (item?: any) => void;
  onClose?: (list?: any) => void;
  // onPress?: (item?: any) => void;
  onClick?: (item?: any) => void;
}

const defaultProps = {
  // 滚动方向  across 横向 vertical 纵向
  direction: 'across',
  list: [], // 纵向滚动数据列表
  standTime: 1000,
  complexAm: false,
  height: 40,
  text: '',
  closeMode: false,
  wrapable: false,
  leftIcon: '',
  color: '',
  backgroundColor: '',
  delay: 1,
  scrollable: true,
  speed: 50
} as NoticeBarProps;

export const NoticeBar: FunctionComponent<
Partial<NoticeBarProps> &
Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    children,
    style,
    direction,
    list,
    standTime,
    complexAm,
    height,
    text,
    closeMode,
    wrapable,
    leftIcon,
    color,
    backgroundColor,
    delay,
    scrollable,
    speed,
    rightIcon,
    onClose,
    onClick
  } = {
    ...defaultProps,
    ...props
  };
  const [showNoticeBar, SetShowNoticeBar] = useState(true);
  const [noticeBarWidth, setNoticeBarWidth] = useState(0);
  const scrollList: any = useRef([]);

  const { theme } = useConfig();

  const styles = noticebarStyles(theme);

  const handleClick = (event: MouseEvent) => {
    onClick && onClick(event);
  };

  const onIconClick = (event: any) => {
    SetShowNoticeBar(!closeMode);
    onClose && onClose(event);
    onClick && onClick(event);
  };

  /**
   * 点击滚动单元
   */
  const go = (item: any) => {
    onClick && onClick(item);
  };

  const iconShow = () => {
    if (leftIcon === 'close') {
      return false;
    }

    return true;
  };

  const getMaxWidth = () => {
    if (typeof children === 'string') {
      return (children.length + 160) * 6;
    }
    if (children) {
      return children;
    }

    return (text.length + 160) * 6;
  };

  const textStyle = [
    styles.marquee,
    fTexStyle(toObj(style || {})),
    color ? { color } : {}
  ];

  const renderText = () => {
    if (wrapable) {
      return (
        <Text
          style={textStyle}
        >
          {children || text}
        </Text>
      );
    }

    return (
      <Text
        numberOfLines={1}
        ellipsizeMode='tail'
        style={textStyle}
      >
        {children || text}
      </Text>
    );
  };

  if (!showNoticeBar) {
    return (
      <View />
    );
  }

  const acrossStyle = [
    styles.acrossContainer,
    fConStyle(toObj(style || {})),
    backgroundColor ? { backgroundColor } : {}
  ];

  const renderAcross = () => {
    return (
      <View
        style={acrossStyle}
      >
        {
          iconShow()
            ? (
              <View style={styles.iconContainer}>
                <Icon
                  name={leftIcon || 'notice'}
                  color={theme['$noticebar-color'] || '#d9500b'}
                  size={theme['$noticebar-left-icon-width'] || 16}
                />
              </View>
            )
            : null
        }
        <View
          style={styles.contentC}
        >
          {
            scrollable
              ? (
                <Marquee
                  style={styles.marquee}
                  text={children || text}
                  speed={speed}
                  delay={delay}
                  wrapable={wrapable}
                  maxWidth={wrapable ? 350 : getMaxWidth()}
                />
              )
              : renderText()
          }
        </View>

        {
          closeMode || rightIcon
            ? (
              <TouchableHighlight
                underlayColor={null}
                activeOpacity={1}
                onPress={onIconClick}
              >
                <View
                  style={styles.rIconContainer}
                >
                  <Icon
                    name={rightIcon || 'close'}
                    size={theme['$noticebar-right-icon-width'] || 16}
                    color={color || theme['$noticebar-color'] || '#d9500b'}
                  />
                </View>
              </TouchableHighlight>
            )
            : null
        }

      </View>
    );
  };

  const cloneChild = (listItem: string, listIndex: number) => {
    return React.Children.map(children, function(child: any, index: number) {
      if (child && index === listIndex) {
        return React.cloneElement(child, {
          key: listIndex,
          children: listItem
        });
      }

      return null;
    });
  };

  const getChilden = () => {
    const arr: string[] | any = [];

    React.Children.map(children, (child) => {
      arr.push((child as any).props.children);
    });

    return arr;
  };

  const renderVertical = () => {
    return (
      <View 
        style={acrossStyle}
        onLayout={(e)=> {
          let width = e.nativeEvent && e.nativeEvent.layout && e.nativeEvent.layout.width
          setNoticeBarWidth(width || 0)
        }}
      >

        {children ? (
          <Carousel
            style={[styles.horseLampList, { width: noticeBarWidth - 60, height }]}
            selectedIndex={1}
            autoplay
            infinite
            autoplayInterval={standTime}
            vertical
          >
            {getChilden().map((item: string, index: number) => {
              return cloneChild(item, index);
            })}
          </Carousel>
        ) : (
          <Carousel
            style={[styles.horseLampList, { width: noticeBarWidth - 60, height }]}
            selectedIndex={1}
            autoplay
            infinite
            autoplayInterval={standTime}
            vertical
          >
            {list.map((item: string, index: number) => {
              return (
                <TouchableHighlight
                  key={index}
                  style={{
                    height,
                    justifyContent: 'center'
                  }}
                  underlayColor={null}
                  activeOpacity={1}
                  onPress={() => {
                    go(item);
                  }}
                >
                  <Text
                    style={textStyle}
                  >
                    {item}
                  </Text>
                </TouchableHighlight>

              );
            })}
          </Carousel>
        )
        }

        {
          rightIcon || (closeMode
            ? (
              <TouchableHighlight
                underlayColor={null}
                activeOpacity={1}
                style={styles.rIconContainer}
                onPress={onIconClick}
              >
                <View>
                  <Icon
                    name='close'
                    size={11}
                    color={color || '#d9500b'}
                  />
                </View>
              </TouchableHighlight>
            )
            : null)
        }
      </View>
    );
  };

  return (
    <View>
      { direction === 'across'
        ? (
          renderAcross()
        )
        : null }
      { (list.length || children) && direction === 'vertical'
        ? renderVertical()
        : null
      }
    </View>
  );
};

NoticeBar.defaultProps = defaultProps;
NoticeBar.displayName = 'NutNoticeBar';