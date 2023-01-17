import { StyleSheet } from 'react-native';
import  deviceWidth  from '../utils/deviceWidth'
export default (theme: any) =>
  StyleSheet.create({
    nut_step_center: {
        justifyContent:"center",
        alignItems:'center', 
    },
    nut_step_h_left:{
      flex:1,
      left:0,
      top:0,
      position:'absolute',
      height:theme['$step_h_left_width'],
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    nut_step_line:{
      flex:1,
      height:theme['$step_h_line_height']
    },
    nut_step_h_content:{
      justifyContent:"center",
      alignItems:'center',
      marginTop:theme['$step_h_content_container']
    },
    nut_step_h_dot:{
      width:theme['$step_h_dot_width'],
      height:theme['$step_h_dot_height'],
      borderRadius:theme['$step_h_dot_radius'],
      justifyContent:'center',
      alignItems:'center'
    },
    nut_step_text_size:{
      fontSize:theme['$step_text_fontsize']
    },
    nut_step_v_container:{
      flex:1,
      flexDirection:'row',
      width:deviceWidth,
      paddingLeft:theme['$step_v_container_paddingLeft']
    },
    nut_step_v_text:{
      fontSize:theme['$step_v_text_fontsize'],
      marginTop:theme['$step_v_text_marginTop'],
      marginRight:theme['$step_v_text_marginRight']
    }

  });