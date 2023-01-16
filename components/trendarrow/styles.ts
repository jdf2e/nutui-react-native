import { StyleSheet } from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    iconAfter: {
      marginLeft: theme['$trendarrow-before-icon-margin']
    },
    iconBefore: {
      marginRight: theme['$trendarrow-before-icon-margin']
    },
    text: {
      fontSize: theme['$trendarrow-font-size']
    }
  });
};
