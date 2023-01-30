import {
  ReactNode
} from 'react'

import {
  ViewStyle,
  StyleProp
} from 'react-native';

export type DialogConfigType = {
  prefixCls?: string;
  simple?: boolean
}

export interface IDialogProps {
  style?: StyleProp<ViewStyle> | undefined; // 自定义样式
  overlayStyle?: StyleProp<ViewStyle> | undefined;  // 自定义遮罩样式
  visible?: boolean; // 对话框是否可见	
  title?: ReactNode; // 标题
  content?: ReactNode; // 内容，支持HTML和组件
  footer?: ReactNode; // 自定义页脚，传入 null 则不显示	
  okText?: ReactNode; // 确定按钮文案
  cancelText?: ReactNode; // 取消按钮文案
  mask?: boolean; // 是否展示遮罩	
  noOkBtn?: boolean; // 是否隐藏确定按钮
  noCancelBtn?: boolean; // 是否隐藏取消按钮
  okBtnDisabled?: boolean; // 禁用确定按钮	
  noFooter?: boolean; // 是否隐藏底部按钮栏
  closeOnClickOverlay?: boolean; // 点击蒙层是否关闭对话框
  cancelAutoClose?: boolean; // 取消按钮是否默认关闭弹窗
  textAlign?: string; // 文字对齐方向，可选值同css的text-align
  footerDirection?: string; // 使用横纵方向 可选值 horizontal、vertical	
  lockScroll?: boolean; // 背景是否锁定	
  onClosed?: () => void; // 关闭回调，任何情况关闭弹窗都会触发	
  onOk?: (e?: any) => Promise<() => void> | void; // 确定按钮回调	
  onCancel?: () => void; // 取消按钮回调	
  onClickSelf?: () => void; // 点击自身回调	
  onConfirm?: (e?: any) => Promise<() => void> | void
}

export type DialogReturnProps = {
  update: (newConfig: ConfirmProps) => void
  close: () => void
}

export interface ConfirmProps extends IDialogProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: string
}


export const destroyList: Array<() => void> = []
