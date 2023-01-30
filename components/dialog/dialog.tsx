import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import Button from '../button';

import BaseModal from './base-modal';
import Content from './content';
import alert from './alert';

import {
    IDialogProps
} from './config';
import pt from '../utils/pt';

export type DialogProps = IDialogProps

class Dialog extends React.Component<Partial<DialogProps>, any> {
  static defaultProps = {
      okText: '确认',
      cancelText: '取消',
      mask: true,
      closeOnClickOverlay: true,
      noFooter: false,
      noOkBtn: false,
      noCancelBtn: false,
      okBtnDisabled: false,
      cancelAutoClose: true,
      textAlign: 'center',
      footerDirection: 'horizontal',
      lockScroll: false
  }

  static alert:any;

  render() {
      const {
          visible,
          footer,
          title,
          noFooter,
          noOkBtn,
          noCancelBtn,
          lockScroll,
          okBtnDisabled,
          cancelAutoClose,
          okText,
          cancelText,
          onClosed,
          onCancel,
          footerDirection,
          onOk,
          content,
          textAlign,
          children
      } = this.props;

      // 渲染底部
      const renderFooter = function() {
          if (footer === null || noFooter) return '';

          const handleCancel = (e:any) => {
              if (!cancelAutoClose) return;
              onClosed?.();
              onCancel?.();
          };
          const handleOk = (e:any) => {
              onClosed?.();
              onOk?.(e);
          };

          const cancelStyle = [
              styles.cancelWrap,
              footerDirection === 'vertical' ? { borderWidth: 0, marginRight: 0, marginTop: pt(40) } : {}
          ];

          const okStyle = [
              styles.okWrap,
              footerDirection === 'vertical' ? { marginTop: pt(20), width: '100%' } : {}
          ];

          const footerContent = footer || (
              <>
                  {!noCancelBtn && (
                      <Button
                          style={cancelStyle}
                          size='small'
                          plain
                          type='primary'
                          onPress={handleCancel}
                      >
                          {cancelText}
                      </Button>
                  )}
                  {!noOkBtn && (
                      <Button
                          size='small'
                          style={okStyle}
                          type='primary'
                          disabled={okBtnDisabled}
                          onPress={handleOk}
                      >
                          {okText}
                      </Button>
                  )}
              </>
          );
          return footerContent;
      };

      return (
          <View>
              <BaseModal
                  visible={visible}
                  animationType={'fade'}
                  wrapStyle={styles.center}
                  // onRequestClose={onRequestClose}
                  // onClose={onClose}
              >

                  <Content
                      visible={visible}
                      title={title}
                      footer={renderFooter()}
                      textAlign={textAlign}
                      footerDirection={footerDirection}
                      content={content}
                  >
                      {children}
                  </Content>

              </BaseModal>
          </View>
      );
  }
}

Dialog.alert = alert;

export default Dialog;

const styles = StyleSheet.create({
    cancelWrap: {
        marginRight: pt(40),
        width: pt(208),
        height: pt(60)
    },
    okWrap: {
        width: pt(208),
        height: pt(60)
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
