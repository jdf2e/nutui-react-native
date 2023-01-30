import React from 'react';
import Dialog from './dialog';

export interface AlertContainerProps {
  title: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  mask?: boolean;
  noOkBtn?: boolean;
  noCancelBtn?: boolean;
  okBtnDisabled?: boolean;
  noFooter?: boolean;
  closeOnClickOverlay?: boolean; // 默认 true
  cancelAutoClose?: boolean; // 默认 true
  textAlign?: string;
  footerDirection?: string;
  lockScroll?:boolean;
  onOk?: (e?: any) => Promise<() => void> | void;
  onCancel?: () => void;
  onClosed?: () => void;
  onAnimationEnd?: (visible: boolean) => void;
}

export default class AlertContainer extends React.Component<
  AlertContainerProps,
  any
> {
    constructor(props: AlertContainerProps) {
        super(props);
        this.state = {
            visible: true
        };
    }

    //   onBackAndroid = () => {
    //       const { onBackHandler } = this.props;
    //       if (typeof onBackHandler === 'function') {
    //           const flag = onBackHandler();
    //           if (flag) {
    //               this.onClose();
    //           }
    //           return flag;
    //       }
    //       if (this.state.visible) {
    //           this.onClose();
    //           return true;
    //       }
    //       return false;
    //   }

  onClose = () => {
      this.setState({
          visible: false
      });
  }

  onOk = () => {
      const {
          closeOnClickOverlay,
          onOk
      } = this.props;
      if (closeOnClickOverlay) {
          this.onClose();
      }
      onOk && onOk();
  }

  onCancel = () => {
      const { closeOnClickOverlay, onCancel } = this.props;
      if (closeOnClickOverlay) {
          this.onClose();
      }
      onCancel && onCancel();
  }

  render() {
      const {
          title,
          content,
          footer,
          okText,
          cancelText,
          mask,
          noOkBtn,
          noCancelBtn,
          okBtnDisabled,
          noFooter,
          closeOnClickOverlay,
          cancelAutoClose,
          textAlign,
          footerDirection,
          lockScroll,
          onClosed,
          onAnimationEnd
      } = this.props;

      return (
          <Dialog
              transparent
              title={title}
              content={content}
              visible={this.state.visible}
              footer={footer}
              onAnimationEnd={onAnimationEnd}
              okText={okText}
              cancelText={cancelText}
              mask={mask}
              noOkBtn={noOkBtn}
              noCancelBtn={noCancelBtn}
              okBtnDisabled={okBtnDisabled}
              noFooter={noFooter}
              closeOnClickOverlay={closeOnClickOverlay}
              cancelAutoClose={cancelAutoClose}
              textAlign={textAlign}
              footerDirection={footerDirection}
              lockScroll={lockScroll}
              onOk={this.onOk}
              onCancel={this.onCancel}
              onClosed={onClosed}
              //   onRequestClose={this.onBackAndroid}
              //   bodyStyle={{
              //       marginTop: 8,
              //       alignItems: 'center'
              //   }}
          />

      );
  }
}
