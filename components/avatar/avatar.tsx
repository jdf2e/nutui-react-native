import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useContext,
} from 'react';

import { View, Image, Text, StyleProp, ViewStyle } from 'react-native';

import { AvatarContext } from '../avatargroup/avatarContext';

import { useConfig } from '../configprovider';
import avatarStyles from './styles';

import Icon from '../icon';
import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';

export interface AvatarProps {
  size: string;
  icon: string;
  iconSize?: string | number;
  shape: AvatarShape;
  bgColor: string;
  color: string;
  source: any;
  style: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode;
  activeAvatar: (e: any) => void;
  onActiveAvatar: (e: any) => void;
  onError: (e: any) => void;
}

export type AvatarShape = 'round' | 'square';

const defaultProps = {
  size: '',
  icon: '',
  iconSize: '',
  bgColor: '#eee',
  color: '#666',
} as AvatarProps;

export const Avatar: FunctionComponent<
  Partial<AvatarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    size,
    shape,
    bgColor,
    color,
    source,
    icon,
    iconSize,
    style,
    activeAvatar,
    onActiveAvatar,
    onError,
  } = {
    ...defaultProps,
    ...props,
  };

  const { theme } = useConfig();

  const styles = avatarStyles(theme);

  const [maxSum, setMaxSum] = useState(0); // avatarGroup里的avatar的个数
  const [showMax, setShowMax] = useState(false); // 是否显示的最大头像个数
  const [avatarIndex, setAvatarIndex] = useState(1); // avatar的索引
  const avatarRef = useRef<any>(null);
  const parent: any = useContext(AvatarContext);

  const sizeValue = ['large', 'normal', 'small'];

  const sizeStyle = {};

  const stylesObj = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    marginLeft:
      avatarIndex !== 1 && parent?.propAvatarGroup?.span
        ? parent?.propAvatarGroup?.span
        : '',
    zIndex:
      parent?.propAvatarGroup?.zIndex === 'right'
        ? `${Math.abs(maxSum - avatarIndex)}`
        : '',
  };

  if (sizeValue.indexOf(size) > -1) {
    sizeStyle.width = size;
    sizeStyle.height = size;
  }

  const mySize = size || parent?.propAvatarGroup?.size || 'normal';
  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {})),
    styles[`size${mySize}`],
    styles[
      `shape${mySize}${shape || parent?.propAvatarGroup?.shape || 'round'}`
    ],
    stylesObj,
    sizeStyle,
  ];

  const maxStyles = {
    backgroundColor: `${parent?.propAvatarGroup?.maxBgColor}`,
    color: `${parent?.propAvatarGroup?.maxColor}`,
  };
  const maxWrapStyle = [
    styles.container,
    fConStyle(toObj(style || {})),
    styles[`size${mySize}`],
    styles[
      `shape${mySize}${shape || parent?.propAvatarGroup?.shape || 'round'}`
    ],
    maxStyles,
    sizeStyle,
  ];

  const imageStyle = [
    styles.avatarImg,
    styles[`size${mySize}`],
    styles[
      `shape${mySize}${shape || parent?.propAvatarGroup?.shape || 'round'}`
    ],
    sizeStyle,
  ];

  const iconStyles = icon || '';

  useEffect(() => {
    const avatarChildren = parent?.avatarGroupRef?.current.children;

    if (avatarChildren) {
      avatarLength(avatarChildren);
    }
  }, []);

  const avatarLength = (children: any) => {
    for (let i = 0; i < children.length; i++) {
      if (
        children[i]

        // children[i].classList &&
        // children[i].classList[0] === 'nut-avatar'
      ) {
        children[i].setAttribute('data-index', i + 1);
      }
    }
    const index = Number(avatarRef?.current?.dataset?.index);
    const maxCount = parent?.propAvatarGroup?.maxCount;

    setMaxSum(children.length);
    setAvatarIndex(index);
    if (
      index === children.length &&
      index !== maxCount &&
      children.length > maxCount
    ) {
      setShowMax(true);
    }
  };

  const errorEvent = (e: any) => {
    if (props.onError) {
      props.onError(e);
    }
  };

  const clickAvatar = (e: any) => {
    activeAvatar && activeAvatar(e);
    onActiveAvatar && onActiveAvatar(e);
  };

  const getIconSize = () => {
    const isImage = icon ? icon.indexOf('/') !== -1 : false;

    if (isImage) {
      if (iconSize) {
        return iconSize;
      }

      if (mySize === 'large') {
        return theme['$avatar-icon-large-size'] || 60;
      }

      if (mySize === 'normal') {
        return theme['$avatar-icon-normal-size'] || 40;
      }

      if (mySize === 'small') {
        return theme['$avatar-icon-small-size'] || 32;
      }
    } else {
      if (iconSize) {
        return iconSize;
      }
    }
  };

  return (
    <>
      {(showMax ||
        !parent?.propAvatarGroup?.maxCount ||
        avatarIndex <= parent?.propAvatarGroup?.maxCount) && (
        <View
          style={!showMax ? wrapStyle : maxWrapStyle}
          // onClick={clickAvatar}
          ref={avatarRef}
        >
          {(!parent?.propAvatarGroup?.maxCount ||
            avatarIndex <= parent?.propAvatarGroup?.maxCount) && (
            <>
              {source ? (
                <Image
                  style={imageStyle}
                  source={source}
                  onError={errorEvent}
                />
              ) : null}
              {icon ? <Icon name={iconStyles} size={getIconSize()} /> : null}
              {children ? <Text style={styles.text}>{children}</Text> : null}
            </>
          )}
          {/* 折叠头像 */}
          {showMax && (
            <View>
              {parent?.propAvatarGroup?.maxContent
                ? parent?.propAvatarGroup?.maxContent
                : `+ ${avatarIndex - parent?.propAvatarGroup?.maxCount}`}
            </View>
          )}
        </View>
      )}
    </>
  );
};

Avatar.defaultProps = defaultProps;
Avatar.displayName = 'NutAvatar';
