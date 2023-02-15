import { StyleSheet, Platform } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    container: {
    //   paddingTop: theme['$notify-padding'],
    //   paddingBottom: theme['$notify-padding'],
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      minHeight: theme['$notify-height'],
    },
    containerPositiontop: {
      position: 'absolute',
      paddingTop: Platform.OS === 'ios' ? pt(70 + 12) : 0,
      zIndex: 9999,
    },
    containerPositionbottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 9999,
    },
    containerTypedanger: {
      backgroundColor: theme['$notify-danger-background-color'],
    },
    text: {
      fontSize: theme['$notify-font-size'],
      color: theme['$notify-text-color'],
    },
  });
