import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_pop_full: {
        width: '100%',
        height: '100%',
      },
      nut_popbg_full: {
        width: '100%',
        height: '100%',
        backgroundColor:theme['$popup-bg']
      },
      nut_pop_top_radius:{
        top: 0,
        left: 0,
        width: '100%',
        borderBottomLeftRadius: theme['$popup-top-radius'],
        borderBottomRightRadius: theme['$popup-top-radius']
      },
      nut_pop_top:{
        top: 0,
        left: 0,
        width: '100%'
      },
      nut_pop_bottom_radius:{
        bottom: 0,
        left: 0,
        width: '100%',
        borderTopLeftRadius: theme['$popup-bottom-radius'],
        borderTopRightRadius: theme['$popup-bottom-radius']
      },
      nut_pop_bottom: {
        bottom: 0,
        left: 0,
        width: '100%'
      },
      nut_pop_right:{
        bottom: 0,
        right: 0,
      },
      nut_pop_left: {
        bottom: 0,
        left: 0,
      },
      nut_icon_top_left:{
        top: theme['$popup-icon-margin'],
        left: theme['$popup-icon-margin']
      },
      nut_icon_top_right:{
        top: theme['$popup-icon-margin'],
        right: theme['$popup-icon-margin']
      },
      nut_icon_bottom_left:{
        bottom: theme['$popup-icon-margin'],
        left: theme['$popup-icon-margin']
      },
      nut_icon_bottom_right:{
        bottom: theme['$popup-icon-margin'],
        right: theme['$popup-icon-margin'],
      }
  });