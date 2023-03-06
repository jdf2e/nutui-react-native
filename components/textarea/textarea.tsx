import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
  useRef,
} from 'react'
import {  View } from 'react-native';
import { useConfig } from '../configprovider';
import Input from '../input'
import textareaStyles from './styles'

export interface TextAreaProps {
  defaultValue: string | number | any
  textAlign?: string | any
  limitshow?: boolean
  maxlength?: any
  rows?: any
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  autosize?: boolean
  style?: CSSProperties
  onChange?: (value: any, event: Event) => void
  onBlur?: (event: Event) => void
  onFocus?: (event: Event) => void
}
const defaultProps = {
  defaultValue: '',
  textAlign: 'left',
  limitshow: false,
  maxlength: '',
  rows: '2',
  placeholder: '',
  readonly: false,
  disabled: false,
  autosize: false,
} as TextAreaProps
export const TextArea: FunctionComponent<
  Partial<TextAreaProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onBlur' | 'onFocus'
    >
> = (props) => {
  const { locale, theme } = useConfig()
  const styles = textareaStyles(theme);
  const {
    defaultValue,
    textAlign,
    limitshow,
    maxlength,
    rows,
    placeholder,
    readonly,
    disabled,
    autosize,
    style,
    onChange,
    onBlur,
    onFocus,
  } = { ...defaultProps, ...props }

//   const textareaBem = bem('textarea')
  const [inputValue, SetInputValue] = useState('')
  const textareaRef = useRef<any>(null)

  useEffect(() => {
    let initValue = defaultValue
    if (initValue && maxlength && [...initValue].length > Number(maxlength)) {
      initValue = initValue.substring(0, Number(maxlength))
    }
    SetInputValue(initValue)

    if (autosize) {
      setTimeout(() => {
        setContentHeight()
      })
    }
  }, [defaultValue, autosize])

  useEffect(() => {
    if (inputValue) {
      if (autosize) {
        setContentHeight()
      }
    }
  }, [inputValue])

  const setContentHeight = () => {
    const textarea: any = textareaRef.current
    if (textarea) {
      textarea.setNativeProps({ style: { height: 'auto' } })
    }
  }

  const textChange = (value, event) => {
    console.log(value)
    if (maxlength && [...value].length > Number(maxlength)) {
      value = value.substring(0, Number(maxlength))
    }
    SetInputValue(value)
    onChange && onChange(value, event)
  }

  const textFocus = (event: Event) => {
    if (disabled) return
    if (readonly) return
    onFocus && onFocus(event)
  }

  const textBlur = (value, event: Event) => {
    if (disabled) return
    if (readonly) return
    onChange && onChange(value, event)
    onBlur && onBlur(event)
  }

  return (
    <View
        style={[
            styles.nutTextarea,
            disabled && styles.nutTextarea__disabled
        ]}
    >
      <Input
        type={'textarea'}
        ref={textareaRef}
        style={{
            ...styles.nutTextarea__textarea,
          ...style,
        }}
        inputAlign={textAlign}
        showWordLimit={limitshow}
        disabled={disabled}
        readonly={readonly}
        defaultValue={inputValue}
        onChange={(value, e: any) => {
          textChange(value, e)
        }}
        onBlur={(value, e: any) => {
          textBlur(value, e)
        }}
        onFocus={(e: any) => {
          textFocus(e)
        }}
        rows={rows}
        maxlength={maxlength < 0 ? 0 : maxlength}
        placeholder={placeholder || locale.placeholder}
      />
    </View>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
