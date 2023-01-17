import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from '../icon'
import { IComponent, ComponentDefaults } from '../utils/typings'
import { useConfig } from '../configprovider';
import searchbarStyles from './styles';

type TIconDirection = 'in-left' | 'out-left' | 'in-right' | 'out-right'

export interface SearchBarProps extends IComponent {
  /** 文本值	 */
  value?: number | string
  /** 输入框占位提示文字	 */
  placeholder?: string
  /** 搜索框形状，可选值为 round	 */
  shape?: 'square' | 'round'
  /** 自定义class名	 */
  className?: string
  /** 是否禁用输入框	 */
  disabled?: boolean
  /** 最大输入长度	 */
  maxLength?: number
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean
  /** 搜索框外部背景色	 */
  background?: string
  /** 搜索框背景色	 */
  inputBackground?: string
  /** 输入框内容对齐方式	 */
  align?: string
  /** 是否将输入框设为只读状态，只读状态下无法输入内容   */
  readOnly?: boolean
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autoFocus?: boolean
  /** 搜索框左侧文本	 */
  label?: React.ReactNode
  /** 输入框内 左icon   */
  leftinIcon?: React.ReactNode
  /** 输入框内 右icon  */
  rightinIcon?: React.ReactNode
  /** 输入框外 左icon  */
  leftoutIcon?: React.ReactNode
  /** 输入框外 右icon  */
  rightoutIcon?: React.ReactNode
  /** 取消按钮文字	 */
  actionText?: React.ReactNode
  /**  确定搜索时触发	 */
  onSearch?: (val: string) => void
  /** 输入框内容变化时触发	 */
  onChange?: (value: string, event: Event) => void
  /** 输入框获得焦点时触发	 */
  onFocus?: (value: string, event: Event) => void
  /** 输入框失去焦点时触发	 */
  onBlur?: (value: string, event: Event) => void
  /** 点击清除按钮后触发	 */
  onClear?: (event: Event) => void
  /** 点击取消按钮后触发	 */
  onCancel?: () => void
  /** 点击输入区域时触发	 */
  onClickInput?: (event: Event) => void
  /** 点击输入框内左侧图标时触发	 */
  onClickLeftinIcon?: (value: string, event: Event) => void
  /** 点击输入框外左侧图标时触发	 */
  onClickLeftoutIcon?: (value: string, event: Event) => void
  /** 点击输入框内右侧图标时触发	 */
  onClickRightinIcon?: (value: string, event: Event) => void
  /** 点击输入框外右侧图标时触发	 */
  onClickRightoutIcon?: (value: string, event: Event) => void
}

const defaultProps = {
  ...ComponentDefaults,
  placeholder: '',
  shape: 'square',
  disabled: false,
  maxLength: 9999,
  clearable: true,
  align: 'left',
  readonly: true,
  autoFocus: false,
  label: '',
  leftinIcon: <Icon name="search" size="12" />,
} as SearchBarProps
export const SearchBar: FunctionComponent<
  Partial<SearchBarProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onFocus' | 'onBlur'
    >
