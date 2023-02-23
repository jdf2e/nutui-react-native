
/**
 * @参考 react-native-iphone-x-helper
 */
import { Dimensions, Platform, StatusBar } from 'react-native';

export const isIphoneXFunc = () => {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 780 || dimen.width === 780) ||
          (dimen.height === 812 || dimen.width === 812) ||
          (dimen.height === 844 || dimen.width === 844) ||
          (dimen.height === 896 || dimen.width === 896) ||
          (dimen.height === 926 || dimen.width === 926))
  );
};

export const isIPhoneX = isIphoneXFunc();

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneXFunc()) {
    return iphoneXStyle;
  }

  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0
  });
}

export const iphoneXMarginBottom = isIPhoneX ? 34 : 0;
