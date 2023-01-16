import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      borderRadius: theme['$cell-border-radius'],
      width: '100%',
      paddingTop: theme['$cell-padding-top-bottom'],
      paddingBottom: theme['$cell-padding-top-bottom'],
      paddingLeft: theme['$cell-padding-left-right'],
      paddingRight: theme['$cell-padding-left-right'],
      backgroundColor: theme.$white,
      marginTop: pt(20)
    },

    containerlarge: {
      paddingTop: theme['$cell-large-padding-top-bottom'],
      paddingBottom: theme['$cell-large-padding-top-bottom'],
      paddingLeft: theme['$cell-large-padding-left-right'],
      paddingRight: theme['$cell-large-padding-left-right']
    },
    innerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    innerCentertrue: {
      alignItems: 'center'
    },
    titleContainer: {
      flexDirection: 'column',
      alignSelf: 'center',
      flex: 1
    },
    tText: {
      fontSize: theme['$cell-title-font'],
      color: theme.$gray2
    },
    tTextSizelarge: {
      fontSize: theme['$font-size-3']
    },
    subText: {
      fontSize: theme['$cell-title-desc-font'],
      color: theme.$gray2
    },
    subTextSizelarge: {
      fontSize: theme['$cell-title-font']
    },
    descC: {
      alignSelf: 'flex-start',
      textAlign: 'right'
    },
    descText: {
      fontSize: theme['$cell-desc-font'],
      color: theme['$cell-desc-color']
    },
    descAlonetrue: {
      color: theme['$cell-color']
    },
    descSizelarge: {
      fontSize: theme['$cell-desc-font']
    },
    containerCellGrouptrue: {
      margin: 0,
      borderRadius: 0,
      borderBottomWidth: px(theme['$cell-after-border-bottom-width']),
      borderBottomColor: theme['$cell-after-border-bottom-color']
    },
    containerIsLasttrue: {
      margin: 0,
      borderRadius: 0,
      borderBottomWidth: 0
    },
    icon: {
      marginRight: theme['$cell-default-icon-margin-right']
    }
  });
};
