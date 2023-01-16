import React, { useContext } from 'react';

import {
  View
} from 'react-native';

import { DataContext } from '../swiper/userContext';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import swiperItemStyles from './styles';

export interface SwiperItemProps {
  direction?: string;
  size?: 0;
}

interface Style {
  width?: string;
  height?: string;
  transform?: string;
}

const defaultProps = {
  direction: 'horizontal'
} as SwiperItemProps;

export const SwiperItem = React.forwardRef<
HTMLDivElement,
Partial<SwiperItemProps> & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const _props = { ...defaultProps, ...props };
  const { style, children, direction, size } = _props;
  const parent: any = useContext(DataContext);
  const styles = swiperItemStyles();

  const getStyle = () => {
    const style: Style = {};
    const _direction = parent?.propSwiper.direction || direction;
    const _size = parent?.size || size;

    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = _size;
    }

    return style;
  };

  const wrapStyle = [
    styles.item,
    fConStyle(toObj(style)),
    getStyle()
  ];

  return (
    <View
      style={wrapStyle}
    >
      {children}
    </View>
  );
});
SwiperItem.defaultProps = defaultProps;
SwiperItem.displayName = 'NutSwiperItem';
