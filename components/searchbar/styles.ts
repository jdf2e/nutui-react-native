import { StyleSheet } from 'react-native';
import  deviceWidth  from '../utils/deviceWidth'

export default (theme: any) =>
  StyleSheet.create({
    nut_searchbar_container: {
      width:deviceWidth,
      backgroundColor:theme['$searchbar-background'],
      flexDirection:"row",
      alignItems:'center',
      height:theme['$searchbar-height'],
      paddingHorizontal:theme['$searchbar-paddingH'],
    },
    nut_searchbar_inner:{
      backgroundColor:theme['$searchbar-background-inner-color'],
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      height:theme['$searchbar-inner-height'],
    },
    nut_label_margin:{
      marginRight:theme['$searchbar-lebal-marginright']
    },
    nut_label_marginleft:{
      marginLeft:theme['$searchbar-lebal-marginleft']
    },
    nut_search_clear_marginright:{
      marginRight:theme['$searchbar-clear-marginright']
    },
    nut_search_out_marginleft:{
      marginLeft:theme['$searchbar-out-marginleft']
    },
    nut_search_icon_marginH:{
      marginHorizontal:theme['$searchbar-icon-marginH']
    },
    nut_search_left_icon_marginright:{
      marginRight:theme['$searchbar-icon-marginright']
    },
    nut_search_left_in_marginH:{
      marginHorizontal:theme['$searchbar-left-in-marginH']
    }
  });