import { StyleSheet } from 'react-native';
import  deviceWidth  from '../utils/deviceWidth'

export default (theme: any) =>
  StyleSheet.create({
    nut_timeselect_container: {
      backgroundColor:theme['$timeselect_bg_color']
    },
    nut_timeselect_title:{
      width:deviceWidth,
      height:theme['$timeselect_title_height'],
      justifyContent:'center',
      alignItems:'center'
    }
  });