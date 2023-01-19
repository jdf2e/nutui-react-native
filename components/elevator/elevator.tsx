import React, {
  FunctionComponent,
  useRef,
  useState,
  createContext,
  ReactNode
} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  PanResponder,
  TouchableOpacity,
  NativeModules,
  findNodeHandle,
  FlatList
} from 'react-native';
import { animated } from '@react-spring/native';
import { useConfig } from '../configprovider';
import elevatorStyles from './styles';

export const elevatorContext = createContext({} as ElevatorData);

export interface ElevatorProps {
  height: number;
  acceptKey: string;
  indexList: any[];
  isSticky: boolean;
  spaceHeight: number;
  titleHeight: number;
  style?: StyleProp<ViewStyle> | undefined;
  children: ReactNode;
  onClickItem: (key: string, item: ElevatorData) => void;
  onClickIndex: (key: string) => void;
}
const defaultProps = {
  height: 200,
  acceptKey: 'title',
  indexList: [] as any[],
  isSticky: false,
  spaceHeight: 23,
  titleHeight: 35
} as ElevatorProps;

interface ElevatorData {
  name: string;
  id: number | string;
  [key: string]: string | number;
}

export const Elevator: FunctionComponent<
Partial<ElevatorProps>
> = (props) => {
  const {
    height,
    acceptKey,
    indexList,
    isSticky,
    spaceHeight,
    titleHeight,
    style,
    onClickItem,
    onClickIndex,
    children
  } = {
    ...defaultProps,
    ...props
  };
  const { theme } = useConfig();
  const styles = elevatorStyles(theme);

  const listview = useRef<FlatList>(null);
  const listHeight = useRef<any>([]);
  const [scrollY, setScrollY] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const [currentData, setCurrentData] = useState<ElevatorData>(
    {} as ElevatorData
  );
  const [currentKey, setCurrentKey] = useState('');
  const [codeIndex, setCodeIndex] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<boolean>(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onStartShouldSetPanResponderCapture: () => false,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderTerminationRequest: () => false, // 这个很重要，这边不放权
    onShouldBlockNativeResponder: () => false,
    onMoveShouldSetPanResponder: (evt, g) => {
      // 解决PanResponder中的onPress无作用
      // 当大于5时才进入移动事件，有的情况下需要将onStartShouldSetPanResponderCapture设为false
      if (Math.abs(g.dx) > 5 || Math.abs(g.dy) > 5) {
        return true;
      } else if (Math.abs(g.dx) <= 5 || Math.abs(g.dy) <= 5) {
        return false;
      }

      return false;
    },
    // onPanResponderGrant: (e, gesture) => {
    //   console.log('onPanResponderGrant', e.nativeEvent, gesture);
    // },
    onPanResponderMove: (e, gesture) => {
    //   const padding = theme['$elevator-list-item-bars-padding'];

      let index = Math.ceil((gesture.moveY - barTop) / spaceHeight);

      if (index >= indexList.length - 1) {
        index = indexList.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      setCodeIndex(index);
      scrollTo(index);
      setScrollStart(true);
    },
    onPanResponderRelease: () => {
      setScrollStart(false);
    }
  });

  // 获取距离屏幕顶高度
  const getBarInfo = (e: any) => {
    const handle = findNodeHandle(e.target);

    NativeModules.UIManager.measure(handle, (
      x0: number,
      y0: number,
      width: number,
      height: number,
      x: number,
      py: number
    ) => {
      setBarTop(py);
    });
  };
  const getItemsInfo = (e: any, index: number) => {
    const { height } = e.nativeEvent.layout;

    listHeight.current[index] = height;
  };

  const scrollTo = (index: number) => {
    if (!index && index !== 0) {
      return;
    }

    if (listview.current) {
      listview.current.scrollToIndex({
        index: index,
        animated: false
      });
    }
  };

  const handleClickItem = (key: string, item: ElevatorData) => {
    onClickItem?.(key, item);
    setCurrentData(item);
    setCurrentKey(key);
  };

  const handleClickIndex = (key: string, index: number) => {
    setCurrentKey(key);
    setCodeIndex(index);
    scrollTo(index);
    setScrollStart(true);
    setTimeout(() => {
      setScrollStart(false);
    }, 1000);
    onClickIndex?.(key);
  };

  const onScroll = (e: any) => {
    setScrollY(e.nativeEvent.contentOffset.y);

    listHeight.current.reduce((top: number, height: number, index: number) => {
      if (scrollY > top) {
        setCodeIndex(index);
      }

      return top + height;
    }, 0);
  };

  const renderItem = ({ item, index }: {item: any; index: number}) => {
    return (
      <View style={styles.elevatorList__item} key={item[acceptKey]} onLayout={(e) => getItemsInfo(e, index)}>
        <View style={[styles.elevatorList__item__code, { height: titleHeight }]}>
          <Text style={styles.elevatorList__item__codeText}>{item[acceptKey]}</Text>
        </View>
        {item.list.map((subitem: ElevatorData) => {
          const activeText = currentData.id === subitem.id && currentKey === item[acceptKey]
            ? styles.elevatorList__item__nameHightcolor
            : {};

          return (
            <TouchableOpacity
              style={styles.elevatorList__item__name}
              key={subitem.id}
              onPress={() =>
                handleClickItem(item[acceptKey], subitem)
              }
            >
              {children
                ? (
                  <elevatorContext.Provider value={subitem}>
                    {children}
                  </elevatorContext.Provider>
                )
                : (
                  <Text style={[styles.elevatorList__item__nameText, activeText]}>{subitem.name}</Text>
                )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const transformBar = [{
    translateY: -(spaceHeight * indexList.length) / 2
  }] || theme['$elevator-list-item-code-current-transform'];

  return (
    <View style={[styles.elevator, style]}>
      {isSticky && scrollY > 0
        ? (
          <View style={styles.elevatorList__fixed}>
            <Text style={styles.elevatorList__fixedTitle}>
              {indexList[codeIndex][acceptKey]}
            </Text>
          </View>
        )
        : null}
      <View style={[styles.elevatorList, { height }]} >
        <FlatList
          style={styles.elevatorList__inner}
          data={indexList}
          renderItem={renderItem}
          initialNumToRender={20}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => '' + index}
          onScroll={onScroll}
          ref={listview}
        />

      </View>
      {indexList.length && scrollStart
        ? (
          <View style={styles.elevatorCodeCurrent}>
            <Text style={styles.elevatorCodeCurrentText}>
              {indexList[codeIndex][acceptKey]}
            </Text>
          </View>
        )
        : null}
      <View style={[styles.elevatorBars, { transform: transformBar }]} onLayout={getBarInfo}>
        <animated.View
          style={styles.elevatorBars__inner}
          {...panResponder.panHandlers}
        >
          {indexList.map((item: any, index: number) => {
            return (
              <Text
                style={[
                  styles.elevatorBars__inner__item,
                  { height: spaceHeight },
                  item[acceptKey] === indexList[codeIndex][acceptKey] && styles.elevatorBars__inner__itemActive
                ]}
                key={item[acceptKey]}
                onPress={() => handleClickIndex(item[acceptKey], index)}
              >
                {item[acceptKey]}
              </Text>
            );
          })}
        </animated.View>
      </View>
    </View>
  );
};

Elevator.defaultProps = defaultProps;
Elevator.displayName = 'NutElevator';
