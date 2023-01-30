import React from 'react';
import Portal from '../portal';

import AlertContainer from './alert-container';
import { IDialogProps } from './config';

export default function alert({
    title,
    content,
    footer,
    okText = '确认',
    cancelText = '取消',
    mask = true,
    noOkBtn = false,
    noCancelBtn = false,
    okBtnDisabled = false,
    noFooter = false,
    closeOnClickOverlay = true, // 默认 true
    cancelAutoClose = true, // 默认 true
    textAlign = 'center',
    footerDirection = 'horizontal',
    lockScroll = false,
    onOk,
    onCancel,
    onClosed
}: IDialogProps) {
    const key = Portal.add(
        <AlertContainer
            title={title}
            content={content}
            footer={footer}
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
            onOk={onOk}
            onCancel={onCancel}
            onClosed={onClosed}
            onAnimationEnd={(visible: boolean) => {
                if (!visible) {
                    Portal.remove(key);
                }
            }}

        />
    );
    return key;
}

// export default function alert({
//     title,
//     content,
//     footer,
//     okText = '确认',
//     cancelText = '取消',
//     mask = true,
//     noOkBtn = false,
//     noCancelBtn = false,
//     okBtnDisabled = false,
//     noFooter = false,
//     closeOnClickOverlay = true, // 默认 true
//     cancelAutoClose = true, // 默认 true
//     textAlign = 'center',
//     footerDirection = 'horizontal',
//     lockScroll = false,
//     onOk,
//     onCancel,
//     onClosed
// }: IDialogProps) {
//     const key = Portal.add(
//         <AlertContainer
//             title={title}
//             content={content}
//             footer={footer}
//             okText={okText}
//             cancelText={cancelText}
//             mask={mask}
//             noOkBtn={noOkBtn}
//             noCancelBtn={noCancelBtn}
//             okBtnDisabled={okBtnDisabled}
//             noFooter={noFooter}
//             closeOnClickOverlay={closeOnClickOverlay}
//             cancelAutoClose={cancelAutoClose}
//             textAlign={textAlign}
//             footerDirection={footerDirection}
//             lockScroll={lockScroll}
//             onOk={onOk}
//             onCancel={onCancel}
//             onClosed={onClosed}
//             onAnimationEnd={(visible: boolean) => {
//                 if (!visible) {
//                     Portal.remove(key);
//                 }
//             }}

//         />
//     );
//     return key;
// }
