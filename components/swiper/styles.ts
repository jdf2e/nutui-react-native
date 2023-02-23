import {
  StyleSheet
} from 'react-native';

export default (theme: any) => {
  return StyleSheet.create({
    itemStyle: {
      height: '100%',
      width: '100%'
    },
    pagination: {
      position: 'absolute',
      alignItems: 'center'
    },
    paginationX: {
      bottom: theme['$swiper-pagination-cross-absolute-bottom'],
      left: theme['$swiper-pagination-cross-absolute-left'],
      right: theme['$swiper-pagination-cross-absolute-right']
    },
    paginationY: {
      left: theme['$swiper-pagination-vertical-absolute-left']
    },
    verticalPointStyle: {
      width: theme['$swiper-pagination-vertical-item-width'],
      height: theme['$swiper-pagination-vertical-item-height'],
      borderRadius: theme['$swiper-pagination-item-active-border-radius']
    },
    pointStyle: {
      width: theme['$swiper-pagination-item-width'],
      height: theme['$swiper-pagination-item-height'],
      borderRadius: theme['$swiper-pagination-item-border-radius'],
      backgroundColor: theme.$white
    },
    verticalPointActiveStyle: {
      width: theme['$swiper-pagination-vertical-item-width'],
      height: theme['$swiper-pagination-vertical-item-active-height'],
      borderRadius: theme['$swiper-pagination-item-active-border-radius']
    },
    pointActiveStyle: {
      backgroundColor: theme['$swiper-pagination-active-background-color']
    },
    spaceStyle: {
      marginLeft: theme['$swiper-pagination-space-margin-left'],
      marginRight: theme['$swiper-pagination-space-margin-right'],
      marginTop: theme['$swiper-pagination-space-margin-top'],
      marginBottom: theme['$swiper-pagination-space-margin-bottom']
    },
    wrapperStyle: {
      overflow: 'hidden'
    }
  });
};
