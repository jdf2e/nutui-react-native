import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Popup from '../popup/index.rn';
import { OffsetContext } from './offsetContext';
import { useConfig } from '../configprovider';
import sidenavbarStyles from './styles';

export interface SideNavBarProps {
  title: string;
  visible: boolean;
  width?: string;
  offset?: number;
  position?: 'left' | 'right';
  style?: StyleProp<ViewStyle> | undefined;
  onClose: () => void;
  children: React.ReactChildren;
}
const defaultProps = {
  visible: false,
  position: 'left',
  width: '80%'
} as SideNavBarProps;

export const SideNavBar: FunctionComponent<
Partial<SideNavBarProps>
> = (props) => {
  const {
    title,
    visible,
    width,
    position,
    children,
    style,
    onClose
  } = {
    ...defaultProps,
    ...props
  };
  const { theme } = useConfig();
  const styles = sidenavbarStyles(theme);

  const offset = props.offset ? Number(props.offset) : 20;
  const [isShow, setIsShow] = useState(true);

  const handleClick: any = (event: MouseEvent) => {
    event.stopPropagation();
    setIsShow(!isShow);
  };

  return (
    <Popup
      visible={visible}
      closeOnClickOverlay
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <View style={[style, styles.nutSidenavbar]} >
        <View style={styles.nutSidenavbar__content}>
          {/* {showhead ? <div className="nut-sidenavbar__head">📈</div> : null} */}

          <TouchableOpacity onPress={handleClick}>
            <View style={[styles.nutSidenavbar__title, styles.borderBt, { paddingLeft: offset }]}>
              <Text style={styles.nutSidenavbar__title__text}>{title}</Text>
              <View style={[styles.arrowIcon, isShow ? styles.arrowDown : styles.arrowUp]} />
            </View>
            <OffsetContext.Provider value={offset}>
              <View style={[styles.nutSidenavbar__content, isShow ? styles.nutShow : styles.nutHide]}>{children}</View>
            </OffsetContext.Provider>
          </TouchableOpacity>
        </View>
      </View>
    </Popup>
  );
};

SideNavBar.defaultProps = defaultProps;
SideNavBar.displayName = 'NutSideNavBar';
