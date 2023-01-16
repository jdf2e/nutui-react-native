import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column'
    },
    titleContainer: {
      paddingLeft: theme['$cell-group-title-padding-left-right'],
      paddingRight: theme['$cell-group-title-padding-left-right'],
      marginTop: pt(60),
      marginBottom: pt(20)
    },
    title: {
      color: theme['$cell-group-title-color'],
      fontSize: theme['$cell-title-font']
    },
    descContainer: {
      paddingLeft: theme['$cell-group-desc-padding-left-right'],
      paddingRight: theme['$cell-group-desc-padding-left-right'],
      marginTop: pt(20),
      marginBottom: pt(20)
    },
    desc: {
      fontSize: theme['$cell-title-desc-font'],
      color: theme['$cell-group-desc-color']
    },
    wrap: {
      borderRadius: theme['$cell-border-radius'],
      overflow: 'hidden',
      backgroundColor: theme['$cell-group-background-color'],
      marginTop: pt(10),
      marginBottom: pt(10)
    }
  });
};
