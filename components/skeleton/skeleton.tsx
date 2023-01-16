import React, {
  FunctionComponent,
  useRef,
  useEffect
} from 'react';

import {
  View,
  ViewStyle,
  StyleProp,
  Animated,
  Platform
} from 'react-native';

import Avatar from '../avatar';

import LinearGradient from 'react-native-linear-gradient';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import pt from '../utils/pt';

import { useConfig } from '../configprovider';
import skeletonStyles from './styles';

type avatarShape = 'round' | 'square';

export interface SkeletonProps {
  width: number; // 每行宽度
  height: number; // 每行高度
  animated: boolean; // 是否开启骨架屏动画
  row: number; // 设置段落行数
  title: boolean; // 是否显示段落标题
  avatar: boolean; // 是否显示头像
  style?: StyleProp<ViewStyle>;
  avatarSize: number; // 头像形状：正方形/圆形
  round: boolean; // 标题/段落是否采用圆角风格
  loading: boolean; // 是否显示骨架屏(true不显示骨架屏，false显示骨架屏)
  avatarShape: avatarShape; // 头像形状：正方形/圆形
  children?: React.ReactNode;
}
const defaultProps = {
  width: 100,
  height: 100,
  row: 1,
  animated: false,
  title: false,
  avatar: false,
  round: false,
  avatarSize: 50,
  loading: false,
  avatarShape: 'round'
} as SkeletonProps;

export const Skeleton: FunctionComponent<Partial<SkeletonProps>> = (props) => {
  const {
    width,
    height,
    animated,
    row,
    title,
    avatar,
    avatarSize,
    style,
    round,
    loading,
    children,
    avatarShape
  } = {
    ...defaultProps,
    ...props
  };

  const { theme } = useConfig();

  const styles = skeletonStyles(theme);

  const animationRef = useRef(new Animated.Value(0));
  const animationLoop = useRef<Animated.CompositeAnimation>();
  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);

  const repeatLines = (num: number) => {
    return Array.from({ length: num }, (v, i) => i);
  };

  useEffect(() => {
    animationLoop.current = Animated.timing(animationRef.current, {
      toValue: 2,
      delay: 400,
      duration: 1500,
      useNativeDriver: !!Platform.select({
        web: false,
        native: true
      })
    });
    animationRef.current.setValue(0);
    Animated.loop(animationLoop.current).start();
  }, []);

  const getStyle = () => {
    if (avatarSize) {
      return {
        width: avatarSize,
        height: avatarSize
      };
    }

    return {
      width: 50,
      height: 50
    };
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {}))
  ];

  const blockStyle = [
    styles.blockStyle,
    round ? styles.blockRoundStyle : {},
    { width, height }
  ];

  const avatarStyle = [
    styles.avatarStyle,
    getStyle()
  ];

  return (
    <>
      {loading ? (
        <View>{children}</View>
      ) : (
        <View

          style={wrapStyle}

          onLayout={({ nativeEvent }) => {
            setLayoutWidth(nativeEvent.layout.width);
          }}
        >
          {
            animated ? (
              <Animated.View
                style={[
                  styles.skeletonAnimation,
                  { height: height * row, width: width / 4 },
                  {
                    transform: [
                      {
                        translateX: animationRef.current.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-width / 4, width]
                        })
                      }
                    ]
                  }
                ]}
              >
                <LinearGradient
                  style={{
                    height: height * row + (row > 1 ? row * pt(20) : 0) + (title ? pt(30) : 0)
                  }}
                  colors={[
                    'rgba(255,255,255,0.3)',
                    'rgba(255,255,255,0.5)',
                    'rgba(255,255,255,0.3)'
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />

              </Animated.View>
            ) : null
          }
          <View
            style={styles.nutSkeletonContent}
          >
            {avatar && (
              <Avatar
                style={avatarStyle}
                bgColor='rgb(239, 239, 239)'
                shape={avatarShape}
              />
            )}

            <View
              style={styles.skeletonContentLine}
            >
              {
                title && (
                  <View
                    style={styles.skeletonTitle}
                  />
                )
              }
              {repeatLines(row).map((item, index) => {
                return (
                  <View
                    style={blockStyle}
                    key={+index}
                  />
                );
              })}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

Skeleton.defaultProps = defaultProps;
Skeleton.displayName = 'NutSkeleton';
