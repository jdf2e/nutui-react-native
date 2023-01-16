import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) => {
  return StyleSheet.create({
    verticalStyle: {
      position: 'relative',
      height: theme['$divider-vertical-height'],
      width: px(theme['$divider-line-height']),
      backgroundColor: theme['$divider-vertical-border-color'],
      marginLeft: theme['$divider-margin-left'],
      marginRight: theme['$divider-margin-right']
    },
    rowfalseStyle: { // 没有children的样式
      position: 'relative',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme['$divider-vertical-border-color'],
      borderWidth: px(theme['$divider-line-height'])
    },
    rowtrueStyle: { // 有children的样式
      width: '100%',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dashedtruefalse: { // 虚线没有children 的样式
      height: 0,
      borderStyle: 'dashed'
    },
    dashedfalsefalse: { // 虚线没有children 的样式
      borderStyle: 'solid'
    },
    hairlinefalsetruefalse: { // 非虚线
      borderWidth: px(0.6)
    },
    hairlinetruetruefalse: { // 非虚线
      borderWidth: px(1)
    },
    text: {
      color: theme['$divider-text-color'],
      fontSize: pt(theme['$divider-text-font-size']),
      marginLeft: theme['$divider-after-margin-left'],
      marginRight: theme['$divider-before-margin-right']
    },
    leftcenter: {
      flex: 1
    },
    leftleft: {
      flex: 1
    },
    leftright: {
      flex: 6
    },
    rightright: {
      flex: 1
    },
    rightleft: {
      flex: 6
    },
    rightcenter: {
      flex: 1
    },
    lineStylefalse: {
      borderStyle: 'solid',
      borderColor: theme['$divider-vertical-border-color']
    },
    lineStyletrue: {
      borderColor: theme['$divider-vertical-border-color'],
      borderStyle: 'dashed'
    },
    lineWidthtrue: {
      borderWidth: px(0.9)
    }
  });
};
