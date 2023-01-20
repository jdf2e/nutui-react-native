import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import statusBarHeight from '../utils/statusBarHeight';

const $nutSidenavbarItemHeight = pt(80);

export default (theme: any) =>
  StyleSheet.create({
    nutSidenavbar: {
      color: '#1d1d21',
      fontSize: pt(28),
      height: '100%',
      paddingTop: statusBarHeight,
      backgroundColor: theme.$gray6
    },
    nutSidenavbar__content: {
      position: 'relative'
    },
    nutShow: {
      height: 'auto',
      overflow: 'visible'
    },
    nutHide: {
      height: 0,
      overflow: 'hidden'
    },
    nutSidenavbar__title: {
      height: $nutSidenavbarItemHeight,
      paddingVertical: pt(20),
      paddingLeft: pt(40),
      paddingRight: pt(16),
      backgroundColor: '#f4f4f4'
    },
    nutSidenavbar__title__text: {
      color: '#1a1a1a'
    },
    borderBt: {
      borderBottomWidth: pt(1),
      borderBottomColor: '#eeeff2'
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
