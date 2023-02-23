import {
  StyleSheet
} from 'react-native';

import pt from '../utils/pt';

// 提示： 部分尺寸使用的二倍，否则会有走马灯无法动画问题
export default (theme: any) => {
  return StyleSheet.create({
    acrossContainer: {
      width: '100%',
      paddingTop: theme['$noticebar-wrapable-padding-top-bottom'],
      paddingBottom: theme['$noticebar-wrapable-padding-top-bottom'],
      paddingLeft: pt(theme['$noticebar-wrapable-padding-left-right']),
      paddingRight: pt(theme['$noticebar-wrapable-padding-left-right']),
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme['$noticebar-background']
    },
    iconContainer: {
      height: pt(theme['$noticebar-left-icon-wrapable-size']),
      width: pt(theme['$noticebar-left-icon-wrapable-size']),
      padding: pt(theme['$noticebar-left-icon-wrapable-padding']),
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentC: {
      flex: 1,
      overflow: 'hidden',
      width: 0
    },
    marquee: {
      fontSize: pt(theme['$noticebar-font-size']),
      color: theme['$noticebar-color']
    },
    rIconContainer: {
      width: pt(theme['$noticebar-right-icon-wrapable-size']),
      height: pt(theme['$noticebar-right-icon-wrapable-size']),
      padding: pt(theme['$noticebar-right-icon-wrapable-padding']),
      justifyContent: 'center',
      alignItems: 'center'
    },
    rIconContainer2: {
      position: 'absolute',
      right: 25,
      top: 11,
      width: pt(theme['$noticebar-right-icon-wrapable-size']),
      height: pt(theme['$noticebar-right-icon-wrapable-size']),
      padding: pt(theme['$noticebar-right-icon-wrapable-padding']),
      justifyContent: 'center',
      alignItems: 'center'
    },
    horseLampList: {
      margin: 0,
      padding: 0
    },
    abs: {
      position: 'absolute',
      right: 35,
      top: 25
    },
    wrap: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
};
