import React, { FunctionComponent, useEffect, useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import pt from '../utils/pt' 
import deviceWidth from '../utils/deviceWidth'

import { useConfig } from '../configprovider';
import timeDetailStyles from './styles';

export interface TimeType {
  key?: string | number
  list: string[]
}
export interface TimeDetailProps {
  className?: string
  currentKey: string | number
  currentTime: TimeType[]
  times: TimeType[]
  select: (time: string) => void
}
const defaultProps = {
  className: '',
  currentKey: 0,
  currentTime: [] as TimeType[],
  times: [],
  select: () => null,
} as TimeDetailProps
export const TimeDetail: FunctionComponent<
  Partial<TimeDetailProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, times, className, currentKey, currentTime, select } = {
    ...defaultProps,
    ...props,
  }

  const { theme } = useConfig();
  const mStyles = timeDetailStyles(theme);
  const [renderData, setRenderData] = useState<string[]>([])
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const currentData = times.find(
      (timesItem: TimeType) => String(timesItem.key) === String(currentKey)
    )
    const renderData = currentData ? currentData.list : []
    // 根据选中的日期回显当前日期可配送的时间
    setRenderData(renderData)
  }, [times, currentKey])
  // 选中时间的回调
  const handleTime = (time: string) => {
    select(time)
  }
  // 选中的配送时间增加 active 类名
  const getDetailClass = (item: string): string => {
    let initClass = 'nut-timedetail__item'
    const curTimeData = currentTime.find(
      (item: TimeType) => String(item.key) === String(currentKey)
    )
    if (curTimeData && curTimeData.list && curTimeData.list.includes(item)) {
      initClass += ' nut-timedetail__item-active'
    }
    return initClass
  }

  return (
    <View 
    style={mStyles.nut_timedetail_container}
    onLayout={(e)=>{
      setItemWidth(((deviceWidth*3/5 - 3* pt(20))/2 ))
    }}
    >
      {renderData.map((item: string, index: number) => {
     return   <TouchableOpacity
          style={[
            getDetailClass(item) === 'nut-timedetail__item'?
            mStyles.nut_timedetail_no_active :
            mStyles.nut_timedetail_active
          ,{
            width:itemWidth
          }]}
          key={item}
          onPress={() => handleTime(item)}
        >
        <Text style={getDetailClass(item) === 'nut-timedetail__item'?
            mStyles.nut_timedetail_no_active_text :
            mStyles.nut_timedetail_active_text}>{item}</Text> 
        </TouchableOpacity>
})}
    </View>
    
  )
}

TimeDetail.defaultProps = defaultProps
TimeDetail.displayName = 'NutTimeDetail'
