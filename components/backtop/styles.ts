import { StyleSheet } from 'react-native';
import deviceWidth from '../utils/deviceWidth';

export default (theme: any) =>
  StyleSheet.create({
    nut_backtop_container: {
        alignItems:'center',
        justifyContent:'center',
        width:theme['$backtop-width'],
        height:theme['$backtop-height'],
        borderRadius:theme['$backtop-radius'],
        borderWidth:1,
        borderColor:theme['$backtop-border-color'],
        backgroundColor:theme['$backtop-bg-color']
    },
    nut_backtop_text:{
        fontSize:theme['$backtop-text-size'],
        color:theme['$backtop-text-color'],
        marginTop:theme['$backtop-text-maginTop']
    }
  });