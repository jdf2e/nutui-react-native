import React, {
  forwardRef,
  useState,
  useMemo,
  useCallback,
  useImperativeHandle
} from 'react';

import {
  View,
  PanResponder,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Animated,
  Platform,
  PanResponderGestureState
} from 'react-native';

import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import getRect from '../utils/use-client-rect';

import { useConfig } from '../configprovider';
import swipeStyles from './styles';

export type SwipeSide = 'left' | 'right';

export type SwipePosition = SwipeSide | 'cell' | 'outside';

export interface SwipeInstance {
  open: (side: SwipeSide) => void;
  close: () => void;
}

export interface SwipeProps {
  /** 自定义样式 */
  style: StyleProp<ViewStyle>;
  /** 标识符，可以在事件参数中获取到 */
  name?: string | number;
  /** 指定左侧滑动区域宽度 */
  leftWidth: number;
  /** 指定右侧滑动区域宽度 */
  rightWidth: number;
  /** 左侧滑动区域的内容 */
  leftAction?: React.ReactNode;
  /** 右侧滑动区域的内容 */
  rightAction?: React.ReactNode;
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  // beforeClose?: (position: string) => void
  /** 是否禁用 */
  disabled?: boolean;
  /** 打开时触发 */
  onOpen?: ({
    name,
    position
  }: {
    name: string | number;
    position: SwipeSide;
  }) => void;
  /** 关闭时触发 */
  onClose?: ({
    name,
    position
  }: {
    name: string | number;
    position: SwipePosition;
  }) => void;
  /** 点击时触发 */
  onActionClick?: (event: Event, position: SwipePosition) => void;
  children?: React.ReactNode;
}
const defaultProps = {
  name: '',
  leftWidth: 0,
  rightWidth: 0
} as SwipeProps;

