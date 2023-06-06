import React, {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from 'react';
import { View, Text, Animated, Platform } from 'react-native';
import Icon from '../icon';

import { IComponent, ComponentDefaults } from '../utils/typings';
import pt from '../utils/pt';
import * as LinearGradient from 'react-native-linear-gradient';

export type ProgressSize = 'small' | 'base' | 'large';
export type TextType = 'icon' | 'text';

import { useConfig } from '../configprovider';
import progressStyles from './styles';

export interface ProgressProps extends IComponent {
  className: string;
  style: CSSProperties;
  isShowPercentage: boolean;
  percentage: number;
  fillColor: string;
  strokeColor: Array<string>;
  strokeWidth: string;
  size: ProgressSize;
  textColor: string;
  textWidth: string;
  showText: boolean;
  textInside: boolean;
  textBackground: Array<string>;
  textType: TextType;
  status: boolean;
  iconName: string;
  iconColor: string;
  iconSize: string;
  children: ReactNode;
}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: {},
  isShowPercentage: true,
  percentage: 0,
  fillColor: '#f3f3f3',
  strokeColor: ['#fa2c19', '#fa6419'],
  strokeWidth: '10',
  textColor: '',
  textWidth: '',
  showText: true,
  textInside: false,
  textBackground: ['#fa2c19', '#fa6419'],
  textType: 'text',
  status: false,
  iconName: 'checked',
  iconColor: '#439422',
  iconSize: '16px',
  children: undefined,
} as ProgressProps;

export const Progress: FunctionComponent<
  Partial<ProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [proWidth, setProWidth] = useState(0);
  const [proHeight, setProHeight] = useState(0);

  const [proInnerWidth, setProInnerWidth] = useState(0);
  const [proInnerHeight, setProInnerHeight] = useState(0);

  const animationRef = useRef(new Animated.Value(0));
  const animationRefTag = useRef(new Animated.Value(0));

  const {
    className,
    style,
    isShowPercentage,
    percentage,
    fillColor,
    strokeColor,
    strokeWidth,
    size,
    textColor,
    textWidth,
    showText,
    textInside,
    textBackground,
    textType,
    status,
    iconName,
    iconColor,
    iconSize,
    children,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const { theme } = useConfig();

  const styles = progressStyles(theme);

  useEffect(() => {
    //setValue(props.value)
    startAnimated();
  }, [props.percentage, proWidth]);

  const startAnimated = () => {
    Animated.timing(animationRef.current, {
      toValue: parseInt((props.percentage / 100) * proWidth),
      duration: 800,
      useNativeDriver: false,
    }).start();

    //let leftV = 0;
    Animated.timing(animationRefTag.current, {
      toValue:
        parseInt((props.percentage / 100) * proWidth) - proInnerWidth / 2,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const getHeight = () => {
    let height;
    switch (size) {
      case 'small':
        height = pt(12);
        break;
      case 'base':
        height = pt(20);
        break;
      case 'large':
        height = pt(30);
        break;

      default:
        height = parseInt(strokeWidth);
        break;
    }
    return height;
  };

  //hex -> rgba
  const hexToRgba = (hex, opacity) => {
    return (
      'rgba(' +
      parseInt('0x' + hex.slice(1, 3)) +
      ',' +
      parseInt('0x' + hex.slice(3, 5)) +
      ',' +
      parseInt('0x' + hex.slice(5, 7)) +
      ',' +
      opacity +
      ')'
    );
  };

  const LinearGradientModuleRef = (LinearGradient as any);
  const LinearGradientComponent = LinearGradientModuleRef.LinearGradient || LinearGradientModuleRef.default;

  return (
    <View style={[styles.containerOut, style]} {...rest}>
      <View style={styles.containerInner}>
        <View
          style={[
            styles.progressBg,
            {
              backgroundColor: fillColor || '#f3f3f3',
              height: getHeight(),
              borderRadius: getHeight() / 2,
            },
          ]}
          onLayout={(e) => {
            setProWidth(e.nativeEvent.layout.width);
            setProHeight(e.nativeEvent.layout.height);
          }}
        >
          <Animated.View
            style={{ width: animationRef.current, height: getHeight() }}
          >
            {Platform.OS === 'web' ? (
              <View
                style={{
                  flex: 1,
                  height: getHeight(),
                  borderRadius: getHeight() / 2,
                  background: `linear-gradient(90deg, ${hexToRgba(
                    strokeColor[0],
                    1
                  )} 0%,${hexToRgba(strokeColor[1], 1)} 100%)`,
                }}
              />
            ) : (
              <LinearGradientComponent
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={strokeColor}
                style={{
                  flex: 1,
                  height: getHeight(),
                  borderRadius: getHeight() / 2,
                }}
              ></LinearGradientComponent>
            )}
          </Animated.View>
          {showText && textInside && (
            <Animated.View
              style={{
                position: 'absolute',
                marginLeft: animationRef.current,
                left: -proInnerWidth / 2,
                top: -((proInnerHeight - proHeight) / 2),
                marginBottom: 'auto',
                marginTop: 'auto',
              }}
              onLayout={(e) => {
                setProInnerWidth(e.nativeEvent.layout.width);
                setProInnerHeight(e.nativeEvent.layout.height);
              }}
            >
              {textType === 'icon' ? (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  size={iconSize}
                  name={iconName}
                  color={iconColor}
                />
              ) : <LinearGradientComponent
                start={{ x : 0, y : 0 }}
                end={{ x : 1, y : 0 }}
                colors={textBackground}
                style={styles.progreessTg}>
                {textType === 'text' && (
                <Text
                  style={{ color: textColor || '#333' }}
                >
                  {percentage}
                  {isShowPercentage ? '%' : ''}
                </Text>
              )}
              </LinearGradientComponent>}

              {Platform.OS === 'web' ? (
                <View
                  style={[
                    styles.progreessTg,
                    {
                      background: `linear-gradient(90deg, ${hexToRgba(
                        textBackground[0],
                        1
                      )} 0%,${hexToRgba(textBackground[1], 1)} 100%)`,
                    },
                  ]}
                >
                  {textType === 'text' && (
                    <Text style={{ color: textColor || '#333' }}>
                      {percentage}
                      {isShowPercentage ? '%' : ''}
                    </Text>
                  )}
                </View>
              ) : (
                <LinearGradientComponent
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={textBackground}
                  style={styles.progreessTg}
                >
                  {textType === 'text' && (
                    <Text style={{ color: textColor || '#333' }}>
                      {percentage}
                      {isShowPercentage ? '%' : ''}
                    </Text>
                  )}
                </LinearGradientComponent>
              )}
            </Animated.View>
          )}
        </View>
        {showText && !textInside && (
          <>
            {children ? (
              <View>{children}</View>
            ) : (
              <View>
                <Text style={{ color: textColor || '#000' }}>
                  {percentage}
                  {isShowPercentage ? '%' : ''}
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

Progress.defaultProps = defaultProps;
Progress.displayName = 'NutProgress';
