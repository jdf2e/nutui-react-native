import React, {
  useRef,
  useMemo
} from 'react';

import {
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import { DataContext } from './userContext';

import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';

import PageView from './pageview';

import { useConfig } from '../configprovider';
import swiperStyles from './styles';

export type SwiperRef = {
  to: (index: number) => void;
  next: () => void;
  prev: () => void;
};
interface Style {
  width?: number;
  height?: number;
}

export interface SwiperProps {
  width: number; // 轮播卡片的宽度
  height: number; // 轮播卡片的高度
  duration: number | string; // 动画时长（单位是ms）
  initPage: number; // 初始化索引值
  autoPlay: number; // 自动轮播时长，0表示不会自动轮播
  direction: 'horizontal' | 'vertical'; // 轮播方向,可选值horizontal,vertical
  paginationColor: string; // 分页指示器选中的颜色
  paginationBgColor: string;
  paginationVisible: boolean; // 分页指示器是否展示
  loop: boolean; // 是否循环轮播
  touchable: boolean; // 是否可触摸滑动
  isCenter: boolean; // 是否居中展示，必须传对应的width 和 height
  style?: StyleProp<ViewStyle>;
  pageContent?: React.ReactNode; // 自定义指示器
  onChange?: (currPage: number) => void; // 卡片切换后的回调
}

const defaultProps = {
  width: 375,
  height: 0,
  duration: 500,
  initPage: 0,
  autoPlay: 0,
  direction: 'horizontal',
  paginationColor: '#fff',
  paginationBgColor: '#d3d3d3',
  paginationVisible: false,
  loop: true,
  touchable: true,
  isCenter: false
} as SwiperProps;

type Parent = {
  propSwiper: SwiperProps;
  size?: number;
};

export const Swiper = React.forwardRef<
SwiperRef,
Partial<SwiperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
>((props, ref) => {
  const propSwiper = { ...defaultProps, ...props };
  const {
    width,
    height,
    children,
    direction,
    loop,
    pageContent,
    onChange,
    initPage,
    paginationColor,
    paginationBgColor,
    paginationVisible,
    touchable,
    autoPlay,
    isCenter,
    style
  } = propSwiper;

  const { theme } = useConfig();
  const styles = swiperStyles(theme);

  const pageViewRef = useRef<any>(null);

  const isVertical = direction === 'vertical';

  const size = isVertical ? height : width;

  const { childs, childCount } = useMemo(() => {
    let childCount = 0;
    const childs = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null;
      childCount++;

      return child;
    });

    return {
      childs,
      childCount
    };
  }, [children]);
  // 父组件参数传入子组件item
  const parent: Parent = {
    propSwiper,
    size
  };

  const itemStyle2 = () => {
    const styleObj: Style = {};

    if (size) {
      if (direction === 'horizontal') {
        styleObj.width = size;
      } else {
        styleObj.height = size;
      }
    }

    return styleObj;
  };

  const to = (index: number) => {
    const target = pageViewRef.current;

    target.goTo(index);
  };

  // 下一页
  const next = () => {
    const target = pageViewRef.current;

    target.scrollNextPage();
  };

  const prev = () => {
    const target = pageViewRef.current;

    target.goPrev();
  };

  React.useImperativeHandle(ref, () => ({
    to,
    next,
    prev
  }));

  const itemStyle = [
    styles.itemStyle,
    itemStyle2()
  ];

  const wrapStyle = [
    fConStyle(toObj(style || {}))
  ];

  return (
    <DataContext.Provider
      value={parent}
    >
      <View style={wrapStyle}>

        {
          childCount > 0
            ? (
              <PageView
                ref={pageViewRef}
                style={{
                  width: '100%',
                  height: height
                }}
                styles={styles}
                vertical={isVertical}
                autoplay={autoPlay > 0}
                autoplayInterval={autoPlay || 0}
                infinite={loop}
                selectedIndex={initPage}
                dotStyle={{
                  backgroundColor: paginationBgColor
                }}
                dotActiveStyle={{
                  backgroundColor: paginationColor
                }}
                afterChange={onChange}
                dots={paginationVisible || !!pageContent}
                pagination={pageContent
                  ? () => {
                    return pageContent;
                  }
                  : undefined}
              >

                {
                  React.Children.map(childs, (child: any, index: number) => {
                    return (
                      <View
                        style={itemStyle}
                        key={index}
                      >
                        {child}
                      </View>
                    );
                  })
                }

              </PageView>
            )
            : null
        }

      </View>
    </DataContext.Provider>
  );
});

Swiper.defaultProps = defaultProps;
Swiper.displayName = 'NutSwiper';
