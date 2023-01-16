import { StyleSheet } from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      color: theme['$checkbox-label-color'],
      fontSize: theme['$checkbox-label-font-size']
    },
    textPositionleft: {
      marginRight: theme['$checkbox-label-margin-left']
    },
    textDisabledtrue: {
      opacity: 0.4
    },
    iconright: {
      marginRight: theme['$checkbox-label-margin-left']
    }
  });
};
