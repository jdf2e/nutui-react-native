import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_overlay_full: {
        width: '100%',
        height: '100%',
      },
    nut_overlay_full_bg: {
        width: '100%',
        height: '100%',
        backgroundColor:theme['$overlay-bg-color']
    }
  });