import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
} from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native';
import  deviceWidth  from '../utils/deviceWidth'
type EventType = 'row' | 'col'
export interface ColProps {
  span: string | number
  offset: string | number
  gutter: string | number
  rowClassName: string
  onClick: (e: any, type: EventType) => void
}
const defaultProps = {
  span: '24',
  offset: '0',
  gutter: '0',
  rowClassName: '',
} as ColProps

export const Col: FunctionComponent<
  Partial<ColProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { span, offset, children, rowClassName,gutter, onClick } = {
    ...defaultProps,
    ...props,
  }
  const [colName, setColName] = useState('')
  const [colStyle, setColStyle] = useState({})

  const classs = () => {
    // 定义col的class类
    const prefixCls = 'nut-col'
    return `${prefixCls} ${prefixCls}-${span} ${
      gutter ? `${prefixCls}-gutter` : ''
    } ${prefixCls}-${offset}`
  }
  const getStyle = () => {
    // 定义col的style类

    const style: CSSProperties = {}
    style.paddingLeft = (gutter as number) / 2
    style.paddingRight = (gutter as number) / 2
    style.width = (deviceWidth - (24/parseInt(span) -1)
    * parseInt(gutter))  * (parseInt(span)/24 );
    if(offset){
      style.marginTop = parseInt(offset);
    }
    return style
  }
  useEffect(() => {
    setColName(classs)
    setColStyle(getStyle)
  }, [span, offset, gutter])

  return (
    <TouchableOpacity
      style={{ ...colStyle }}
      onPress={(e) => {
        onClick && onClick(e, 'col')
      }}
      onLayout={(e) => {
       // console.log(e.nativeEvent.layout)
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

Col.defaultProps = defaultProps
Col.displayName = 'NutCol'