export const Swipe = forwardRef<
SwipeInstance,
Partial<SwipeProps>
>((props, instanceRef) => {
  const { children, style } = { ...defaultProps, ...props };

  const { theme } = useConfig();
  const styles = swipeStyles(theme);

  const [actionWidth, setActionWidth] = useState({
    left: 0,
    right: 0
  });

  // 左边的宽度
  const leftWidth = useMemo(
    () => (props.leftWidth ? props.leftWidth : actionWidth.left),
    [props.leftWidth, actionWidth.left]
  );

  // 右边的宽度
  const rightWidth = useMemo(
    () => (props.rightWidth ? props.rightWidth : actionWidth.right),
    [props.rightWidth, actionWidth.right]
  );

  const leftRef = useCallback(
    (node) => {
      if (node !== null) {
        setTimeout(() => {
          getRect(node)
            .then((res: any) => {
            // setActionWidth((v) => ({ ...v, left: res.width }))
            });
        }, 500);
      }
    },
    [props.leftAction]
  );

  const rightRef = useCallback(
    (node: Element | null) => {
      if (node !== null) {
        getRect(node)
          .then((res: any) => {
            setActionWidth((v) => ({ ...v, right: res.width }));
          });
      }
    },
    [props.rightAction]
  );

  const open = (side: SwipeSide) => {
    // const offset = side === 'left' ? leftWidth : -rightWidth
    const name = props.name as number | string;

    props.onOpen?.({ name, position: side });
  };

  const close = (position?: SwipeSide) => {
    props.onClose?.({
      name: props.name as number | string,
      position: position || 'left'
    });
  };

  useImperativeHandle(instanceRef, () => ({
    open,
    close: () => {
      slideAnimation(0);
      close(position);
    }
  }));

  const { current: panX } = React.useRef(new Animated.Value(0));
  const currValue = React.useRef(0);
  const prevValue = React.useRef(0);

  React.useEffect(() => {
    const subs = panX.addListener(({ value }) => {
      currValue.current = value;
    });

    return () => {
      panX.removeListener(subs);
    };
  }, [panX]);

  const slideAnimation = React.useCallback(
    (toValue: number) => {
      Animated.spring(panX, {
        toValue,
        useNativeDriver: true
      }).start();
      prevValue.current = toValue;
    },
    [panX]
  );

  const onPanResponderMove = (_: any, { dx }: PanResponderGestureState) => {
    if (!prevValue.current) {
      prevValue.current = currValue.current;
    }
    const newDX = prevValue.current + dx;

    if (currValue.current > 0) { // 左边
      if (Math.abs(newDX) > leftWidth) return;
    } else {
      if (Math.abs(newDX) > rightWidth) return;
    }

    // if (Math.abs(newDX) > deviceWidth / 2) {
    //     return;
    // }
    panX.setValue(newDX);
  };

  let oldVal = 0;
  let position = '';

  const onPanResponderRelease = (_: any, { dx, ...obj }: PanResponderGestureState) => {
    prevValue.current = currValue.current;
    if (
      (Math.sign(dx) > 0 && !props.leftAction) ||
          (Math.sign(dx) < 0 && !props.rightAction)
    ) {
      return slideAnimation(0);
    }

    const maxValue = currValue.current > 0 ? leftWidth : rightWidth;

    // if (Math.abs(currValue.current) >= deviceWidth / 3) {
    if (Math.abs(currValue.current) >= maxValue / 2) {
      // slideAnimation(currValue.current > 0 ? rightWidth : -leftWidth);
      slideAnimation(currValue.current > 0 ? leftWidth : -rightWidth);
      if (currValue.current > 0) {
        if (oldVal === leftWidth) {

        } else {
          oldVal = leftWidth;
          position = 'left';
          open('left');
        }
      } else {
        if (oldVal === rightWidth) {

        } else {
          oldVal = rightWidth;
          position = 'right';
          open('right');
        }
      }
    } else {
      slideAnimation(0);
      if (oldVal === 0) {

      } else if (oldVal !== 0) {
        oldVal = 0;
        close(position);
      }
    }
  };

  const { current: _panResponder } = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => !props.disabled,
      onPanResponderGrant: () => false,
      onPanResponderMove,
      onPanResponderRelease
    })
  );

  const renderLeft = () => {
    if (props.beforeClose) {
      return (
        <View
          style={{
            width: leftWidth,
            zIndex: 1
          }}
          onTouchStart={() => {
            props.beforeClose(position);
          }}
        >
          {props.leftAction}
        </View>
      );
    }

    if (props.onActionClick) {
      return (
        <View
          style={{
            width: leftWidth,
            zIndex: 1
          }}
          onTouchStart={(e) => {
            props.onActionClick(e, position);
          }}
        >
          {props.leftAction}
        </View>
      );
    }

    return (
      <View
        style={{
          width: leftWidth,
          zIndex: 1
        }}

      >
        {props.leftAction}
      </View>
    );
  };

  const renderRight = () => {
    if (props.beforeClose) {
      return (
        <View
          style={{
            width: rightWidth,
            zIndex: 1
          }}

          onTouchStart={(e) => {
            props.beforeClose(position);
          }}
        >
          {props.rightAction}
        </View>
      );
    }

    if (props.onActionClick) {
      return (
        <View
          style={{
            width: rightWidth,
            zIndex: 1
          }}

          onTouchStart={(e) => {
            props.onActionClick(e, position);
          }}
        >
          {props.rightAction}
        </View>
      );
    }

    return (
      <View
        style={{
          width: rightWidth,
          zIndex: 1
        }}
      >
        {props.rightAction}
      </View>
    );
  };

  const wrapStyle = [
    { width: '100%',justifyContent: 'center' },
    fConStyle(toObj(style || {}))
  ];

  const childrens = React.Children.toArray(children);
  const { length } = childrens;

  return (
    <View
      style={wrapStyle}
    >
      <View
        style={[
          styles.hidden,
          {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        ]}
      >

        { renderLeft() }
        <View style={{ flex: 0 }} />
        { renderRight()}
      </View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: panX
            }
          ],
          zIndex: 2
        }}
        {..._panResponder.panHandlers}
      >
        <View
          style={StyleSheet.flatten([
            {
              ...Platform.select({
                ios: {
                  padding: 14
                },
                default: {
                  padding: 14
                }
              }),
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff'
            }

          ])}
        >
          <View >
            {React.Children.map(
              childrens,
              (child, index) =>
                child && [
                  child,
                  index !== length - 1 && <View />
                ]
            )}
          </View>
        </View>
      </Animated.View>
    </View>
  );
});

Swipe.defaultProps = defaultProps;
Swipe.displayName = 'NutSwipe';