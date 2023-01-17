import React, { CSSProperties, FunctionComponent, ReactNode ,useState} from 'react'
import Icon from '../icon/index'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { IComponent, ComponentDefaults } from '../utils/typings'
import { useConfig } from '../configprovider';
import gridItemStyles from './styles';

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends IComponent {
  text: string | ReactNode
  icon: string | ReactNode
  iconSize?: string | number
  iconColor?: string
  parentIconSize?: string | number
  parentIconColor?: string
  index: number

  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  onPress: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  text: '',
  icon: '',
  iconSize: '',
  iconColor: '',
  parentIconSize: '',
  parentIconColor: '',

  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
  onPress: () => {},
} as GridItemProps
export const GridItem: FunctionComponent<
  Partial<GridItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  //const { locale } = useConfig()
  const {
    children,
    columnNum,
    index,
    gutter,
    square,
    text,
    icon,
    iconColor,
    iconSize,
    parentIconSize,
    parentIconColor,
    border,
    center,
    reverse,
    direction,
    iconClassPrefix,
    iconFontClassName,
    onPress,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [viewHeight, setViewHeight] = useState(0)
  const { theme } = useConfig();
  const mStyles = gridItemStyles(theme);

  const pxCheck = (value: string | number): number => {
    let getValue: any = value
    if (Number.isNaN(Number(value)) || typeof value === 'string') {
      getValue = parseInt(String(value))
    }
    if (!getValue || getValue == '') {
      getValue = 20
    }

    return getValue
  }

  const rootStyle = () => {
    const style: CSSProperties = {
      flexBasis: `${100 / +columnNum}%`,
    }
     if (gutter) {
      style.paddingRight = pxCheck(gutter)
      if (index >= columnNum) {
        style.marginTop = pxCheck(gutter)
      }
    }
    if(border){
      if((index % parseInt(columnNum) ) !== parseInt(columnNum)-1){
        style.borderRightWidth = gutter;
        style.borderBottomWidth = gutter;
        style.borderColor = '#f2f2f2'
      }else{
        style.borderLeftWidth = 0;
        style.borderTopWidth = 0;
        style.borderBottomWidth = gutter;
        style.borderColor = '#f2f2f2'
      }
    }
    if(viewHeight!= 0){
      style.height = viewHeight;
    }

    return style
  }
  const isIconName = () => {
    return typeof icon === 'string'
  }
  const isText = () => {
    return typeof text === 'string'
  }

  if(reverse){
    return (
      <TouchableOpacity style={[rootStyle(),mStyles.nut_grid_item_container,{flexDirection:direction==='horizontal'?'row':'column'}]}
      onLayout={(event)=>{
        if(viewHeight!== event?.nativeEvent?.layout?.width && square){
          setViewHeight(event?.nativeEvent?.layout?.width)
        }
    }}
    onPress={onPress}>
           {children && <>{children}</>}
          {text && text != '' && isText()? (
            <Text style={direction==='horizontal' ? mStyles.nut_grid_item_right_text : mStyles.nut_grid_item_bottom_text}>
            {text}
            </Text>
          ) : text===''? null :<View>
          {text}
          </View>}

          {icon && isIconName() ? (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={icon as string}
              size={iconSize || parentIconSize}
              color={
                iconColor || parentIconColor
                  ? iconColor || parentIconColor
                  : undefined
              }
            />
          ) : icon && icon != '' ? (
            <View >{icon}</View>
          ) : null}
       
      </TouchableOpacity>
    )
  }else{
    return (
      <TouchableOpacity style={[rootStyle(),mStyles.nut_grid_item_container,{flexDirection:direction==='horizontal'?'row':'column'}]}
      onLayout={(event)=>{
        if(viewHeight!== event?.nativeEvent?.layout?.width && square){
          setViewHeight(event?.nativeEvent?.layout?.width)
        }
    }}
      onPress={onPress}>
          {icon && isIconName() ? (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={icon as string}
              size={iconSize || parentIconSize}
              color={
                iconColor || parentIconColor
                  ? iconColor || parentIconColor
                  : undefined
              }
            />
          ) : icon && icon != '' ? (
            <View >{icon}</View>
          ) : null}
          {text && text != '' && isText()? (
            <Text style={direction==='horizontal' ? 
            mStyles.nut_grid_item_left_text : mStyles.nut_grid_item_top_text}>
            {text}
            </Text>
          ) : text===''? null :<View>
          {text}
          </View>}
          {children && <>{children}</>}
      </TouchableOpacity>
    )
  }
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
