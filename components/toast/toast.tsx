import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Notification, { NotificationProps } from './notification';
import Portal from '../portal';

let messageInstance: any = null;
export interface ToastProps {
  id?: string;
  msg: string;
  style?: StyleProp<ViewStyle> | undefined;
  duration: number;
  center: boolean;
  type: string;
  title: string;
  bottom: number;
  size: string | number;
  icon: string | null;
  iconSize: number;
  textAlignCenter: boolean;
  loadingRotate: boolean;
  bgColor: string;
  onClose: () => void;
  cover: boolean;
  coverColor: string;
  closeOnClickOverlay: boolean;
}

const options: ToastProps = {
  msg: '',
  id: '', // 标识符，相同时共用一个实例，默认为多个实例
  style: {},
  duration: 2000, // 时长,duration为0则一直展示
  center: true, // toast是否居中展示
  type: 'text',
  title: '', // 标题 String
  bottom: 30, // center为false时生效，距离底部位置
  size: 'base', // 设置字体大小，默认base,可选large\small\base
  icon: null, // 自定义图标，支持图片链接或base64格式
  iconSize: 20, // 自定义图标尺寸
  textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
  loadingRotate: true, // 未实现
  bgColor: 'rgba(0, 0, 0, 0.8)',
  onClose: () => {},
  cover: false, // 是否展示透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
  closeOnClickOverlay: false, // 是否点击遮罩可关闭
};

const toastKeyMap: { [key: number]: 1 } = {};

const remove = (key: number) => {
  Portal.remove(key);
  delete toastKeyMap[key];
};

const removeAll = () => {
  Object.keys(toastKeyMap).forEach((_key) =>
    Portal.remove(Number.parseInt(_key, 10))
  );
};

function getInstance(
  props: NotificationProps,
  callback: (notification: any) => void
) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }

  Notification.newInstance(props, (notification: any) => {
    return callback && callback(notification);
  });
}

function notice(opts: any) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
      removeAll();
    }
  }
  const opts2 = { ...options, ...opts, onClose: close };
  getInstance(opts2, (notification: any) => {
    messageInstance = notification;
  });

  const key = Portal.add(
    <Notification
      {...opts2}
      onAnimationEnd={() => {
        remove(key);
      }}
    />
  );
  toastKeyMap[key] = 1;
}
const errorMsg = (msg: any) => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg cannot be null');
  }
};

export const Toast = {
  text(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, type: 'text', ...option });
  },
  success(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, icon: 'success', type: 'success', ...option });
  },
  fail(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, icon: 'failure', type: 'fail', ...option });
  },
  loading(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, icon: 'loading', type: 'loading', ...option });
  },
  warn(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, icon: 'tips', type: 'warn', ...option });
  },
  customIcon(msg: string | React.ReactNode, option = {}) {
    errorMsg(msg);
    return notice({ msg, ...option });
  },
  hide() {
    if (messageInstance) {
      // messageInstance.destroy();
      messageInstance = null;
      removeAll();
    }
  },
};
