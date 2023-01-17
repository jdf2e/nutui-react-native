import React, {
  useState,
  useEffect,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from '../icon/index'

import { IComponent, ComponentDefaults } from '../utils/typings'
import pt from '../utils/pt'
import { useConfig } from '../configprovider';
import inputNumberStyles from './styles';

export interface InputNumberProps extends IComponent {
  disabled: boolean
  buttonSize: string | number
  min: string | number
  max: string | number
  inputWidth: string | number
  readonly: boolean
  modelValue: string | number
  step: string | number
  decimalPlaces: string | number
  isAsync: boolean
  className: string
  style: React.CSSProperties
  add: (e: MouseEvent) => void
  reduce: (e: MouseEvent) => void
  overlimit: (e: MouseEvent) => void
  blur: (e: ChangeEvent<HTMLInputElement>) => void
  focus: (e: FocusEvent<HTMLInputElement>) => void
  change: (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
  onAdd: (e: MouseEvent) => void
  onReduce: (e: MouseEvent) => void
  onOverlimit: (e: MouseEvent) => void
  onBlurFuc: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: FocusEvent<HTMLInputElement>) => void
  onChangeFuc: (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  buttonSize: '',
  min: 1,
  max: 9999,
  inputWidth: '',
  readonly: false,
  modelValue: 0,
  step: 1,
  decimalPlaces: 0,
  isAsync: false,
} as InputNumberProps
function pxCheck(value: string | number): number {
  return value ? pt(parseInt(`${value}`)) : 0
}
export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    disabled,
    buttonSize,
    min,
    max,
    inputWidth,
    readonly,
    modelValue,
    decimalPlaces,
    step,
    isAsync,
    className,
    style,
    add,
    reduce,
    change,
    overlimit,
    blur,
    focus,
    onAdd,
    onReduce,
    onOverlimit,
    onBlurFuc,
    onFocus,
    onChangeFuc,
    iconClassPrefix,
    iconFontClassName,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const { theme } = useConfig();
  const mStyles = inputNumberStyles(theme);

  const [inputValue, setInputValue] = useState(modelValue)
  useEffect(() => {
    const outputValue: number | string = fixedDecimalPlaces(modelValue)
    setInputValue(outputValue);
  }, [modelValue])

  const styles = {
    ...style,
  }
  const addAllow = (value = Number(inputValue)) => {
    return value < Number(max) && !disabled
  }

  const reduceAllow = (value = Number(inputValue)) => {
    return value > Number(min) && !disabled
  }

  const fixedDecimalPlaces = (v: string | number): string => {
    return Number(v).toFixed(Number(decimalPlaces))
  }

  const emitChange = (
    value: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    const outputValue: number | string = fixedDecimalPlaces(value)
    onChangeFuc && onChangeFuc(outputValue, e)
    change && change(outputValue, e)
    if (!isAsync) {
      if (Number(outputValue) < Number(min)) {
        setInputValue(Number(min))
      } else if (Number(outputValue) > Number(max)) {
        setInputValue(Number(max))
      } else {
        setInputValue(outputValue)
      }
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    onReduce && onReduce(e)
    reduce && reduce(e)
    if (reduceAllow()) {
      const outputValue = Number(inputValue) - Number(step)
      emitChange(outputValue, e)
    } else {
      onOverlimit && onOverlimit(e)
      overlimit && overlimit(e)
    }
  }

  const addNumber = (e: MouseEvent) => {
    onAdd && onAdd(e)
    add && add(e)
    if (addAllow()) {
      const outputValue = Number(inputValue) + Number(step)
      emitChange(outputValue, e)
    } else {
      onOverlimit && onOverlimit(e)
      overlimit && overlimit(e)
    }
  }

  const changeValue = (e: any) => {
    const value = Number(e?.nativeEvent.text)
    change && change(value, e)
    onChangeFuc && onChangeFuc(value, e)
    if (!isAsync) {
      if (Number.isNaN(value)) {
        setInputValue(inputValue)
      } else {
        setInputValue(value)
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    onFocus && onFocus(e)
    focus && focus(e)
  }

  const burValue = (e: any) => {
    if (disabled) return
    if (readonly) return
    let value = Number(e?.nativeEvent.text)
    if (value < Number(min)) {
      value = Number(min)
    } else if (value > Number(max)) {
      value = Number(max)
    }
    emitChange(value, e)
    onBlurFuc && onBlurFuc(e)
    blur && blur(e)
  }

  return (
    <View 
    style={[styles,{
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:pt(10)
    }]}
     {...restProps}
    >
      <TouchableOpacity
       onPress={reduceNumber}>
      <Icon
        style={mStyles.nut_icon_marginH}
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        size={buttonSize}
        color={reduceAllow()?"#2c2c2c":"#bfbfbf"}
        name= {'minus'} 
       
      />
      </TouchableOpacity>
      <View  
        style={pxCheck(inputWidth) == 0? mStyles.nut_inputnumber_zerowidth :
          { width: pxCheck(inputWidth),...mStyles.nut_inputnumber_fixwidth}
      }
      >
      <TextInput
        type="number"
        min={min}
        max={max}
        style={{color: disabled? '#d5d5d5':'#000000',padding:0}}
        textAlign='center'  
        editable={!(readonly || disabled)}
        value={`${inputValue}`}
        onChange={changeValue}
        onBlur={burValue}
        onFocus={focusValue}
      />
      </View>
      <TouchableOpacity onPress={addNumber}>
      <Icon
        style={mStyles.nut_icon_marginH}
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        size={buttonSize}
        color={addAllow() ? "#2c2c2c":"#bfbfbf"}
        name={'plus'} 
        onPress={addNumber}
      />
      </TouchableOpacity>
    </View>
  )
}

// const mStyles = StyleSheet.create({
//   // zeroWidth: {
//   //   height:pt(50),
//   //   backgroundColor:"#f4f4f4",
//   //   justifyContent:'center',
//   //   paddingHorizontal:pt(40),
//   //   borderRadius:pt(5)
//   // },
//   // fixWidth:{
//   //   height:pt(50),
//   //   backgroundColor:"#f4f4f4",
//   //   justifyContent:'center',
//   //   alignItems:'center',
//   //   paddingHorizontal:pt(40),
//   //   borderRadius:pt(5)
//   // }
// });

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
