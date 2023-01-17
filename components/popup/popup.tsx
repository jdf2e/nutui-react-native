import React, {
  FunctionComponent,
  useState,
  useEffect,
  MouseEvent,
  useRef,
} from 'react'
import { Animated, Easing, Modal, TouchableOpacity,View } from 'react-native'
import Icon from '../icon/index'
import { ComponentDefaults, IComponent } from '../utils/typings'

import  deviceWidth  from '../utils/deviceWidth'
import  deviceHeight  from '../utils/deviceHeight'
import  statusBarHeight  from '../utils/statusBarHeight'

import { useConfig } from '../configprovider';
import popupStyles from './styles';

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends IComponent {
  visible: boolean
  position: string
  transition: string
  style: React.CSSProperties
  popClass: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: string
  destroyOnClose: boolean
  teleport: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onClick: (e: MouseEvent) => void
  onOpened: (e: HTMLElement) => void
  onClosed: (e: HTMLElement) => void
  onClickOverlay: (e: MouseEvent) => void
  onClickCloseIcon: (e: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'center',
  transition: '',
  style: {},
  popClass: '',
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  destroyOnClose: true,
  teleport: null,
  overlay: true,
  round: false,
  onOpen: () => {},
  onClose: () => {},
  onClick: (e: MouseEvent) => {},
  onOpened: (e: HTMLElement) => {},
  onClosed: (e: HTMLElement) => {},
  onClickOverlay: (e: MouseEvent) => {},
  onClickCloseIcon: (e: MouseEvent) => {},
  //...defaultOverlayProps,
} as PopupProps

let _zIndex = 2000

export const Popup: FunctionComponent<
  Partial<PopupProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    visible,
    overlay,
    closeOnClickOverlay,
    overlayStyle,
    overlayClass,
    zIndex,
    lockScroll,
    duration,
    closeable,
    closeIconPosition,
    closeIcon,
    style,
    transition,
    round,
    position,
    popClass,
    className,
    destroyOnClose,
    teleport,
    onOpen,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onOpened,
    onClosed,
    onClick,
    iconClassPrefix,
    iconFontClassName,
  } = props

  const { theme } = useConfig();
  const mStyles = popupStyles(theme);

  const [index, setIndex] = useState(zIndex || _zIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  const [viewWidth, setViewWidth] = useState(0)

  const baseStyle = {
    zIndex: index,
  }

  const overlayStyles = {
    ...overlayStyle,
    ...baseStyle,
  }

  const popStyles = {
    ...style,
    ...baseStyle,
  }
  const open = () => {
    if (!innerVisible) {
      setInnerVisible(true)
      setIndex(++_zIndex)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen && onOpen()
  }

  const close = () => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setShowChildren(false)
        onClose && onClose()
      }
    }
  }

  const onHandleClickOverlay = (e: any) => {
    if (closeOnClickOverlay) {
      onClickOverlay && onClickOverlay(e)
      close()
    }
  }

  const onHandleClick: any = (e: any) => {
    onClose && onClose();
  }

  const onHandleClickCloseIcon: any = (e: any) => {
    onClickCloseIcon && onClickCloseIcon(e)
    close()
  }

  const animatedValue = useRef(new Animated.Value(0)).current

  Animated.timing(animatedValue, {
    toValue: innerVisible ? 1 : 0,
    duration: duration ? duration * 1000 : 300,
    easing: Easing.ease,
    useNativeDriver: true,
  }).start()

  const getStyles = () => {
    let styles: any = {}
    switch (position) {
      case 'top':
        if(round){
          styles = mStyles.nut_pop_top_radius;
        }else{
          styles = mStyles.nut_pop_top;
        }
        break
      case 'center':
        if(round){
          styles = {
            top:
              (deviceHeight -
                (statusBarHeight ? statusBarHeight : 0)) /
                2 -
              (popStyles?.paddingTop
                ? parseInt(String(popStyles.paddingTop))
                : 0),
            left: (deviceWidth - viewWidth) / 2 ,
              borderRadius:15
          }
        }else{
          styles = {
            top:
              (deviceHeight -
                (statusBarHeight ? statusBarHeight : 0)) /
                2 -
              (popStyles?.paddingTop
                ? parseInt(String(popStyles.paddingTop))
                : 0),
            left:
              (deviceWidth - viewWidth) / 2 
          }
        }
        break
      case 'bottom':
        if(round){
          styles = mStyles.nut_pop_bottom_radius;
        }else{
          styles = mStyles.nut_pop_bottom;
        }
        break
      case 'right':
        styles = mStyles.nut_pop_right;
        break
      case 'left':
        styles = mStyles.nut_pop_left;
        break
      default:
        break
    }

    return styles
  }
  

  const getIconStyles = () => {
    let styles: any = {}
    switch (closeIconPosition) {
      case 'top-left':
        styles = mStyles.nut_icon_top_left;
        break
      case 'top-right':
        styles = mStyles.nut_icon_top_right;
        break
      case 'bottom-left':
        styles = mStyles.nut_icon_bottom_left;
        break
      case 'bottom-right':
        styles = mStyles.nut_icon_bottom_right;
        break
      default:
        break
    }

    return styles
  }

  const renderPop = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          opacity: animatedValue,
          overflow:'hidden',
          ...popStyles,
          ...getStyles(),
        }}
      >
        {showChildren ? <View onLayout={(event)=>{
            if(position === 'center' && viewWidth ===0){
                setViewWidth(event?.nativeEvent?.layout?.width)
            }
        }}>{children}</View> : null}
        {closeable ? (
          <TouchableOpacity
          style={{
            position: 'absolute',
            ...getIconStyles(),
          }}
          onPress={
            (e)=>{
              onClickCloseIcon && onClickCloseIcon(e);
            }
          }  
          >
            <Icon
              onPress={onHandleClickCloseIcon}
              name={closeIcon}
              size="18"
            />
          </TouchableOpacity>
        ) : null}
      </Animated.View>
    )
  }

  const renderNode = () => {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="none"
        onRequestClose={onHandleClick}
      >
        {overlay ? (
          <>
            <TouchableOpacity
              style={mStyles.nut_pop_full}
              activeOpacity={1}
              onPress={onHandleClickOverlay}
            >
              <View
              style={mStyles.nut_popbg_full}
              />
            </TouchableOpacity>
            {renderPop()}
          </>
        ) : (
          <>{renderPop()}</>
        )}
      </Modal>
    )
  }

  useEffect(() => {
    visible && open()
    !visible && close()
  }, [visible])

  useEffect(() => {
    setTransitionName(transition || `popup-slide-${position}`)
  }, [position])

  return renderNode()
}

Popup.defaultProps = defaultProps
Popup.displayName = 'NutPopup'
