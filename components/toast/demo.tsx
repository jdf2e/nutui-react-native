import React from 'react';

import { Toast } from './toast';
import { Cell } from '../cell/cell';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';

const ToastDemo = () => {
  const textToast = (msg) => {
    Toast.text(msg);
  };

  const titleToast = (msg) => {
    Toast.text(msg, { title: '标题提示' });
  };

  const successToast = (msg) => {
    Toast.success(msg);
  };

  const errorToast = (msg) => {
    Toast.fail(msg);
  };

  const warningToast = (msg) => {
    Toast.warn(msg);
  };

  const loadingToast = (msg) => {
    Toast.loading(msg);
  };

  const duringToast = (msg) => {
    Toast.text(msg, { duration: 10000 });
  };

  const toastBottom = (msg) => {
    Toast.text(msg, {
      center: false,
      bottom: '10%',
    });
  };

  const iconToast = (msg) => {
    Toast.loading(msg, {
      cover: true, // 是否展示透明遮罩层
      coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
      closeOnClickOverlay: true, // 点击遮罩可关闭
      onClose: () => {
        console.log('closeToast');
      },
    });
  };

  return (
    <DemoPage>
      <DemoCard
        title="基础用法"
        flexDirection="column"
        backgroundColor="#f7f7f7"
        padding={0}
      >
        <Cell
          title="文字提示"
          isLink
          onClick={() => textToast('网络失败，请稍后再试~')}
        />
        <Cell title="标题提示" isLink onClick={() => titleToast('标题提示')} />
        <Cell
          title="成功提示"
          isLink
          onClick={() => successToast('成功提示')}
        />
        <Cell title="失败提示" isLink onClick={() => errorToast('失败提示')} />
        <Cell
          title="警告提示"
          isLink
          onClick={() => warningToast('警告提示')}
        />
        <Cell title="加载中" isLink onClick={() => loadingToast('加载中')} />
      </DemoCard>
      <DemoCard
        title="设置展示时长"
        flexDirection="column"
        backgroundColor="#f7f7f7"
        padding={0}
      >
        <Cell
          title="加载中"
          isLink
          onClick={() => duringToast('设置展示时长为10秒')}
        />
        <Cell
          title="Toast 不消失"
          isLink
          onClick={() => {
            Toast.text('Toast 不消失', { duration: 0 });
            setTimeout(() => {
              Toast.hide();
            }, 10000);
          }}
        />
      </DemoCard>
      <DemoCard
        title="自定义底部高度"
        flexDirection="column"
        backgroundColor="#f7f7f7"
        padding={0}
      >
        <Cell
          title="自定义底部高度"
          isLink
          onClick={() => toastBottom('自定义距离')}
        />
      </DemoCard>
      <DemoCard
        title="加载状态透明遮罩"
        flexDirection="column"
        backgroundColor="#f7f7f7"
        padding={0}
      >
        <Cell
          title="加载状态透明遮罩"
          isLink
          onClick={() => iconToast('Loading状态透明遮罩')}
        />
      </DemoCard>
    </DemoPage>
  );
};

export default ToastDemo;
