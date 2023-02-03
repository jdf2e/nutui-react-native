import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: theme['$empty-padding'],
      paddingBottom: theme['$empty-padding'],
      backgroundColor: theme['$background-color3'],
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    imgContaienr: {
      width: theme['$empty-image-size'],
      height: theme['$empty-image-size']
    },
    text: {
      marginTop: theme['$empty-description-margin-top'],
      fontSize: theme['$empty-description-font-size'],
      lineHeight: theme['$empty-description-line-height'],
      color: theme['$empty-description-color'],
      paddingLeft: theme['$empty-description-padding'],
      paddingRight: theme['$empty-description-padding']
    }
  });
