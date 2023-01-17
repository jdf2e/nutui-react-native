import React, { FunctionComponent } from 'react'
import { TouchableOpacity,View,Text } from 'react-native'
import Popup from '../popup'
import { useConfig } from '../configprovider';
import actionSheetStyles from './styles';

export type ItemType<T> = { [key: string]: T }

export interface ActionSheetProps {
  cancelTxt: string
  optionTag: string
  optionSubTag: string
  chooseTagValue: string
  title: string
  color: string
  description: string
  menuItems: ItemType<string | boolean>[]
  onCancel: () => void
  onChoose: (item: any, index: number) => void
  visible: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  cancelTxt: '',
  optionTag: 'name',
  optionSubTag: 'subname',
  chooseTagValue: '',
  title: '',
  color: '#ee0a24',
  description: '',
  menuItems: [],
  onCancel: () => {},
  onChoose: () => {},
  visible: false,
  className: '',
  style: {},
} as ActionSheetProps
export const ActionSheet: FunctionComponent<
  Partial<ActionSheetProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    cancelTxt,
    optionTag,
    optionSubTag,
    chooseTagValue,
    title,
    color,
    description,
    menuItems,
    onCancel,
    onChoose,
    visible,
    className,
    style,
    ...rest
  } = { ...defaultProps, ...props }

  const { theme } = useConfig();
  const mStyles = actionSheetStyles(theme);

  const isHighlight = (item: ItemType<string | boolean>) => {
    return props.chooseTagValue &&
      props.chooseTagValue === item[props.optionTag || 'name']
      ? props.color
      : '#1a1a1a'
  }

  const cancelActionSheet = () => {
    onCancel && onCancel()
  }

  const chooseItem = (item: ItemType<string | boolean>, index: number) => {
    if (!item.disable) {
      onChoose && onChoose(item, index)
    }
  }

  return (
  
    <Popup
      round
      closeOnClickOverlay
      visible={visible}
      position="bottom"
      onClose={() => {
        onCancel && onCancel()
      }}
    >
      <View 
      style={style} {...rest}>
        {title ? <View style={mStyles.nut_actionsheet_items_top}><Text>{title}</Text></View>:null}
        {description ? 
          <View  style={(title) ?mStyles.nut_actionsheet_items :mStyles.nut_actionsheet_items_top} >
            <Text style={mStyles.nut_actionsheet_desc}>{description}</Text></View> : null
        }
        {menuItems.length ? (
          <View >
            {menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                activeOpacity={1}
               style={(index!=0 || description || title) ?mStyles.nut_actionsheet_items :mStyles.nut_actionsheet_items_top}
                  key={index}
                  onPress={() => chooseItem(item, index)}
                >
                  {item[optionTag] ?   <View 
                  ><Text style={{color: item.disable ? 'grey':isHighlight(item) }}>{item[optionTag]}</Text></View> : null}
                {item[optionSubTag] ?  <View 
                  ><Text style={[mStyles.nut_actionsheet_sub_text,{color: item.disable ? 'grey':'#1a1a1a'}]}>
                    {item[optionSubTag]}</Text></View> : null}
                </TouchableOpacity>
              )
            })}
          </View>
        ) : (
          children
        )}
        {cancelTxt && cancelTxt!='' ? 
          <TouchableOpacity 
          style={mStyles.nut_actionsheet_items_cancle}
          activeOpacity={1}
          onPress={() => cancelActionSheet()}>
            <Text>
            {cancelTxt}
            </Text>
          </TouchableOpacity>  : null
        }
      </View>
    </Popup>
  )
}

ActionSheet.defaultProps = defaultProps
ActionSheet.displayName = 'NutActionSheet'
