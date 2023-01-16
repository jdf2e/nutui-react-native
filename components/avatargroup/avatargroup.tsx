import React, {
  FunctionComponent,
  useRef
} from 'react';

import {
  View,
  StyleProp,
  ViewStyle
} from 'react-native';

import { AvatarContext } from './avatarContext';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';

import { useConfig } from '../configprovider/configprovider';

import avatarGroupStyles from './styles';

export interface AvatarGroupProps {
  maxContent: string;
  maxCount: string | number;
  maxBgColor: string;
  maxColor: string;
  size: string;
  shape: string;
  span: string;
  zIndex: string;
  className: string;
  style: StyleProp<ViewStyle> | undefined;
}

const defaultProps = {
  maxContent: '',
  maxCount: '',
  maxBgColor: '#eee',
  maxColor: '#666',
  size: '',
  shape: '',
  span: '-8',
  zIndex: 'left'
} as AvatarGroupProps;

export const AvatarGroup: FunctionComponent<
Partial<AvatarGroupProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig();
  const propAvatarGroup = { ...defaultProps, ...props };
  const styles = avatarGroupStyles();

  const { style, children } = propAvatarGroup;

  const avatarGroupRef = useRef(null);

  const parentAvatar = {
    propAvatarGroup,
    avatarGroupRef
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {}))
  ];

  return (
    <AvatarContext.Provider value={parentAvatar}>
      <View
        style={wrapStyle}
        ref={avatarGroupRef}
      >
        {children}
      </View>
    </AvatarContext.Provider>
  );
};

AvatarGroup.defaultProps = defaultProps;
AvatarGroup.displayName = 'NutAvatarGroup';
