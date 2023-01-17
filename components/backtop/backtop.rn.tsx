import React, { FunctionComponent} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from '../icon/index'
import { IComponent, ComponentDefaults } from '../utils/typings'
import pt from '../utils/pt'
import { useConfig } from '../configprovider';
import backTopStyles from './styles';

export interface BackTopProps extends IComponent {
  className?: string
  bottom: number
  right: number
  elId: string
  distance: number
  zIndex: number
  isAnimation: boolean
  duration: number
  children?: HTMLElement | any
  style?: React.CSSProperties
  isShow: boolean
  onPress?: (event: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  bottom: 20,
  right: 10,
  elId: 'body',
  distance: 200,
  zIndex: 10,
  isAnimation: true,
  duration: 1000,
  isShow:false
} as BackTopProps

export const BackTop: FunctionComponent<
  Partial<BackTopProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onPress'>
> = (props) => {
  const {
    children,
    bottom,
    right,
    elId,
    distance,
    zIndex,
    isAnimation,
    className,
    duration,
    style,
    onPress,
    iconClassPrefix,
    iconFontClassName,
    isShow
  } = {
    ...defaultProps,
    ...props,
  }

  const { theme } = useConfig();
  const mStyles = backTopStyles(theme);

  // 返回顶部点击事件
  const goTop = (e: any) => {
    onPress && onPress(e)
  }

  const backTopClass = {
    position:'absolute',
    right: pt(Number(right)),
    bottom: pt(Number(bottom)),
    zIndex,
  }
  
  if(isShow){
    return (
      <TouchableOpacity
        style={{ ...backTopClass, ...style }}
        onPress={(e) => {
          goTop(e)
        }}
      >
        {children || (
          <View style={mStyles.nut_backtop_container}>
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            size="16"
            name="top"
          />
          <Text style={mStyles.nut_backtop_text}>顶部</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }else{
    return null;
  }
}

BackTop.defaultProps = defaultProps
BackTop.displayName = 'NutBackTop'
