import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    nutFixednav: {
      position: 'absolute',
      zIndex: theme['$fixednav-index'],
      height: pt(100),
      right: 0
    },
    nutFixednavLeft: {
      right: 'auto',
      left: 0
    },
    nutFixednavList: {
      zIndex: theme['$fixednav-index'],
      height: pt(100)
    },
    nutFixednav__list: {
      position: 'absolute',
      right: 0,
      flexDirection: 'row',
      zIndex: theme['$fixednav-index'],
      height: '100%',
      backgroundColor: theme['$fixednav-bg-color'],
      justifyContent: 'space-between',
      borderTopLeftRadius: pt(50),
      borderBottomLeftRadius: pt(50),
      paddingLeft: pt(40),
      paddingRight: pt(160)
    },
    nutFixednav__listLeft: {
      right: 'auto',
      borderTopRightRadius: pt(50),
      borderBottomRightRadius: pt(50),
      paddingLeft: pt(160),
      paddingRight: pt(40),
      margin: 0
    },
    nutFixednav__listItem: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: pt(100),
      flexShrink: 0
    },
    nutFixednav__listText: {
      fontSize: pt(20),
      color: theme['$fixednav-font-color']
    },
    nutFixednav__listImage: {
      width: pt(40),
      height: pt(40),
      marginBottom: pt(4)
    },
    nutFixednav__b: {
      position: 'absolute',
      right: 0,
      top: pt(2),
      height: pt(28),
      lineHeight: pt(28),
      fontSize: pt(20),
      paddingLeft: pt(6),
      paddingRight: pt(6),
      color: 'white',
      backgroundColor: theme['$primary-color'],
      borderRadius: pt(14),
      overflow: 'hidden',
      textAlign: 'center',
      minWidth: pt(24)
    },
    nutFixednav__btn: {
      flexDirection: 'row',
      position: 'absolute',
      right: 0,
      zIndex: theme['$fixednav-index'] + 1,
      width: pt(160),
      maxWidth: pt(160),
      paddingLeft: pt(24),
      height: '100%',
      backgroundColor: theme['$primary-color'],
      borderTopLeftRadius: pt(90),
      borderBottomLeftRadius: pt(90),
      alignItems: 'center',
      justifyContent: 'center'
    },
    nutFixednav__btnLeft: {
      flexDirection: 'row-reverse',
      right: 'auto',
      left: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: pt(90),
      borderBottomRightRadius: pt(90)
    },
    nutFixednav__btnText: {
      width: pt(48),
      lineHeight: pt(26),
      fontSize: pt(20),
      color: theme['$fixednav-bg-color'],
      flexShrink: 0
    }
  });
