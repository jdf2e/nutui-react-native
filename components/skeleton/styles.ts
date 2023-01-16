import {
  StyleSheet
} from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden'
    },
    nutSkeletonContent: {
      flexDirection: 'row'
    },
    blockStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: theme['$skeleton-content-block-background-color'],
      marginBottom: theme['$skeleton-content-block-margin-bottom']
    },
    blockRoundStyle: {
      borderRadius: theme['$skeleton-content-block-border-radius']
    },
    avatarStyle: {
      marginRight: theme['$skeleton-content-avatar-margin-right'],
      backgroundColor: theme['$skeleton-content-avatar-background-color']
    },
    skeletonContentLine: {
      flexDirection: 'column'
    },
    skeletonTitle: {
      width: '30%',
      height: theme['$skeleton-content-line-height'],
      marginBottom: theme['$skeleton-content-margin-bottom'],
      backgroundColor: theme['$skeleton-content-line-title-background-color']
    },
    skeletonAnimation: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      zIndex: 999
    }
  });
};
