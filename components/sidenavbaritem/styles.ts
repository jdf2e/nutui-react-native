import { StyleSheet } from 'react-native';
import pt from '../utils/pt';

const $nutSidenavbarItemHeight = pt(80);

export default (theme: any) =>
  StyleSheet.create({
    nutsubsidenavbar__item: {
      height: $nutSidenavbarItemHeight,
      paddingVertical: pt(20),
      paddingLeft: pt(110),
      paddingRight: pt(16)
    },
    nutsubsidenavbar__item__text: {
      color: theme.$gray2
    },
    borderBt: {
      borderBottomWidth: pt(1),
      borderBottomColor: '#eeeff2'
    }
  });
