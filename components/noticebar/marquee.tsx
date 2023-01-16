import React from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  Text,
  TextStyle,
  View
} from 'react-native';

export interface MarqueeProps {
  text?: React.ReactNode;
  loop?: boolean;
  leading?: number;
  delay?: number;
  speed?: number;
  style?: StyleProp<TextStyle>;
  maxWidth?: number;
  wrapable?: boolean;
}

class Marquee extends React.PureComponent<MarqueeProps, any> {
  static defaultProps = {
    text: '',
    loop: true,
    leading: 1000,
    delay: 1000,
    speed: 50,
    maxWidth: 1000,
    wrapable: false
  };

  texts: any;
  left: any;

  constructor(props: MarqueeProps) {
    super(props);

    this.texts = {};
    this.left = new Animated.Value(0);
    this.state = {
      twidth: 0,
      width: 0
    };
  }

  onLayout = (e: LayoutChangeEvent) => {
    if (this.state.twidth) {
      return;
    }

    this.setState(
      {
        twidth: e.nativeEvent.layout.width
      },
      () => {
        this.tryStart();
      }
    );
  };

  tryStart() {
    if (this.state.twidth > this.state.width && this.state.width) {
      this.startMove();
    }
  }

  onLayoutContainer = (e: LayoutChangeEvent) => {
    if (!this.state.width) {
      this.setState(
        {
          width: e.nativeEvent.layout.width
        },
        () => {
          this.left.setValue(0);
          this.tryStart();
        }
      );
    }
  };

  startMove = () => {
    const { speed = 50, loop } = this.props;
    const SPPED = (1 / speed) * 1000;
    const { props } = this;

    Animated.timing(this.left, {
      toValue: 1,
      duration: this.state.twidth * SPPED,
      easing: Easing.linear,
      delay: props.delay,
      isInteraction: false,
      useNativeDriver: true
    }).start(() => {
      if (loop) {
        this.moveToHeader();
      }
    });
  };

  moveToHeader = () => {
    Animated.timing(this.left, {
      toValue: 0,
      duration: 0,
      delay: this.props.delay,
      isInteraction: false,
      useNativeDriver: true
    }).start(() => {
      this.startMove();
    });
  };

  handleText = (text = '') => {
    const value = ' ';
    const arr = text.split('');

    arr.push(Array.from(new Array(80)).fill(value).join(''));
    arr.unshift(Array.from(new Array(80)).fill(value).join(''));

    return arr.join('');
  };

  render() {
    const { width, twidth } = this.state;
    const { style, text, maxWidth, wrapable } = this.props;

    let textChildren;

    if (wrapable) {
      textChildren = (
        <Text
          onLayout={this.onLayout}
          style={style}
        >
          { text }

        </Text>
      );
    } else {
      textChildren = (
        <Text
          onLayout={this.onLayout}
          style={style}
        >
          {
            typeof text === 'string'
              ? this.handleText(text)
              : null
          }

        </Text>
      );
    }

    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        onLayout={this.onLayoutContainer}
      >
        <Animated.View
          style={{
            flexDirection: 'row',
            transform: [
              {
                translateX: this.left.interpolate({
                  inputRange: [0, 1],
                  outputRange: [wrapable ? maxWidth : 0, wrapable ? -2 * twidth + width : -1.2 * twidth + width]
                })
              }
            ],
            width: maxWidth
          }}
        >
          {textChildren}
        </Animated.View>
      </View>
    );
  }
}

export default Marquee;
