import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_grid_item_container: {
        paddingVertical:theme['$grid-item-content-paddingV'],
        justifyContent:'center',
        alignItems:'center'
    },
    nut_grid_item_top_text:{
        fontSize:theme['$grid-item-text-size'],
        color:theme['$grid-item-text-color'],
        marginTop:theme['$grid-item-text-margin']
    },
    nut_grid_item_bottom_text:{
        fontSize:theme['$grid-item-text-size'],
        color:theme['$grid-item-text-color'],
        marginBottom:theme['$grid-item-text-margin']
    },
    nut_grid_item_left_text:{
        fontSize:theme['$grid-item-text-size'],
        color:theme['$grid-item-text-color'],
        marginLeft:theme['$grid-item-text-margin']
    },
    nut_grid_item_right_text:{
        fontSize:theme['$grid-item-text-size'],
        color:theme['$grid-item-text-color'],
        marginRight:theme['$grid-item-text-margin']
    }
  });