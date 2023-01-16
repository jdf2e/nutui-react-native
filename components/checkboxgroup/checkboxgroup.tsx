import React, {
  useEffect,
  useImperativeHandle,
  useState
} from 'react';

import {
  View,
  StyleProp,
  ViewStyle
} from 'react-native';

import toObj from '../utils/style-to-obj';
import checkboxGroupStyle from './styles';

export interface CheckboxGroupProps {
  disabled: boolean; // 是否禁用选择,将用于其下的全部复选框 默认 FALSE
  checkedValue: string[]; // 当前选中项的标识符，和 label 相对应
  max: number | undefined; // 限制选择的数量，不能和全选/取消/反选一起使用, 0表示没有限制 默认 0
  onChange: (value: string[]) => void;
  style: StyleProp<ViewStyle> | undefined;
}

const defaultProps = {
  disabled: false,
  checkedValue: [],
  max: undefined,
  onChange: (value: string[]) => {},
  style: {}
} as CheckboxGroupProps;

export const CheckboxGroup = React.forwardRef(
  (
    props: Partial<CheckboxGroupProps>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props };

    const {
      disabled,
      onChange,
      checkedValue,
      max,
      style
    } = props;

    const styles = checkboxGroupStyle();
    const [innerDisabled, setInnerDisabled] = useState(disabled);
    const [innerValue, setInnerValue] = useState(checkedValue);

    useImperativeHandle<any, any>(ref, () => ({
      toggleAll(state: boolean) {
        if (state === false) {
          setInnerValue([]);
        } else {
          const childrenLabel: string[] = [];

          React.Children.map(children, (child) => {
            const childProps = (child as any).props;

            childrenLabel.push(childProps.label || (child as any).children);
          });

          setInnerValue(childrenLabel);
        }
      },
      toggleReverse() {
        const childrenLabel: string[] = [];

        React.Children.map(children, (child) => {
          const childProps = (child as any).props;

          childrenLabel.push(childProps.label || (child as any).children);
        });
        const reverse: string[] = childrenLabel.filter(
          (c) => innerValue?.findIndex((v) => v === c) === -1
        );

        setInnerValue(reverse);
      }
    }));

    useEffect(() => {
      setInnerDisabled(disabled);
      setInnerValue(checkedValue);
    }, [disabled, checkedValue]);

    function handleChildChange(state: boolean, label: string) {
      if (max !== undefined && innerValue && innerValue.length > max) return;
      if (innerValue) {
        let clippedValue = [];

        if (state) {
          clippedValue = [...innerValue, label];
        } else {
          innerValue?.splice(innerValue?.indexOf(label), 1);
          clippedValue = [...innerValue];
        }
        setInnerValue(clippedValue);
        onChange && onChange(clippedValue);
      }
    }

    function validateChildChecked(child: any) {
      if (!innerValue) return false;

      return innerValue?.indexOf(child.props.label || child.children) > -1;
    }

    function getParentVals() {
      return innerValue;
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any) => {
        const childChecked = validateChildChecked(child);

        if ((child as any).type.displayName !== 'NutCheckBox') {
          return React.cloneElement(child);
        }

        return React.cloneElement(child, {
          disabled: innerDisabled,
          checked: childChecked,
          onChange: handleChildChange,
          getParentVals,
          max
        });
      });
    }

    const wrapStyle = [
      styles.container,
      toObj(style || {})
    ];

    return (
      <View
        style={wrapStyle}
      >
        {cloneChildren()}
      </View>
    );
  }
);

CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.displayName = 'NutCheckboxGroup';
