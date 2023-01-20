import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    defaultText: {
      color: theme['$primary-color']
    },
    symbollarge: {
      fontSize: theme['$price-symbol-big-size']
    },
    symbolnormal: {
      fontSize: theme['$price-symbol-medium-size']
    },
    symbolsmall: {
      fontSize: theme['$price-symbol-small-size']
    },
    biglarge: {
      fontSize: theme['$price-integer-big-size']
    },
    bignormal: {
      fontSize: theme['$price-integer-medium-size']
    },
    bigsmall: {
      fontSize: theme['$price-integer-small-size']
    },
    pointlarge: {
      fontSize: theme['$price-integer-big-size']
    },
    pointnormal: {
      fontSize: theme['$price-integer-medium-size']
    },
    pointsmall: {
      fontSize: theme['$price-integer-small-size']
    },
    smalllarge: {
      fontSize: theme['$price-decimal-big-size']
    },
    smallnormal: {
      fontSize: theme['$price-decimal-medium-size']
    },
    smallsmall: {
      fontSize: theme['$price-decimal-small-size']
    }
  });
