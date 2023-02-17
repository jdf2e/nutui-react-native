import React, { FunctionComponent} from 'react'

import {
  View,
  FlatList
} from 'react-native';

import { IVirtualListProps } from './type'

export type VirtualListProps = IVirtualListProps
const defaultProps = {} as VirtualListProps

export const VirtualList: FunctionComponent<
  VirtualListProps & React.HTMLAttributes<HTMLDivElement>
> = (props: VirtualListProps) => {
  const {
    sourceData = [],
    ItemRender,
    horizontal = false,
    handleScroll,
    onScroll,
    className,
    containerSize,
    extraData={},
    ...rest
  } = props
  
  if(horizontal){
    return (
      <View
        style={[containerSize ? {
          height:containerSize
        }: {}]
        }>
      <FlatList
        data={sourceData}
        onScroll={(e)=>{onScroll && onScroll(e)}}
        extraData={extraData}
        horizontal={horizontal}
        renderItem={ItemRender}
        />
      </View>
    )
  }
  return (
    <View
    style={[containerSize ? {
      height:containerSize,
    }: {flex:1}]
    }
    >
    <FlatList
      data={sourceData}
      onScroll={(e)=>{onScroll && onScroll(e)}}
      extraData={extraData}
      horizontal={horizontal}
      renderItem={ItemRender}/>
</View>
  )
}

VirtualList.defaultProps = defaultProps
VirtualList.displayName = 'NutVirtualList'
