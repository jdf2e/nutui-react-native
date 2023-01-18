import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_timedetail_container:{
      paddingLeft:theme['$timedetail_container_paddingL'],
      flexDirection:"row",
      flexWrap:'wrap'
    },
    nut_timedetail_active: {
      height:theme['$timedetail_active_height'],
      borderWidth:theme['$timedetail_active_border_width'],
      borderColor:theme['$timedetail_active_border_color'],
      borderRadius:theme['$timedetail_active_border_radius'],
      backgroundColor:theme['$timedetail_active_bg_color'],
      marginRight:theme['$timedetail_active_bg_marginR'],
      marginBottom:theme['$timedetail_active_bg_marginB'],
      alignItems:'center',
      justifyContent:'center'
    },
    nut_timedetail_no_active:{
      height:theme['$timedetail_active_height'],
      borderRadius:theme['$timedetail_active_border_radius'],
      backgroundColor:theme['$timedetail_no_active_bg_color'],
      alignItems:'center',
      justifyContent:'center',
      marginRight:theme['$timedetail_active_bg_marginR'],
      marginBottom:theme['$timedetail_active_bg_marginB']
    },

    nut_timedetail_active_text:{
      fontSize:theme['$timedetail_active_text_fontsize'],
      color:theme['$timedetail_active_text_color']
    },
    nut_timedetail_no_active_text:{
      fontSize:theme['$timedetail_no_active_text_fontsize'],
      color:theme['$timedetail_no_active_text_color']
    }
  });