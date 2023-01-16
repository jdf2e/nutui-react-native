import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      paddingTop: pt(4),
      paddingBottom: pt(4),
      paddingLeft: pt(8),
      paddingRight: pt(8),
      borderRadius: pt(8)
    },
    typedefault: {
      backgroundColor: theme['$tag-default-background-color']
    },
    typeprimary: {
      backgroundColor: theme['$tag-primary-background-color']
    },
    typesuccess: {
      backgroundColor: theme['$tag-success-background-color']
    },
    typewarning: {
      backgroundColor: theme['$tag-warning-background-color']
    },
    textPlaintruedefault: {
      color: theme['$tag-default-plain-color']
    },
    textPlaintrueprimary: {
      color: theme['$tag-primary-plain-color']
    },
    textPlaintruesuccess: {
      color: theme['$tag-success-plain-color']
    },
    textPlaintruewarning: {
      color: theme['$tag-warning-plain-color']
    },
    typedanger: {},
    plaintrue: {
      backgroundColor: theme['$tag-default-color'],
      borderRadius: pt(theme['$tag-default-border-radius']),
      borderWidth: px(theme['$tag-border-width']),
      borderStyle: 'solid',
      borderColor: theme['$tag-plain-border-color']
    },
    roundtrue: {
      borderRadius: theme['$tag-round-border-radius']
    },
    marktrue: {
      borderTopRightRadius: theme['$tag-round-border-radius'],
      borderBottomRightRadius: theme['$tag-round-border-radius'],
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    text: {
      fontSize: pt(22),
      fontWeight: 'normal',
      color: theme['$tag-default-color']
    },
    closeContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    img: {
      width: pt(24),
      height: pt(24),
      marginLeft: pt(8)
    }
  });
};
