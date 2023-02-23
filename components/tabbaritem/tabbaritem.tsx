import React, { FunctionComponent, useEffect } from 'react';

import Icon from '../icon';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';

import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import px from '../utils/px';
import pt from '../utils/pt';

export interface TabbarItemProps {
  dot: boolean;
  size: string | number;
  tabTitle: string;
  icon: string;
  onhref: () => {};
  num: string | number;
  active: boolean;
  activeColor: string;
  unactiveColor: string;
  index: number;
  style: StyleProp<ViewStyle>;
  handleClick: (idx: number) => void;
}

const defaultProps = {
  dot: false,
  size: '',
  tabTitle: '',
  icon: '',
  onhref: () => {},
  num: '',
  active: false,
  activeColor: '',
  unactiveColor: '',
  index: 0,
  handleClick: (idx) => {}
} as TabbarItemProps;

export const TabbarItem: FunctionComponent<Partial<TabbarItemProps>> = (
  props
) => {
  const {
    dot,
    size,
    style,
    tabTitle,
    icon,
    onhref,
    num,
    active,
    activeColor,
    unactiveColor,
    index,
    handleClick
  } = {
    ...defaultProps,
    ...props
  };

  useEffect(() => {
    if (active && onhref) {
      // window.location.href = href
      onhref();
    }
  }, [active, onhref]);

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {}))
  ];

  const aColor = (activeColor || styles.active.color);
  const unaColor = (unactiveColor || styles.default.color);
  const tabTitleStyle = [
    {
      color: active ? aColor : unaColor
    },
    styles.navWord,
    !icon ? styles.bigWord : {}
  ];

  return (
    <TouchableHighlight
      activeOpacity={1}
      style={wrapStyle}
      underlayColor={null}
      onPress={() => {
        handleClick(index);
      }}
    >
      <View >
        <View
          style={styles.bIcon}
        >
          {!dot
            ? (
              <>
                {num && num <= 99
                  ? (
                    <View
                      style={styles.tips}
                    >
                      <Text
                        style={styles.num}
                      >
                        {num}
                      </Text>

                    </View>
                  )
                  : null}
                {num && num >= 100
                  ? (
                    <View
                      style={styles.tips}
                    >
                      <Text
                        style={styles.num}
                      >
                  99+
                      </Text>

                    </View>
                  )
                  : null}
              </>
            )
            : (
              <View
                style={styles.dot}
              />
            )}

          {icon
            ? (
              <View>
                <Icon
                  size={size}
                  color={active ? aColor : unaColor}
                  name={icon}
                />
              </View>
            )
            : null}
          <View>
            <Text
              style={tabTitleStyle}
            >
              {tabTitle}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bIcon: {
    position: 'relative',
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center'
  },
  tips: {
    position: 'absolute',
    backgroundColor: '#fa2c19',
    borderWidth: px(1),
    borderColor: '#fff',
    borderRadius: pt(14),
    textAlign: 'center',
    top: -pt(4),
    right: -pt(16),
    zIndex: 1

  },
  num: {
    color: '#fff',
    fontSize: pt(20),
    paddingTop: pt(1),
    paddingRight: pt(2),
    paddingBottom: pt(2),
    paddingLeft: pt(6)
  },
  active: {
    color: '#fa2c19'
  },
  default: {
    color: '#1a1a1a'
  },
  navWord: {
    fontSize: pt(20)
  },
  bigWord: {
    fontSize: pt(32)
  },
  dot: {
    position: 'absolute',
    width: pt(14),
    height: pt(14),
    borderRadius: pt(7),
    padding: 0,
    backgroundColor: '#fa2c19',
    top: -2,
    right: -5
  }
});
