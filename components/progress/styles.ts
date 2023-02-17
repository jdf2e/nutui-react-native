import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    containerOut: {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    containerInner:{
      flex:1,
      flexDirection:'row',
      alignItems:'center'
    },
    progressBg:{
      flexDirection:'row',
      flex:1,
      marginRight:theme['$progress-bg-margin-right']
    },
    progreessTg:{
      flex:1,
      borderRadius:theme['$progress-tg-border-radius'],
      paddingHorizontal:theme['$progress-tg-padding-horizontal'],
    }
  });
