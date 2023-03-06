import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  MouseEvent,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

import { formatNumber, BasicComponent, ComponentDefaults } from '../utils';
import Icon from '../icon';
import { useConfig } from '../configprovider';

import inputStyles from './styles';

export type InputAlignType = 'left' | 'center' | 'right'; // text-align
export type InputFormatTrigger = 'onChange' | 'onBlur'; // onChange: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化
export type InputType =
  | 'text'
  | 'password'
  | 'digit'
  | 'tel'
  | 'number'
  | 'textarea';

export type InputRule = {
  pattern?: RegExp;
  message?: string;
  required?: boolean;
};

export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';

export interface InputProps extends BasicComponent {
  type: InputType;
  name: string;
  defaultValue: any;
  placeholder: string;
  label: string;
  labelStyle: object;
  labelWidth: string | number;
  labelAlign: InputAlignType;
  colon: boolean;
  inputAlign: InputAlignType;
  center: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
  maxlength: any;
  leftIcon: string;
  leftIconSize: string | number;
  rightIcon: string;
  rightIconSize: string | number;
  clearable: boolean;
  clearIcon: string;
  clearSize: string | number;
  border: boolean;
  formatTrigger: InputFormatTrigger;
  rules: Array<InputRule>;
  errorMessage: string;
  errorMessageAlign: InputAlignType;
  rows: string | number;
  showWordLimit: boolean;
  autofocus: boolean;
  style?: CSSProperties;
  className?: string;
  slotButton?: React.ReactNode;
  slotInput?: React.ReactNode;
  formatter: (value: string) => void;
  onChange?: (value: any, event: Event) => void;
  onBlur?: (value: any, event: Event) => void;
  onFocus?: (value: any, event: Event) => void;
  onClear?: (value: any, event: Event) => void;
  keypress?: (value: any, event: Event) => void;
  onClickInput?: (value: any) => void;
  onClickLeftIcon?: (value: any) => void;
  onClickRightIcon?: (value: any) => void;
  onClick?: (value: any) => void;
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'text',
  name: '',
  defaultValue: '',
  placeholder: '',
  label: '',
  labelStyle: {},
  labelWidth: 80,
  labelAlign: 'left',
  colon: false,
  inputAlign: 'left',
  center: false,
  required: false,
  disabled: false,
  readonly: false,
  error: false,
  maxlength: '9999',
  leftIcon: '',
  leftIconSize: '',
  rightIcon: '',
  rightIconSize: '',
  clearable: false,
  clearIcon: 'mask-close',
  clearSize: 14,
  border: true,
  formatTrigger: 'onChange',
  rules: [],
  rows: null,
  errorMessage: '',
  errorMessageAlign: '',
  showWordLimit: false,
  autofocus: false,
  slotButton: null,
  slotInput: null,
} as unknown as InputProps;

export const Input: FunctionComponent<
  Partial<InputProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onBlur' | 'onFocus' | 'onClick'
    >
