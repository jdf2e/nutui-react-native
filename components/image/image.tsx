import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react';

import {
  View,
  Image,
  ImageProps as ImageBaseProps,
  TouchableHighlight
} from 'react-native';

import { useConfig } from '../configprovider';
import imageStyles from './styles';

import Icon from '../icon';

import toObj from '../utils/style-to-obj';
import fConStyle from '../utils/filter-container-style';
import getRadiusValue from '../utils/get-border-radius-value';
import fWidthHegiht from '../utils/filter-width-height';

export interface ImageProps extends ImageBaseProps {
  round: boolean;
  radius: string | number;
  showError: boolean;
  showLoading: boolean;
  slotLoding: React.ReactNode;
  slotError: React.ReactNode | string;
  onClick?: (e: any) => void;
  onLoad?: () => void;
  onError?: () => void;
}

export const ImageComponent: FunctionComponent<
Partial<ImageProps>
> = ({
  style,
  source,
  resizeMode = 'cover',
  width = 0,
  height = 0,
  round = false,
  radius = 0,
  showError = true,
  showLoading = true,
  slotError,
  slotLoding,
  children,
  onClick,
  onLoad,
  onError,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { theme } = useConfig();

  const styles = imageStyles(theme);

  useEffect(() => {
    if (source) {
      setIsError(false);
      setLoading(true);
    }
  }, [source]);

  // 图片加载
  const load = () => {
    if (source) {
      setLoading(false);
      onLoad && onLoad();
    }
  };

  // 图片加载失败
  const error = () => {
    if (source) {
      setIsError(true);
      setLoading(false);
      onError && onError();
    }
  };

  const wrapStyle = [
    styles.container,
    fConStyle(toObj(style || {})),
    {
      height: height,
      width: width,
      overflow: radius !== undefined && radius !== null ? 'hidden' : '',
      borderRadius: radius !== undefined && radius !== null ? radius : 0
    },
    round ? { borderRadius: getRadiusValue(width) } : {}
  ];

  const imageStyle = [
    fWidthHegiht(toObj(style || {})),
    {
      width: width,
      height: height
    }
  ];
  const renderContent = () => {
    return (
      <View
        style={wrapStyle}
      >
        <Image
          style={imageStyle}
          source={source}
          resizeMode={resizeMode}
          onLoad={load}
          onError={error}
          {...props}
        />

        {showLoading && loading
          ? (
            <View
              style={styles.loading}
            >
              {slotLoding || children || <Icon name='image' />}
            </View>
          )
          : null}

        {showError && isError && !loading
          ? (
            <View
              style={styles.error}
            >
              {slotError || children || <Icon name='image-error' />}
            </View>
          )
          : null}
      </View>
    );
  };

  if (onClick) {
    return (
      <TouchableHighlight
        underlayColor={null}
        activeOpacity={1}
        onPress={onClick}
      >
        {renderContent()}
      </TouchableHighlight>
    );
  }

  return (
    <>
      { renderContent() }
    </>
  );
};
ImageComponent.abortPrefetch = Image.abortPrefetch;
ImageComponent.getSize = Image.getSize;
ImageComponent.prefetch = Image.prefetch;
ImageComponent.queryCache = Image.queryCache;
ImageComponent.resolveAssetSource = Image.resolveAssetSource;
ImageComponent.displayName = 'NutImage';
