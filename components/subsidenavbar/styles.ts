import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

const $nutSidenavbarItemHeight = pt(80);

export default () =>
  StyleSheet.create({
    nutShow: {
      height: 'auto',
      overflow: 'visible'
    },
    nutHide: {
      height: 0,
      overflow: 'hidden'
    },
    nutSubsidenavbar__title: {
      height: $nutSidenavbarItemHeight,
      paddingVertical: pt(20),
      paddingLeft: pt(70),
      paddingRight: pt(16),
      backgroundColor: '#f7f8fa'

    },
    nutSubsidenavbar__title__text: {
      color: '#1a1a1a'
    },
    borderBt: {
      borderBottomWidth: pt(1),
      borderBottomColor: '#eeeff2'
    },
    nutSubsidenavbar__content: {
      position: 'relative'
    },
    arrowIcon: {
      position: 'absolute',
      width: 0,
      height: 0,
      right: pt(32),
      top: pt(36)
    },
    arrowDown: {
      borderStyle: 'solid',
      borderTopWidth: pt(8),
      borderTopColor: '#909ca4',
      borderLeftWidth: pt(8),
      borderLeftColor: 'transparent',
      borderRightWidth: pt(8),
      borderRightColor: 'transparent'
    },
    arrowUp: {
      borderStyle: 'solid',
      borderBottomWidth: pt(8),
      borderBottomColor: '#909ca4',
      borderLeftWidth: pt(8),
      borderLeftColor: 'transparent',
      borderRightWidth: pt(8),
      borderRightColor: 'transparent'
    }
  });
