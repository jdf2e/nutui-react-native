import React, { useEffect, useState } from 'react';
import RadioContext from '../radio/context';
import {
  View
} from 'react-native';

import radioGroupStyles from './styles';

type Position = 'left' | 'right';
type Direction = 'horizontal' | 'vertical';

export interface RadioGroupProps {
  value: string | number | boolean | null;
  textPosition: Position;
  direction: Direction;
  onChange: (value: string | number | boolean) => void;
}

const defaultProps = {
  value: null, // 当前选中项的标识符，与label值一致时呈选中状态
  textPosition: 'right', // 文本所在的位置，可选值：left,right 默认 right
  onChange: (value: string | number | boolean) => {},
  direction: 'vertical' // direction
} as RadioGroupProps;

export const RadioGroup = React.forwardRef(
  (
    props: Partial<RadioGroupProps>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props };

    const styles = radioGroupStyles();

    const { value, onChange, textPosition, direction, ...rest } =
      props;

    const [val2State, setVal2State] = useState(value);

    useEffect(() => {
      setVal2State(value);
    }, [value]);

    function validateChildChecked(child: any) {
      if (val2State === null) return false;

      return val2State === child.props.value;
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any, index) => {
        const childChecked = validateChildChecked(child);

        if ((child as any).type.displayName !== 'NutRadio') {
          return React.cloneElement(child);
        }

        return React.cloneElement(child, {
          textPosition,
          checked: childChecked
        });
      });
    }

    const wrapStyle = [
      styles[`direction${direction}`]
    ];

    return (
      <RadioContext.Provider
        value={{
          onChange: (val) => {
            setVal2State(val);
            onChange && onChange(val);
          }
        }}
      >
        <View
          style={wrapStyle}
          {...rest}
        >
          {cloneChildren()}
        </View>
      </RadioContext.Provider>
    );
  }
);

RadioGroup.defaultProps = defaultProps;
RadioGroup.displayName = 'NutRadioGroup';
