import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Notification, { NotificationProps } from './notification';
import Portal from '../portal';

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

export interface NotifyProps {
  id: string;
  color?: string; // 字体颜色
  message: string; // 展示文案，支持通过\n换行 默认 false
  duration: number; // 展示时长(ms)，值为 0 时，notify 不会消失
  backgroundColor: string; // 背景颜色
  type: string; // 提示的信息类型（primary，success ，danger，warning）默认 danger
  position: string; // 自定义位置 (top, bottom) top
//   isWrapTeleport: boolean;
  style: StyleProp<ViewStyle> | undefined;
  visible: boolean;
  onPress: () => void;
  onClosed: () => void;
}

const options: NotifyProps = {
  message: '',
  id: '',
  duration: 3000, // 时长
  color: '',
  backgroundColor: '',
  type: 'danger',
  position: 'top',
  visible: false,
//   isWrapTeleport: true,
  style: {},
  onClosed: () => {},
  onPress: () => {},
};

let messageInstance: any = null;

const getInstance = (
  props: NotificationProps,
  callback: (notification: any) => void
) => {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
    removeAll();
  }

  return Notification.newInstance(props, (notification: any) => {
    return callback && callback(notification);
  });
};

const notice = (opts: any) => {
  opts = {
    ...options,
    ...opts,
  };
  getInstance(opts, (notification: any) => {
    messageInstance = notification;
  });

  const key = Portal.add(
    <Notification
      {...opts}
      onAnimationEnd={() => {
        remove(key);
      }}
    />
  );

  toastKeyMap[key] = 1;
};

const errorMsg = (msg: any) => {
  if (!msg) {
    console.warn('[NutUI Notify]: msg不能为空');
  }
};

export default {
  text(message: string | React.ReactNode, option = {}) {
    errorMsg(message);
    return notice({ message, type: 'base', ...option });
  },
  success(message: string | React.ReactNode, option = {}) {
    errorMsg(message);
    return notice({ message, type: 'success', ...option });
  },
  primary(message: string | React.ReactNode, option = {}) {
    errorMsg(message);
    return notice({ message, type: 'primary', ...option });
  },
  danger(message: string | React.ReactNode, option = {}) {
    errorMsg(message);
    return notice({ message, type: 'danger', ...option });
  },
  warn(message: string | React.ReactNode, option = {}) {
    errorMsg(message);
    return notice({ message, type: 'warning', ...option });
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      removeAll();
      messageInstance = null;
    }
  },
};
