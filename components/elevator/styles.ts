import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    elevator: {
      width: ' 100%',
      overflow: 'hidden'
    },
    elevatorList: {
      top: 1,
      overflow: 'hidden'
    },
    elevatorList__inner: {
      height: '100%',
      width: '100%',
      backgroundColor: theme['$elevator-list-inner-bg-color']
    },
    elevatorList__item: {

    },
    elevatorList__item__code: {
      justifyContent: 'center',
      height: theme['$elevator-list-item-code-height'],
      lineHeight: theme['$elevator-list-item-code-line-height'],
      paddingHorizontal: theme['$elevator-list-item-code-padding'],
      borderBottomColor: theme['$elevator-list-item-code-after-bg-color'],
      borderBottomWidth: theme['$elevator-list-item-code-after-height']
    },
    elevatorList__item__codeText: {
      fontSize: theme['$elevator-list-item-code-font-size'],
      color: theme['$elevator-list-item-code-font-color'],
      fontWeight: theme['$elevator-list-item-code-font-weight']
    },
    elevatorList__item__name: {
      justifyContent: 'center',
      paddingHorizontal: theme['$elevator-list-item-name-padding'],
      height: theme['$elevator-list-item-name-height'],
      lineHeight: theme['$elevator-list-item-name-line-height']
    },
    elevatorList__item__nameText: {
      fontSize: theme['$elevator-list-item-font-size'],
      color: theme['$elevator-list-item-font-color']
    },
    elevatorList__item__nameHightcolor: {
      color: theme['$elevator-list-item-highcolor']
    },
    elevatorList__fixed: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      justifyContent: 'center',
      paddingHorizontal: theme['$elevator-list-item-code-padding'],
      height: theme['$elevator-list-item-code-height'],
      lineHeight: theme['$elevator-list-item-code-line-height'],
      backgroundColor: theme['$elevator-list-fixed-bg-color']
      //   boxShadow: theme['$elevator-list-fixed-box-shadow']
    },
    elevatorList__fixedTitle: {
      fontSize: theme['$elevator-list-item-code-font-size'],
      fontWeight: theme['$elevator-list-item-code-font-weight'],
      color: theme['$elevator-list-fixed-color']
    },
    elevatorCodeCurrent: {
      position: theme['$elevator-list-item-code-current-position'],
      right: theme['$elevator-list-item-code-current-right'],
      top: theme['$elevator-list-item-code-current-top'],
      transform: theme['$elevator-list-item-code-current-transform'],
      width: theme['$elevator-list-item-code-current-width'],
      height: theme['$elevator-list-item-code-current-height'],
      borderRadius: theme['$elevator-list-item-code-current-border-radius'],
      backgroundColor: theme['$elevator-list-item-code-current-bg-color']
    },
    elevatorCodeCurrentText: {
      lineHeight: theme['$elevator-list-item-code-current-line-height'],
      //   boxShadow: theme['$elevator-list-item-code-current-box-shadow'],
      textAlign: theme['$elevator-list-item-code-current-text-align']
    },
    elevatorBars: {
      position: theme['$elevator-list-item-bars-position'],
      right: theme['$elevator-list-item-bars-right'],
      top: theme['$elevator-list-item-bars-top'],
      //   transform: theme['$elevator-list-item-bars-transform'],
      //   paddingVertical: theme['$elevator-list-item-bars-padding'],
      backgroundColor: theme['$elevator-list-item-bars-background-color'],
      borderRadius: theme['$elevator-list-item-bars-border-radius'],
      textAlign: theme['$elevator-list-item-bars-text-align'],
      zIndex: theme['$elevator-list-item-bars-z-index']
    },
    elevatorBars__inner: {

    },
    elevatorBars__inner__item: {
      padding: theme['$elevator-list-item-bars-inner-item-padding'],
      fontSize: theme['$elevator-list-item-bars-inner-item-font-size']
    },
    elevatorBars__inner__itemActive: {
      color: theme['$elevator-list-item-bars-inner-item-active-color']
    }
  });
