import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) =>
  StyleSheet.create({
    nutInput: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      width: '100%',
      paddingVertical: theme['$input-padding-v'],
      paddingHorizontal: theme['$input-padding-h'],
      lineHeight: pt(48),
      backgroundColor: theme['$white'],
    },
    nutInputCenter: {
      alignItems: 'center',
    },
    nutInputDisabled: {},
    nutInputRequired: {},
    nutInputError: {},
    nutInputErrorMessage: {
      color: theme['$input-required-color'],
      fontSize: pt(24),
      lineHeight: pt(48),
    },
    nutInputBorder: {
      borderBottomWidth: px(1),
      borderBottomColor: theme['$input-border-bottom'],
    },
    nutInputRightMark: {},
    nutInputWordLimit: {
      display: 'flex',
      textAlign: 'right',
      justifyContent: 'flex-end',
      marginTop: pt(8),
      color: '#808080',
      fontSize: pt(24),
    },
    nutInputWordNum: {},
    nutInputButton: {},
    nutInputRightIcon: {},
    nutInputClear: {
      position: 'absolute',
      right: 0,
    },
    nutInputValue: {
      flex: 1,
    },
    nutInputMainCon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nutInputInner: {
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
    },
    nutInputText: {
      padding: 0,
      width: '90%',
      height: pt(48),
      textAlign: 'left',
      borderWidth: 0,
      outlineWidh: 0,
      backgroundColor: 'transparent',
      color: theme['$gray1'],
    },
    nutInputText_disabled: {
      color: theme['$input-disabled-color'],
      backgroundColor: 'none',
      cursor: 'not-allowed',
      opacity: 1,
    },
    nutInputText_error: {
      color: theme['$input-required-color'],
    },

    nutInputLabel: {
      width: pt(160),
      overflow: 'hidden',
      marginRight: pt(12),
      textAlign: 'left',
    },
    nutInputLabel_required: {
      position: 'absolute',
      top: pt(28),
      left: pt(28),
      color: theme['$input-required-color'],
    },
    nutInputLabelString: {
      color: theme['$gray1'],
      fontSize: theme['$input-font-size'],
      lineHeight: pt(48),
    },
    nutInputLeftIcon: {},
  });
