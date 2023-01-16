import { StyleSheet } from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      position: 'relative'
    },
    round: {
      overflow: 'hidden'
    },
    loading: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme['$image-loading-background-color']
    },
    error: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme['$image-error-background-color']
    }
  });
};
