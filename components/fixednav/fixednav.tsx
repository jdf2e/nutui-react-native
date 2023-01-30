import React, { FunctionComponent, MouseEvent, useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Image, TouchableOpacity } from 'react-native';
import Icon from '../icon';
// import Overlay from '../overlay/index.rn';
import { IComponent } from '../utils/typings';
import { useConfig } from '../configprovider';
import fixednavStyles from './styles';

type Direction = 'right' | 'left';
type Position = {
  top?: number | string;
  bottom?: number | string;
};

export interface FixedNavProps extends IComponent {
  visible: boolean;
  overlay: boolean;
  navList: any[];
  activeText: string;
  unActiveText: string;
  position: Position;
  type: Direction;
  onChange: (v: any) => void;
  onSelected: (v: any, event: MouseEvent) => void;
  slotList: React.ReactNode;
  slotBtn: React.ReactNode;
}

const defaultProps = {
  navList: [],
  activeText: '',
  unActiveText: '',
  //   type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto'
  },
  onSelected: () => {},
  onChange: () => {}
};

export const FixedNav: FunctionComponent<
Partial<FixedNavProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    // overlay,
    visible,
    navList,
    activeText,
    unActiveText,
    position,
    onChange,
    onSelected,
    type,
    slotList,
    slotBtn
  } = {
    ...defaultProps,
    ...props
  };
  const { locale, theme } = useConfig();

  const styles = fixednavStyles(theme);

  const fadeAnim = useRef(new Animated.Value(type === 'left' ? -375 : 375)).current;
  const [navWidth, setNavWidth] = useState(375);

  const onSelectCb = (event: MouseEvent, item: any): void => {
    onSelected(item, event);
  };

  const onUpdateValue = (value = !visible): void => {
    onChange(value);
  };
  const getNavInfo = (e: any) => {
    const { width } = e.nativeEvent.layout;

    setNavWidth(width);
  };

  console.log('visible', visible);

  useEffect(() => {
    console.log(fadeAnim);
    Animated.timing(fadeAnim, {
      toValue: visible ? 0 : type === 'left' ? -navWidth : navWidth,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [fadeAnim, navWidth, visible, type]);

  return (
    <View style={[styles.nutFixednav, type === 'left' && styles.nutFixednavLeft, position]}>
      {/* {overlay && (
        <Overlay
          visible={visible}
          zIndex={200}
          onPress={() => onUpdateValue(false)}
        />
      )} */}
      <View style={styles.nutFixednavList}>
        <Animated.View style={[
          styles.nutFixednav__list,
          { transform: [{ translateX: fadeAnim }] },
          type === 'left' && styles.nutFixednav__listLeft
        ]}
        onLayout={getNavInfo}
        >
          <>
            {slotList || navList.map((item: any, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.nutFixednav__listItem}
                  onPress={(event: any) => onSelectCb(event, item)}
                  key={item.id || index}
                >
                  <Image style={styles.nutFixednav__listImage} source={{ uri: item.icon }} />
                  <Text style={styles.nutFixednav__listText}>{item.text}</Text>
                  {item.num && <Text style={styles.nutFixednav__b}>{item.num}</Text>}
                </TouchableOpacity>
              );
            })}
          </>
        </Animated.View>
      </View>
      <TouchableOpacity
        style={[
          styles.nutFixednav__btn,
          type === 'left' && styles.nutFixednav__btnLeft
        ]}
        activeOpacity={1}
        onPress={() => onUpdateValue()}
      >
        <>
          {slotBtn || (
            <>
              <Icon style={{ transform: [{ rotate: visible ? '180deg' : '0deg' }] }} name='left' color='#fff' />
              <Text style={styles.nutFixednav__btnText}>
                {visible
                  ? activeText || locale.fixednav.activeText
                  : unActiveText || locale.fixednav.unActiveText}
              </Text>
            </>
          )}
        </>
      </TouchableOpacity>
    </View>
  );
};

FixedNav.defaultProps = defaultProps;
FixedNav.displayName = 'NutFixedNav';
