import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

export default (theme: any) =>
  StyleSheet.create({
    nutTextarea: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      backgroundColor: theme['$white'],
      fontSize: theme['$textarea-font'],
      padding: theme['$textarea-padding'],
    },
    nutTextarea__disabled: {},
    nutTextarea__textarea: {
      width: ' 100%',
      minWidth: 0,
      margin: 0,
      padding: 0,
      lineHeight: theme['$textarea-text-line-height'],
      textAlign: 'left',
      backgroundColor: 'transparent',
      border: 0,
    },
    textarea__limit: {
      position: 'absolute',
      right: pt(30),
      bottom: pt(24),
      fontSize: theme['$textarea-font'],
      color: theme['$textarea-limit-color'],
    },
  });
