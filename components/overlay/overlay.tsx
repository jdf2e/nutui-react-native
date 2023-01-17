import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Animated, Easing, TouchableOpacity,Modal } from 'react-native'
import { useConfig } from '../configprovider';
import overlayStyles from './styles';

export interface OverlayProps {
  zIndex: number
  duration: number
  overlayClass: string
  overlayStyle: React.CSSProperties
  closeOnClickOverlay: boolean
  visible: boolean
  lockScroll: boolean
  onPress:(event: Event) => void
}
export const defaultOverlayProps = {
  zIndex: 2000,
  duration: 0.3,
  overlayClass: '',
  closeOnClickOverlay: true,
  visible: false,
  lockScroll: true,
  overlayStyle: {},
  onPress:()=>{}
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    overlayClass,
    closeOnClickOverlay,
    visible,
    lockScroll,
    overlayStyle,
    onPress,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }
  const { theme } = useConfig();
  const mStyles = overlayStyles(theme);

  const [show, setShow] = useState(visible)

  useEffect(() => {
    visible && setShow(visible)
  }, [visible])

  const styles = {
    zIndex,
    ...overlayStyle,
  }

  const handleClick = (e: any) => {
    if (closeOnClickOverlay) {
      props.onPress && props.onPress(e)
      const id = setTimeout(() => {
        setShow(!show)
      }, duration * 1000 * 0.8)
    }
  }

  const animatedValue = useRef(new Animated.Value(0)).current

  Animated.timing(animatedValue, {
    toValue: visible ? 1 : 0,
    duration: duration * 1000,
    easing: Easing.ease,
    useNativeDriver: true
  }).start()

  return (
    <Modal
        animationType="none"
        transparent={true}
        visible={show}
      >
      <Animated.View
        style={[mStyles.nut_overlay_full,{opacity: animatedValue,...styles,}]}
      >
        <TouchableOpacity
          onPress={handleClick}
          activeOpacity={1}
          style={[mStyles.nut_overlay_full_bg, {...styles}]}>
          {children}
        </TouchableOpacity>
      </Animated.View>
      </Modal>
  )
}

Overlay.defaultProps = defaultOverlayProps
Overlay.displayName = 'NutOverlay'
