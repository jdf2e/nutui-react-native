import { StyleSheet } from 'react-native';
import px from '../utils/px';
import pt from '../utils/pt';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'column'
    },
    tableBorder: {
      borderTopColor: theme['$table-border-color'],
      borderTopWidth: px(theme['$table-border-width'])

    },
    rightBorder: {
      borderRightWidth: px(theme['$table-border-width']),
      borderRightColor: theme['$table-border-color']
    },
    mainStyle: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: theme.$white
    },
    mainStriped: {
    },
    mainHead: {
      flexDirection: 'row'
    },
    mainHeadTr: {
      flex: 1,
      flexDirection: 'row'
    },
    mainBody: {
    },
    summary: {
      backgroundColor: theme.$white,
      padding: pt(20)
    },
    summaryText: {
      fontSize: pt(28),
      color: '#1a1a1a'
    },
    nodata: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: pt(20)
    },
    nodataText: {
      fontSize: pt(28),
      color: '#1a1a1a'
    },
    mainHeadTh: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      paddingTop: pt(theme['$table-cols-padding']),
      paddingBottom: pt(theme['$table-cols-padding']),
      paddingLeft: pt(theme['$table-cols-padding']),
      paddingRight: pt(theme['$table-cols-padding'])
    },
    trBorder: {
      borderBottomColor: theme['$table-border-color'],
      borderBottomWidth: px(1),
      borderLeftColor: theme['$table-border-color'],
      borderLeftWidth: px(1)
    },
    trAlignleft: {
      justifyContent: 'flex-start'
    },
    trAligncenter: {
      justifyContent: 'center'
    },
    trAlignright: {
      justifyContent: 'flex-end'
    },
    title: {
      fontSize: pt(28),
      color: '#1a1a1a'
    },
    trtd: {
      flex: 1,
      flexDirection: 'row',
      padding: pt(20)
    },
    mainBodyTr: {
      flexDirection: 'row'
    }
  });
};
