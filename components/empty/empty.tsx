import React, {
  FunctionComponent,
  ReactNode,
  useCallback
} from 'react';

import {
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle
} from 'react-native';

import toObj from '../utils/style-to-obj';
import { useConfig } from '../configprovider';
import emptyStyles from './styles';

type statusOptions = {
  [key: string]: string;
};
/**
 * 内置图片地址
 */
const defaultStatus: statusOptions = {
  empty: 'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png',
  error: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png',
  network: 'https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png'
};

export interface EmptyProps {
  // 图片类型 String，可选值为 error network empty，支持传入图片 URL, 默 empty
  image: ReactNode | string;
  imageSize: number | string; // 图片大小，Number 类型单位为 px
  description: ReactNode | string; // 图片下方的描述文字
  style?: StyleProp<ViewStyle> | undefined;
  children: any;
}

export const Empty: FunctionComponent<
Partial<EmptyProps> & React.HTMLAttributes<HTMLDivElement>
> = ({
  description = '无内容',
  image = 'empty',
  imageSize = '',
  style = {},
  children
}) => {
  const { locale, theme } = useConfig();

  const styles = emptyStyles(theme);
  const getImgUrl = useCallback((image: string) => {
    const isHttpUrl =
    image.startsWith('https://') ||
    image.startsWith('http://') ||
    image.startsWith('//');
    const imageUrl = isHttpUrl ? image : defaultStatus[image];

    return imageUrl;
  }, [image]);

  const wrapStyle = [
    styles.container,
    toObj(style)
  ];

  const imgStyle = [
    styles.imgContaienr,
    imageSize ? { width: imageSize, height: imageSize } : {}
  ];

  return (
    <View style={wrapStyle} >
      <>
        {typeof image === 'string'
          ? (
            <Image
              source={{ uri: getImgUrl(image) }}
              style={imgStyle}
            />
          )
          : image}
        {typeof description === 'string'
          ? <Text style={styles.text}>{description || locale.noData}</Text>
          : description}
        {children}
      </>
    </View>
  );
};

Empty.displayName = 'NutEmpty';
