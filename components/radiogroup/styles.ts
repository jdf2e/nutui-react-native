import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    directionhorizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    directionvertical: {
      flexDirection: 'column'
    }
  });
};
