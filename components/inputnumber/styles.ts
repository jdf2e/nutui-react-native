import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_inputnumber_zerowidth: {
      height:theme['$inputnumber-height'],
      backgroundColor:theme['$inputnumber-bg-color'],
      justifyContent:'center',
      paddingHorizontal:theme['$inputnumber-paddingH'],
      borderRadius:theme['$inputnumber-radius']
    },
    nut_inputnumber_fixwidth:{
      height:theme['$inputnumber-height'],
      backgroundColor:theme['$inputnumber-bg-color'],
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:theme['$inputnumber-paddingH'],
      borderRadius:theme['$inputnumber-radius']
    },
    nut_icon_marginH:{
      marginHorizontal:theme['$inputnumber-icon-marginH']
    }
  });