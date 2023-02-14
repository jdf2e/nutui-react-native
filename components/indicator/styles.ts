import { StyleSheet, Platform } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    block: {
      width: '100%',
    },
    alignleft: {
      justifyContent: 'flex-start',
    },
    alignright: {
      justifyContent: 'flex-end',
    },
    aligncenter: {
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    vertical: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    number: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme['$indicator-size'],
      height: theme['$indicator-size'],
      borderRadius: theme['$indicator-size'],
      backgroundColor: theme['$indicator-color'],
      marginLeft: theme['$indicator-dot-margin'],
      marginRight: theme['$indicator-dot-margin'],
      ...Platform.select({
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: theme['$indicator-color'], //  阴影颜色
          shadowOffset: { width: 0, height: 1 }, // 阴影偏移
          shadowOpacity: 0.5, // 阴影不透明度
          shadowRadius: 3, //  圆角
        },
      }),
    },
    numberTxt: {
      color: '#ffffff',
      fontSize: theme['$indicator-number-font-size'],
    },
    firstNumber: {
      marginLeft: 0,
    },
    lastNumber: {
      marginRight: 0,
    },
    dot: {
      width: theme['$indicator-dot-size'],
      height: theme['$indicator-dot-size'],
      borderRadius: theme['$indicator-size'],
      backgroundColor: theme['$indicator-dot-color'],
      marginLeft: theme['$indicator-dot-margin'],
      marginRight: theme['$indicator-dot-margin'],
    },
    firstDot: {
      marginLeft: theme['$indicator-dot-first-margin'],
    },
    lastDot: {
      marginRight: theme['$indicator-dot-last-margin'],
    },
    verticalDot: {
      marginLeft: theme['$indicator-dot-first-margin'],
      marginRight: theme['$indicator-dot-last-margin'],
      marginTop: theme['$indicator-dot-vertical-margin'],
      marginBottom: theme['$indicator-dot-vertical-margin'],
    },
    firstVerticalDot: {
      marginTop: theme['$indicator-dot-first-margin'],
    },
    lastVerticalDot: {
      marginBottom: theme['$indicator-dot-last-margin'],
    },
    whileLine: {
      width: theme['$indicator-size']-2,
      height: theme['$indicator-size']-2,
      borderRadius: theme['$indicator-size'] - 2,
      position: 'absolute',
    //   top: pt(2),
    //   left: pt(2),
      backgroundColor: 'transparent',
      borderColor: theme['$indicator-white'],
      borderWidth: pt(2),
    },
  });
