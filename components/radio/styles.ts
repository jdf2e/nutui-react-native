import { StyleSheet } from 'react-native';
import px from '../utils/px';

export default (theme: any) => {
  return StyleSheet.create({
    shaperoundContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme['$radio-button-margin'],
      marginRight: theme['$radio-button-margin']
    },
    shapebuttonContainer: {
      marginBottom: theme['$radio-button-margin'],
      marginRight: theme['$radio-button-margin'],
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme['$radio-button-padding-top-bottom'],
      paddingBottom: theme['$radio-button-padding-top-bottom'],
      paddingLeft: theme['$radio-button-padding-left-right'],
      paddingRight: theme['$radio-button-padding-left-right'],
      borderRadius: theme['$radio-button-border-radius']
    },
    buttonCheckedfalse: {
      backgroundColor: theme['$radio-button-check-background-color']
    },
    buttonCheckedtrue: {
      backgroundColor: theme['$radio-button-uncheck-background-color'],
      borderWidth: px(theme['$radio-button-border-width']),
      borderColor: theme['$radio-label-button-border-color'],
      borderStyle: 'solid'
    },
    roundDisabledtrue: {
      opacity: 0.3
    },
    buttonDisabledtrue: {
      opacity: 0.3
    },
    mr10: {
      marginRight: theme['$radio-button-margin']
    },
    textDefaultround: {
      fontSize: theme['$radio-label-font-size'],
      color: theme.$gray1
    },
    textDefaultbutton: {
      fontSize: theme['$radio-button-font-size'],
      color: theme.$gray1
    },
    textCheckedbuttontrue: {
      color: theme['$primary-color']
    },
    textPositionleft: {
      marginRight: theme['$radio-button-margin']
    }
  });
};
