import * as React from 'react';
import { Text, Animated, StyleProp, ViewStyle } from 'react-native';
import Background, { BgProps } from './bg';
import { isLinearGradient } from '../utils/color';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTextStyle from '../utils/filter-text-style';
import notifyStyles from './styles';
import { getDefaultConfig } from '../configprovider';

const { theme } = getDefaultConfig();
const styles = notifyStyles(theme);

export interface NotificationProps {
  id: string;
  style: StyleProp<ViewStyle> | undefined;
  message: string;
  color: string;
  duration: number;
  type: string;
  backgroundColor: string;
  children: React.ReactNode;
  position: string;
  //   isWrapTeleport: boolean;
  onClosed: () => void;
  onPress: () => void;
  onAnimationEnd?: () => void;
}

interface State {
  show: boolean;
  fadeAnim: any;
}

export default class Notification extends React.PureComponent<
  NotificationProps,
  State
> {
  closeTimer: number | undefined;

  anim: Animated.CompositeAnimation | null;

  static newInstance: (properties: NotificationProps, callback: any) => void;

  constructor(props: NotificationProps) {
    super(props);

    this.close = this.close.bind(this);
    this.startCloseTimer = this.startCloseTimer.bind(this);
    this.clearCloseTimer = this.clearCloseTimer.bind(this);
    this.clickCover = this.clickCover.bind(this);
    this.state = {
      show: true,
      fadeAnim: new Animated.Value(0),
    };
  }

  close() {
    let { onAnimationEnd, onClosed } = this.props;
    this.setState({
      show: false,
    });
    this.clearCloseTimer();
    onAnimationEnd && onAnimationEnd();
    onClosed && onClosed();
  }

  startCloseTimer() {
    const { duration } = this.props;
    if (duration) {
      this.closeTimer = window.setTimeout(() => {
        this.close();
      }, duration);
    }
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = -1;
    }
  }

  clickCover() {
    this.props.onPress();
  }

  componentDidMount() {
    this.startCloseTimer();
    let { onAnimationEnd } = this.props;

    const duration = this.props.duration as number;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration),
    ];
    if (duration > 0) {
      animArr.push(
        timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        })
      );
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    this.clearCloseTimer();
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }

  getBgByButtonType = (type: any): BgProps => {
    const objStyle = {
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
    };

    if (type === 'base') {
      return {
        ...objStyle,
        useAngle: true,
        angle: 135,
        locations: [0, 0.45, 0.83, 1],
        colors: theme['$notify-base-background-color'],
      };
    } else if (type === 'primary') {
      return {
        ...objStyle,
        useAngle: true,
        angle: 315,
        locations: [0, 1],
        colors: theme['$notify-primary-background-color'],
      };
    } else if (type === 'success') {
      return {
        ...objStyle,
        useAngle: true,
        angle: 135,
        locations: [0, 0.45, 0.83, 1],
        colors: theme['$notify-success-background-color'],
      };
    } else if (type === 'warning') {
      return {
        ...objStyle,
        useAngle: true,
        angle: 135,
        locations: [0, 1],
        colors: theme['$notify-warning-background-color'],
      };
    } else if (type === 'danger') {
      return {
        locations: [],
        colors: [],
      };
    }
    return {
      locations: [],
      colors: [],
    };
  };

  getBgStyle = () => {
    let { type } = this.props;
    return this.getBgByButtonType(type);
  };

  renderChildren = () => {
    let { children, style, message, color } = this.props;

    let textStyle = [
      styles.text,
      color ? { color } : {},
      fTextStyle(toObj(style || {})),
    ];

    if (typeof children === 'string') {
      return <Text style={textStyle}>{children}</Text>;
    }
    if (children) {
      return children;
    }
    return <Text style={textStyle}>{message}</Text>;
  };

  render() {
    const { style, backgroundColor, type, position } = this.props;

    const { fadeAnim } = this.state;
    console.log('props', this.context);

    let wrapStyle = [
      styles.container,
      styles[`containerPosition${position}`],
      styles[`containerType${type}`],
      fConStyle(toObj(style || {})),
      backgroundColor && !isLinearGradient(backgroundColor)
        ? { backgroundColor: backgroundColor }
        : {},
      { opacity: fadeAnim },
    ];

    const innerStyle = [
      styles.container,
      styles[`containerPosition${position}`],
      styles[`containerType${type}`],
      fConStyle(toObj(style || {})),
      backgroundColor && !isLinearGradient(backgroundColor)
        ? { backgroundColor: backgroundColor }
        : {},
    ];

    return (
      <Animated.View style={wrapStyle}>
        <Background
          style={innerStyle}
          {...this.getBgStyle()}
          type={type}
          color={backgroundColor}
        >
          {this.renderChildren()}
        </Background>
      </Animated.View>
    );
  }
}

Notification.newInstance = (properties, callback) => {
  const id = properties.id ? properties.id : `${new Date().getTime()}`;

  let called = false;
  const ref = (instance: any) => {
    if (called) {
      return;
    }
    called = true;

    callback({
      component: instance,
      destroy() {},
    });
  };
  ref(this);
};
