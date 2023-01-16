import { StyleSheet } from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    actions: {
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    hidden: {
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    }
  });
};
