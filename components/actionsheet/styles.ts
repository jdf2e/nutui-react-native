import { StyleSheet } from 'react-native';
import deviceWidth from '../utils/deviceWidth';

export default (theme: any) =>
  StyleSheet.create({
    nut_actionsheet_desc: {
        fontSize: theme['$actionsheet-desc-size'],
        color:theme['$actionsheet-desc-color']
    },
    nut_actionsheet_items:{
        width:deviceWidth,
        backgroundColor:theme['$actionsheet-items-bg'],
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:theme['$actionsheet-items-paddding']
    },
    nut_actionsheet_items_top:{
        width:deviceWidth,
        backgroundColor:theme['$actionsheet-items-bg'],
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        paddingVertical:theme['$actionsheet-items-border-radius']
    },
    nut_actionsheet_items_cancle:{
        width:deviceWidth,
        backgroundColor:theme['$actionsheet-items-bg'],
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:theme['$actionsheet-items-border-top_width'],
        borderTopColor:theme['$actionsheet-items-border-top_color'],
        paddingVertical:theme['$actionsheet-items-paddding']
    },
    nut_actionsheet_sub_text:{
        color:theme['$actionsheet-items-sub-text-color']
    }

  });