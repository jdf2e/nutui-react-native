import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden',
      width: theme['$switch-width'],
      height: theme['$switch-height'],
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme['$switch-border-radius']
    },
    disabletrue: {
      opacity: 0.4
    },
    innerStyle: {
      width: theme['$switch-width'],
      height: theme['$switch-height'],
      justifyContent: 'center',
      borderRadius: theme['$switch-border-radius']
    },
    switchHandle: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme['$switch-inside-width'],
      height: theme['$switch-inside-height'],
      borderRadius: 999,
      backgroundColor: theme.$white
    },
    switchHandleCheckedtrue: {
      top: pt(8),
      right: pt(8)
    },
    switchHandleCheckedfalse: {
      top: pt(8),
      left: pt(8)
    },
    switchInner: {
      color: theme.$white,
      fontSize: pt(24)
    },
    innertrue: {
      marginLeft: pt(7),
      marginRight: pt(25)
    },
    innerfalse: {
      marginLeft: pt(25),
      marginRight: pt(7)
    },
    line: {
      width: pt(16),
      height: pt(4),
      backgroundColor: theme['$switch-close--cline-bg-color'],
      borderRadius: pt(4)
    }
  });
};
