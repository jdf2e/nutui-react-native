import { StyleSheet } from 'react-native';
import px from '../utils/px';
import pt from '../utils/pt';
import { isIPhoneX, iphoneXMarginBottom } from '../utils/iphone-x';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      borderWidth: 0,
      flexDirection: 'row',
      borderBottomWidth: px(theme['$tabbar-border-bottom-width']),
      borderBottomColor: theme['$tabbar-border-bottom-color'],
      width: '100%',
      paddingTop: pt(theme['$tabbar-padding-top']),
      paddingBottom: pt(theme['$tabbar-padding-bottom']),
      borderTopWidth: px(theme['$tabbar-border-top-width']),
      borderTopColor: theme['$tabbar-border-top-color'],
      backgroundColor: theme['$tabbar-background-color']

    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: pt(750),
      zIndex: 888
    },
    safeAreaInsetBottom: {
      position: 'absolute',
      width: pt(750),
      bottom: isIPhoneX ? iphoneXMarginBottom : 0,
      left: 0,
      zIndex: 888
    }
  });
};
