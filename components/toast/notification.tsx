import * as React from 'react';

import {
  View,
  Text,
  Animated,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import pt from '../utils/pt';

import Icon from '../icon';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import fTextStyle from '../utils/filter-text-style';

export interface NotificationProps {
  id?: string;
  style?: StyleProp<ViewStyle> | undefined;
  icon: string | null;
  iconSize: string;
  msg: string | React.ReactNode;
  bottom: number;
  duration: number;
  center: boolean;
  type: string;
  title: string;
  customClass: string;
  size: string | number;
  textAlignCenter: boolean;
  // loadingRotate: boolean
  bgColor: string;
  cover: boolean;
  coverColor: string;
  closeOnClickOverlay: boolean;
  onClose: () => void;
  onAnimationEnd: () => void;
  // className?: string
}

export default class Notification extends React.PureComponent<NotificationProps> {
  static newInstance: (properties: NotificationProps, callback: any) => void;

  closeTimer: number | undefined;
  anim: Animated.CompositeAnimation | null;
  state = {
    fadeAnim: new Animated.Value(0),
  };

  close = () => {
    const { onClose, onAnimationEnd } = this.props;
    this.clearCloseTimer();
    onClose();
    onAnimationEnd && onAnimationEnd();
  };

  startCloseTimer = () => {
    const { duration } = this.props;
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = -1;
    }
  };

  clickCover = () => {
    const { closeOnClickOverlay } = this.props;
    if (closeOnClickOverlay) {
      this.close();
    }
  };

  componentDidMount() {
    this.startCloseTimer();
    const { onAnimationEnd } = this.props;

    const duration = this.props.duration;
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

  renderContent = () => {
    const {
      bgColor,
      icon,
      style,
      iconSize,
      title,
      textAlignCenter,
      msg,
      size,
    } = this.props;

    const { fadeAnim } = this.state;

    const innerStyle = [
      styles.innerContainer,
      { backgroundColor: bgColor },
      { opacity: fadeAnim },
    ];
    const textStyle = [
      styles.title,
      fTextStyle(toObj(style || {})),
      styles[`textAlign${textAlignCenter}`],
      styles[`textSize${size}`],
    ];

    return (
      <Animated.View style={innerStyle}>
        {icon ? (
          <View style={styles.iconContainer}>
            <Icon name={icon || ''} color="#ffffff" size={iconSize} />
          </View>
        ) : null}
        {title ? <Text style={textStyle}>{title}</Text> : null}
        {msg ? <Text style={textStyle}>{msg}</Text> : null}
      </Animated.View>
    );
  };

  render() {
    const {
      id,
      style,
      center,
      coverColor,
      cover,
      bottom,
      closeOnClickOverlay,
    } = this.props;

    const wrapStyle = [
      styles.container,
      styles[`containerCenter${center}`],
      !center ? { bottom } : {},
      fConStyle(toObj(style || {})),
      cover ? { backgroundColor: coverColor } : {},
    ];

    if (closeOnClickOverlay) {
      return (
        <TouchableHighlight
          underlayColor={null}
          activeOpacity={1}
          style={wrapStyle}
          onPress={this.clickCover}
        >
          <TouchableHighlight underlayColor={null} activeOpacity={1}>
            <View key={`toast-${id}`}>{this.renderContent()}</View>
          </TouchableHighlight>
        </TouchableHighlight>
      );
    }

    return <View style={wrapStyle}>{this.renderContent()}</View>;
  }
}

Notification.newInstance = (properties, callback) => {
  let called = false;
  function ref(instance: any) {
    if (called) {
      return;
    }
    called = true;
    // eslint-disable-next-line standard/no-callback-literal
    callback({
      component: instance,
      destroy() {},
    });
  }
  ref(this);
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 9999,
  },
  containerCentertrue: {
    justifyContent: 'center',
  },
  containerCenterfalse: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    minWidth: pt(288),
    maxWidth: pt(480),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pt(48),
    paddingBottom: pt(48),
    paddingLeft: pt(60),
    paddingRight: pt(60),
    borderRadius: pt(24),
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pt(16),
  },
  title: {
    fontSize: pt(32),
    marginBottom: pt(2),
    color: '#fff',
  },
  textAligntrue: {
    textAlign: 'center',
  },
  textAlignfalse: {
    textAlign: 'left',
  },
  textSizelarge: {
    fontSize: pt(32),
  },
  textSizesmall: {
    fontSize: pt(24),
  },
});
