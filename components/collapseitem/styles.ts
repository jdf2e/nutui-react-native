import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    collapseItem__header: {
      flexDirection: 'row',
      width: '100%',
      overflow: 'hidden',
      paddingVertical: pt(26),
      paddingLeft: pt(52),
      fontSize: pt(28),
      lineHeight: pt(48),
      backgroundColor: theme['$background-color3']
    },
    borderBt: {
      borderBottomWidth: pt(1),
      borderBottomColor: '#eeeff2'
    },
    collapseItem__title: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    collapseItem__title__text: {
      color: '#1a1a1a'
    },
    collapseItem__title__disable: {
      color: theme['$disable-color']
    },
    collapseItem__titleIconLeft: {
      marginRight: pt(20),
      alignItems: 'center'
    },
    collapseItem__titleIconRight: {
      marginLeft: pt(20),
      alignItems: 'center'
    },
    collapseItem__subTitle: {
      flex: 1,
      alignItems: 'flex-end',
      paddingHorizontal: pt(40),
      overflow: 'hidden',
      textAlign: 'right',
      color: theme['$title-color2']
    },
    collapseItem__iconBox: {
      paddingRight: pt(80)
    },
    collapseItem__icon: {
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      left: pt(10),
      transform: [{ translateY: -pt(20) }]
      // transform-origin: center,
      // transition: transform 0.3s,
    },
    collapseItem__content: {
      overflow: 'hidden',
      color: theme['$background-color3'],
      fontSize: pt(28),
      lineHeight: 1.5,
      backgroundColor: '#fff'
      // transition: all 0.3s linear,
    },
    collapseItem__contentText: {
      color: theme['$title-color'],
      paddingVertical: pt(24),
      paddingHorizontal: pt(52)
    }
  });
