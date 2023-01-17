import React, { FunctionComponent, useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from '../icon/index'
import { IComponent, ComponentDefaults } from '../utils/typings'
import pt from '../utils/pt'
import { useConfig } from '../configprovider';
import rateStyles from './styles';

export interface RateProps extends IComponent {
  count: string | number
  modelValue: string | number
  minimizeValue: string | number
  iconSize: string | number
  activeColor: string
  voidColor: string
  checkedIcon: string
  uncheckedIcon: string,
  halfcheckedIcon: string
  disabled: boolean
  readonly: boolean
  allowHalf: boolean
  spacing: string | number
  onChange: (val: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  count: 5,
  modelValue: 0,
  minimizeValue: 0,
  iconSize: 18,
  activeColor: '',
  voidColor: '',
  checkedIcon: 'https://img14.360buyimg.com/imagetools/jfs/t1/178306/5/32174/1560/63aa5874F7f248435/de34c5cb1004c28a.png',
  uncheckedIcon: 'https://img12.360buyimg.com/imagetools/jfs/t1/107746/12/36994/2452/63aa921fF7c7bef7e/115a8ce629f9b9bc.png',
  halfcheckedIcon:'https://img14.360buyimg.com/imagetools/jfs/t1/44371/39/20611/1799/63aa5874Fd9f96bc4/30253e864c3feb69.png',
  disabled: false,
  readonly: false,
  allowHalf: false,
  spacing: 14,
} as RateProps
export const Rate: FunctionComponent<Partial<RateProps>> = (props) => {
  const {
    count,
    modelValue,
    minimizeValue,
    iconSize,
    activeColor,
    voidColor,
    checkedIcon,
    uncheckedIcon,
    halfcheckedIcon,
    disabled,
    readonly,
    allowHalf,
    spacing,
    onChange,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }
  const { theme } = useConfig();
  const mStyles = rateStyles(theme);
  const [countArray, setCountArray] = useState([1, 2, 3, 4, 5])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const tmp = []
    for (let i = 1; i <= Number(count); i++) {
      tmp.push(i)
    }
    setCountArray(tmp)
  }, [count])

  useEffect(() => {
    setScore(Math.max(Number(modelValue), Number(minimizeValue)))
  }, [modelValue])

  const pxCheck = (value: string | number): number => {
    return value ? pt(parseInt(`${value}`)) : 0;
  }

  const onClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled || readonly) return
    let value = 0
    if (!(index === 1 && score === index)) {
      value = index
    }
    value = Math.max(value, Number(minimizeValue))
    setScore(value)

    onChange && onChange(value)
  }
  const onHalfClick = (event: any, n: number) => {
    event.preventDefault()
    event.stopPropagation()
    if (disabled || readonly) return
    const value = Math.max(Number(minimizeValue), n - 0.5)
    setScore(value)
    onChange && onChange(value)
  }
 
  return (
    <View 
      style={mStyles.nut_rate_container}
    >
      {countArray.map((n) => {
        return (
          <TouchableOpacity
            key={n}
            disabled={disabled || readonly}
            onPress={(event) => {
              if(allowHalf){
                if(event.nativeEvent.locationX>= pxCheck(iconSize)/2){
                  onClick(event, n)
                }else{
                  onHalfClick(event, n)
                }
              }else{
                onClick(event, n)
              }
            }}
            style={{ marginRight: pxCheck(spacing),flexDirection:'row'}}
          >
            
            {allowHalf && score > n - 1 && score - 0.5 == n - 1 ? (            
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                onClick={(event) => onHalfClick(event, n)}
                color={n <= score ? activeColor : voidColor}
                size={iconSize}
                name={halfcheckedIcon}
              />
            ):
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              size={iconSize}
              name={n <= score ? checkedIcon : uncheckedIcon}
              color={n <= score ? activeColor : voidColor}
            />
          }
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

Rate.defaultProps = defaultProps
Rate.displayName = 'NutRate'
