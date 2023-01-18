import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_timepannel_container: {
      alignItems:'center',
      justifyContent:'center',
      height:theme['$timepannel_container_height']
    },
    nut_timepannel_active: {
      backgroundColor:theme['$timepannel_container_active']
    },
    nut_timepannel_no_active: {
      backgroundColor:theme['$timepannel_container_no_active']
    },
    nut_timepannel_active_text:{
      fontSize: theme['$timepannel_container_active_text_fontsize'],
      color:theme['timepannel_container_active_text_color']
    },
    nut_timepannel_no_active_text:{
      fontSize:theme['$timepannel_container_no_active_text_fontsize'],
      color:theme['$timepannel_container_no_active_text_color']
    }
  });