> = (props) => {
  const { theme } = useConfig();
  const mStyles = searchbarStyles(theme);

  const searchRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(() => props.value)

  const {
    placeholder,
    shape,
    className,
    disabled,
    maxLength,
    clearable,
    align,
    readOnly,
    autoFocus,
    label,
    actionText,
    leftinIcon,
    rightinIcon,
    leftoutIcon,
    rightoutIcon,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onCancel,
    onSearch,
    onClickInput,
    onClickLeftinIcon,
    onClickLeftoutIcon,
    onClickRightinIcon,
    onClickRightoutIcon,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }

  const alignClass = `${align}`

  const change = (event: Event) => {
    const { text } = event?.nativeEvent as any
    console.log('event值',text)
    onChange && onChange?.(text, event)
    setValue(text)
  }
  const focus = (event: Event) => {
    const { text } = event?.nativeEvent as any
  
    onFocus && onFocus?.(text, event)
  }
  const blur = (event: Event) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    const { text } = event?.nativeEvent as any
    onBlur && onBlur?.(text, event)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  useEffect(() => {
    if (autoFocus) {
      const searchSelf: HTMLInputElement | null = searchRef.current
      searchSelf && searchSelf.focus()
    }
  }, [autoFocus])

  const renderField = () => {
    return (
      <TextInput
        ref={searchRef}
        style={{  ...props.style,paddingRight:10,padding:0}}
        value={value || ''}
        placeholder={placeholder || '请输入内容'}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onKeyPress={onKeypress}
        onChange={(e: any) => change(e)}
        onFocus={(e: any) => focus(e)}
        onBlur={(e: any) => blur(e)}
      />
    )
  }


  const renderLeftinIcon = () => {
    if (!leftinIcon) return null
    return (
      <TouchableOpacity
        style={mStyles.nut_search_left_in_marginH}
        onPress={(e: any) => clickLeftIcon('in-left', e)}
      >
        {leftinIcon}
      </TouchableOpacity>
    )
  }
  const renderLeftoutIcon = () => {
    if (!leftoutIcon) return null
    return (
      <TouchableOpacity
        style={mStyles.nut_search_left_icon_marginright}
        onPress={(e: any) => clickLeftIcon('out-left', e)}
      >
        {leftoutIcon}
      </TouchableOpacity>
    )
  }
  const clickLeftIcon = (flag: TIconDirection, event: Event) => {
    if (flag === 'in-left') {
      onClickLeftinIcon && onClickLeftinIcon(value as string, event)
    } else {
      onClickLeftoutIcon && onClickLeftoutIcon(value as string, event)
    }
  }

  const renderRightinIcon = () => {
    if (!rightinIcon) return null
    return (
      <View
        onClick={(e: any) => clickRightIcon('in-right', e)}
        style={mStyles.nut_search_icon_marginH}
      >
        {rightinIcon}
      </View>
    )
  }
  const renderRightoutIcon = () => {
    if (!rightoutIcon) return null
    return (
      <TouchableOpacity
        onPress={(e: any) => clickRightIcon('out-right', e)}
        style={mStyles.nut_search_out_marginleft}
      >
        {rightoutIcon}
      </TouchableOpacity>
    )
  }
  const clickRightIcon = (flag: TIconDirection, event: Event) => {
    if (flag === 'in-left') {
      onClickRightinIcon && onClickRightinIcon(value as string, event)
    } else {
      onClickRightoutIcon && onClickRightoutIcon(value as string, event)
    }
  }

  const handleClear = () => {
    return (
      <TouchableOpacity
        onPress={(e: any) => clearaVal(e)}
        style={mStyles.nut_search_clear_marginright}
      >
        <Icon
          classPrefix={iconClassPrefix}
          fontClassName={iconFontClassName}
          name="circle-close"
          size="12"
          color="#555"
        />
      </TouchableOpacity>
    )
  }

  const clearaVal = (event: Event) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    onClear && onClear(event)
  }

  const renderRightLabel = () => {
    if (actionText) {
      return (
        <TouchableOpacity 
        style={mStyles.nut_label_marginleft}
        onPress={cancel}>
          <Text>
          {actionText}
          </Text>
        </TouchableOpacity>
      )
    }
    return null
  }

  const onKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const event = e.nativeEvent
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault()
      }
      onSearch && onSearch(value as string)
    }
  }

  const cancel = () => {
    onCancel && onCancel()
  }
  const renderLabel = () => {
    if (label) {
      return <View 
        style={mStyles.nut_label_margin}
      ><Text>{label}</Text></View>
    }
    return null
  }

  return (
    <View
       style={[{ 
        ...mStyles.nut_searchbar_container,
        ...props.style},
        {
          backgroundColor:props.background ? props.background :'#fff'
        }]}
    >
      {renderLeftoutIcon()}
      {renderLabel()}
      <View 
       style={[ 
          {
            ...mStyles.nut_searchbar_inner,
            borderRadius: shape==='round' ? 20 : 0
          },{
            backgroundColor: props.inputBackground ? props.inputBackground :'#f7f7f7'
          }
        ]}
      >
        {renderLeftinIcon()}
        <View 
          style={{flex:1}}
        >{renderField()}</View>
        {renderRightinIcon()}
        {(clearable && value) ? handleClear(): null}
      </View>
      {renderRightoutIcon()}
      {renderRightLabel()}

    </View>
  )
}

SearchBar.defaultProps = defaultProps
SearchBar.displayName = 'NutSearchBar'