> = forwardRef((props, ref) => {
  const { locale, theme } = useConfig();
  const styles = inputStyles(theme);
  const {
    children,
    type,
    name,
    defaultValue,
    placeholder,
    label,
    labelStyle,
    labelWidth,
    labelAlign,
    colon,
    inputAlign,
    center,
    required,
    disabled,
    readonly,
    error,
    maxlength,
    leftIcon,
    leftIconSize,
    rightIcon,
    rightIconSize,
    clearable,
    clearIcon,
    clearSize,
    border,
    formatTrigger,
    rules,
    errorMessage,
    errorMessageAlign,
    showWordLimit,
    autofocus,
    style,
    className,
    rows,
    slotButton,
    slotInput,
    onChange,
    onBlur,
    onFocus,
    onClear,
    formatter,
    keypress,
    onClickInput,
    onClickLeftIcon,
    onClickRightIcon,
    onClick,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  locale.placeholder = placeholder || locale.placeholder;

  const [inputValue, SetInputValue] = useState('');
  const [active, SetActive] = useState(false);
  const [classes, setClasses] = useState({});
  const getModelValue = () => String(inputValue ?? '');
  const inputRef = useRef<any>(null);
  const state = {
    focused: false,
    validateFailed: false, // 校验失败
    validateMessage: '', // 校验信息
  };
  useLayoutEffect(() => {
    if (defaultValue) {
      updateValue(getModelValue(), formatTrigger);
    }
  });
  useEffect(() => {
    setClasses(inputClass);
    SetInputValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (inputValue) {
      updateValue(getModelValue());
      resetValidation();
    }
  }, [inputValue]);

  useImperativeHandle(ref, () => {
    return inputRef.current;
  });
  const inputClass = useCallback(() => {
    return {
      ...(center ? styles.nutInputCenter : {}),
      ...(disabled ? styles.nutInputDisabled : {}),
      ...(required ? styles.nutInputRequired : {}),
      ...(error ? styles.nutInputError : {}),
      ...(border ? styles.nutInputBorder : {}),
      ...(slotButton || rightIcon ? styles.nutInputRightMark : {}),
    };
  }, [disabled, required, error, border, slotButton, rightIcon, center]);

  // 样式状态重置
  useEffect(() => {
    setClasses(inputClass);
  }, [disabled, required, error, border, slotButton, rightIcon, center]);

  const updateValue = (
    value: any,
    trigger: InputFormatTrigger = 'onChange',
    event?: any
  ) => {
    let val = value;

    if (type === 'digit' || type === 'tel') {
      val = formatNumber(val, false, false);
    }
    if (type === 'number') {
      val = formatNumber(val, true, true);
    }
    if (type === 'tel' && !formatter) {
      const regTel =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      const regNumber = /[^-0-9]/g;
      val =
        !regTel.test(val) && val.length > 11
          ? val.substring(0, 11)
          : val.replace(regNumber, '');
    }

    if (formatter && trigger === formatTrigger) {
      val = formatter(val);
    }

    if (inputRef?.current?.value !== val) {
      inputRef.current.value = val;
    }
    SetInputValue(val);
    onChange && onChange(val, event);
  };

  const handleFocus = (event) => {
    const val = event.nativeEvent?.text;
    SetActive(true);
    onFocus && onFocus(val, event);
  };

  const handleInput = (event) => {
    let val = event.nativeEvent?.text;

    if (maxlength && val.length > Number(maxlength)) {
      val = val.slice(0, Number(maxlength));
    }
    updateValue(val, 'onChange', event);
  };

  const handleBlur = (event) => {
    setTimeout(() => {
      SetActive(false);
    }, 200);
    let val = event.nativeEvent?.text;
    if (maxlength && val.length > Number(maxlength)) {
      val = val.slice(0, Number(maxlength));
    }
    updateValue(getModelValue(), 'onBlur');
    onBlur && onBlur(val, event);
  };

  const handleClickInput = (event: MouseEvent) => {
    onClickInput && onClickInput(event);
  };
  const handleClickLeftIcon = (event: MouseEvent) => {
    onClickLeftIcon && onClickLeftIcon(event);
  };

  const handleClickRightIcon = (event: MouseEvent) => {
    onClickRightIcon && onClickRightIcon(event);
  };

  const resetValidation = () => {
    if (state.validateFailed) {
      state.validateFailed = false;
      state.validateMessage = '';
    }
  };

  const inputType = (type: string) => {
    if (type === 'number') {
      return 'text';
    }
    if (type === 'digit') {
      return 'tel';
    }
    return type;
  };

  const handleClear = (event) => {
    updateValue('');
    onClear && onClear('', event);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.nutInput, classes]}
      onPress={(e: any) => {
        onClick && onClick(e);
      }}
    >
      {slotInput ? (
        <>
          {label ? (
            <View style={[styles.nutInputLabel, { width: labelWidth }]}>
              <Text
                style={[styles.nutInputLabelString, { textAlign: labelAlign }]}
              >
                {label}
                {colon ? ':' : ''}
              </Text>
            </View>
          ) : null}
          <View style={styles.nutInputValue}>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.nutInputInner,
                slotButton || rightIcon ? { flex: 1 } : {},
              ]}
              onPress={(e: any) => {
                handleClickInput(e);
              }}
            >
              {slotInput}
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {leftIcon && leftIcon.length > 0 ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.nutInputLeftIcon}
              onPress={(e: any) => {
                handleClickLeftIcon(e);
              }}
            >
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={leftIcon}
                size={leftIconSize}
              />
            </TouchableOpacity>
          ) : null}
          {label ? (
            <>
              {!!required && (
                <Text style={styles.nutInputLabel_required}>*</Text>
              )}
              <View style={[styles.nutInputLabel, labelStyle, { width: labelWidth }]}>
                <Text
                  style={[
                    styles.nutInputLabelString,
                    { textAlign: labelAlign },
                    error && styles.nutInputText_error,
                  ]}
                >
                  {label}
                  {colon ? ':' : ''}
                </Text>
              </View>
            </>
          ) : null}
          <View style={styles.nutInputValue}>
            <View
              style={[slotButton || rightIcon ? styles.nutInputMainCon : {}]}
            >
              <TouchableOpacity
                activeOpacity={1}
                style={styles.nutInputInner}
                onPress={(e: any) => {
                  handleClickInput(e);
                }}
              >
                {type === 'textarea' ? (
                  <TextInput
                    multiline
                    ref={inputRef}
                    style={[
                      styles.nutInputText,
                      { textAlign: inputAlign, height: Number(rows) * 24 },
                      disabled && styles.nutInputText_disabled,
                      error && styles.nutInputText_error,
                    ]}
                    maxLength={maxlength || undefined}
                    placeholder={placeholder || locale.placeholder}
                    placeholderTextColor={
                      error ? theme['$input-required-color'] : ''
                    }
                    editable={!readonly && !disabled}
                    value={inputValue}
                    autoFocus={autofocus}
                    onBlur={(e: any) => {
                      handleBlur(e);
                    }}
                    onFocus={(e: any) => {
                      handleFocus(e);
                    }}
                    onChange={(e: any) => {
                      handleInput(e);
                    }}
                  />
                ) : (
                  <TextInput
                    ref={inputRef}
                    style={[
                      styles.nutInputText,
                      { textAlign: inputAlign },
                      disabled && styles.nutInputText_disabled,
                      error && styles.nutInputText_error,
                    ]}
                    // type={inputType(type)}
                    maxLength={maxlength || undefined}
                    placeholder={placeholder || locale.placeholder}
                    placeholderTextColor={
                      error ? theme['$input-required-color'] : ''
                    }
                    editable={!readonly && !disabled}
                    value={
                      type === 'password'
                        ? inputValue.replace(/./g, '*')
                        : inputValue
                    }
                    autoFocus={autofocus}
                    onBlur={(e: any) => {
                      handleBlur(e);
                    }}
                    onFocus={(e: any) => {
                      handleFocus(e);
                    }}
                    onChange={(e: any) => {
                      handleInput(e);
                    }}
                  />
                )}
                {clearable && !readonly && active && inputValue.length > 0 ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles.nutInputClear}
                    onPress={(e: any) => {
                      handleClear(e);
                    }}
                  >
                    <Icon
                      classPrefix={iconClassPrefix}
                      fontClassName={iconFontClassName}
                      name={clearIcon}
                      size={clearSize}
                    />
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>

              {rightIcon && rightIcon.length > 0 ? (
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.nutInputRightIcon}
                  onPress={(e: any) => {
                    handleClickRightIcon(e);
                  }}
                >
                  <Icon
                    classPrefix={iconClassPrefix}
                    fontClassName={iconFontClassName}
                    name={rightIcon}
                    size={rightIconSize}
                  />
                </TouchableOpacity>
              ) : null}
              {slotButton ? (
                <View style={styles.nutInputButton}>{slotButton}</View>
              ) : null}
              {showWordLimit && maxlength ? (
                <Text style={styles.nutInputWordLimit}>
                  <Text style={styles.nutInputWordNum}>
                    {inputValue ? inputValue.length : 0}
                  </Text>
                  /{maxlength}
                </Text>
              ) : null}
            </View>
            {errorMessage ? (
              <Text
                style={[
                  styles.nutInputErrorMessage,
                  { textAlign: errorMessageAlign },
                ]}
              >
                {errorMessage}
              </Text>
            ) : null}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
});

Input.defaultProps = defaultProps;
Input.displayName = 'NutInput';
