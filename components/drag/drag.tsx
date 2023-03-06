import React, { FunctionComponent, useState, useRef } from 'react';
import { View, StyleProp, PanResponder, ViewStyle, StyleSheet, Animated } from 'react-native';
import { DiviceWidth, DiviceHeight } from '../utils';

export interface DragProps {
  attract: boolean; // 是否开启自动吸边
  direction: 'x' | 'y' | 'lock' | undefined; // 拖拽元素的拖拽方向限制，x、y、lock三选一
  boundary: { // 拖拽元素的拖拽边界
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  style?: StyleProp<ViewStyle> | undefined;
  children: any;
}
const defaultProps = {
  attract: false,
  direction: undefined,
  boundary: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
} as DragProps;

export const Drag: FunctionComponent<
Partial<DragProps>
> = (props) => {
  const { attract, direction, boundary, children, style, ...reset } =
    {
      ...defaultProps,
      ...props
    };

  const [boundaryState, setBoundaryState] = useState(boundary);
  const {current: curTop} = React.useRef(new Animated.Value(boundaryState.top));
  const {current: curLeft} = React.useRef(new Animated.Value(boundaryState.left));
  const middleLine = useRef(0);
  const touchX = useRef(0);
  const touchY = useRef(0);

  const getInfo = (e: any) => {
    const { x, y, width, height } = e.nativeEvent.layout;

    const offsetWidth = width;
    const offsetHeight = height;
    const offsetTop = y;
    const offsetLeft = x;

    const clientWidth = DiviceWidth;
    const clientHeight = DiviceHeight;
    const { top, left, bottom, right } = boundary;
    const boundaryState = {
      top: -offsetTop + top,
      left: -offsetLeft + left,
      bottom: clientHeight - offsetHeight - offsetTop - bottom,
      right: clientWidth - offsetWidth - offsetLeft - right
    };

    setBoundaryState(boundaryState);
    middleLine.current = clientWidth - offsetWidth - offsetLeft - (clientWidth - offsetWidth) / 2;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onStartShouldSetPanResponderCapture: () => false,
    onPanResponderTerminationRequest: () => false, // 这个很重要，这边不放权
    onShouldBlockNativeResponder: () => false,
    onMoveShouldSetPanResponder: (evt, g) => {
      // 解决PanResponder中的onPress无作用
      // 当大于5时才进入移动事件，有的情况下需要将onStartShouldSetPanResponderCapture设为false
      if (Math.abs(g.dx) > 5 || Math.abs(g.dy) > 5) {
        return true;
      } else if (Math.abs(g.dx) <= 5 || Math.abs(g.dy) <= 5) {
        return false;
      }

      return false;
    },
    onMoveShouldSetPanResponderCapture: () => false,

    onPanResponderGrant: () => {
      touchX.current = curLeft._value || 0;
      touchY.current = curTop._value || 0;
    },
    onPanResponderMove: (e, g) => {
      let left = touchX.current + g.dx;
      let top = touchY.current + g.dy;

      if (left <= boundaryState.left) {
        left = boundaryState.left;
      }
      if (left > boundaryState.right) {
        left = boundaryState.right;
      }
      if (top <= boundaryState.top) {
        top = boundaryState.top;
      }
      if (top >= boundaryState.bottom) {
        top = boundaryState.bottom;
      }

      if (direction === 'x') {
        top = touchY.current;
      }

      if (direction === 'y') {
        left = touchX.current;
      }

      curTop.setValue(top);
      curLeft.setValue(left);

    },
    onPanResponderRelease: () => {
      const left = curLeft._value || 0;
      const top = curTop._value || 0;

      if (direction !== 'y' && attract) {
        if (left < middleLine.current) {
            curLeft.setValue(boundaryState.left);
        } else {
            curLeft.setValue(boundaryState.right);
        }
      }
    },
  });

  return (
    <View style={[styles.wrap, style]} {...reset} onLayout={getInfo}>
      <Animated.View style={{transform: [
            {
              translateY: curTop
            },
            {
                translateX: curLeft
            }
          ]}} {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </View>
  );
};

Drag.defaultProps = defaultProps;
Drag.displayName = 'NutDrag';

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    zIndex: 9997
  }
});
