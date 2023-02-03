import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingVertical: pt(20),
    },
    imgContainer: {
      marginLeft: pt(20),
    },
    img: {
      width: pt(220),
      height: pt(220),
    },
    rightC: {
      flex: 1,
      paddingHorizontal: pt(20),
      justifyContent: 'space-between',
    },
    priceC: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    tagC: {
      flexDirection: 'row',
    },
    shop: {
      marginVertical: pt(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    shopTx: {
      fontSize: pt(24),
      color: '#666666',
    },
    goldColor: {
      color: '#dab570',
    },
    marL10: {
      marginLeft: pt(10),
    },
  });
