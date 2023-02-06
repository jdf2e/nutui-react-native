import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: pt(80),
      height: pt(80),
      marginRight: pt(80),
    },
    slotIcons: {
      position: 'absolute',
      backgroundColor: '#fa2c19',
      borderRadius: pt(24),
      padding: pt(6),
      top: -pt(8),
      right: -pt(18),
      textAlign: 'center',
      zIndex: 1,
    },
    isDot: {
      width: pt(14),
      height: pt(14),
      borderRadius: pt(14),
      paddingLeft: 0,
      paddingRight: 0,
      top: -4,
      right: -6,
    },
    sup: {
      position: 'absolute',
      backgroundColor: '#fa2c19',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: pt(10),
      paddingRight: pt(10),
      borderRadius: pt(24),
      top: -8,
      right: -18,
    },
    text: {
      fontSize: pt(24),
      fontWeight: 'normal',
      color: '#fff',
    },
  });
