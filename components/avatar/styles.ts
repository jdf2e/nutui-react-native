import { StyleSheet } from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sizelarge: {
      width: theme['$avatar-large-width'],
      height: theme['$avatar-large-height'],
    },
    sizesmall: {
      width: theme['$avatar-small-width'],
      height: theme['$avatar-small-height'],
    },
    sizenormal: {
      width: theme['$avatar-normal-width'],
      height: theme['$avatar-normal-height'],
    },
    shapelargeround: {
      borderRadius: theme['$avatar-round-large-border-radius'],
    },
    shapesmallround: {
      borderRadius: theme['$avatar-round-small-border-radius'],
    },
    shapenormalround: {
      borderRadius: theme['$avatar-round-normal-border-radius'],
    },
    shapelargesquare: {
      borderRadius: theme['$avatar-square-border-radius'],
    },
    shapesmallsquare: {
      borderRadius: theme['$avatar-square-border-radius'],
    },
    shapenormalsquare: {
      borderRadius: theme['$avatar-square-border-radius'],
    },
    avatarImg: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
    },
    text: {},
  });
};
