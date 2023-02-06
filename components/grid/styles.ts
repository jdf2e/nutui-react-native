import { StyleSheet } from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    nut_grid_container: {
      flexDirection: 'row',
      backgroundColor: theme['$grid-bg-color'],
      flexWrap: 'wrap',
      width: '100%'
    },
  });
