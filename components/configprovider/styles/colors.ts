interface Colors {
  // 品牌色
  readonly nutuiBrandColor: string;
  // 品牌渐变色
  readonly nutuiBrandColorStart: string;
  readonly nutuiBrandColorEnd: string;
  readonly nutuiBrandLinkColor: string;
  readonly nutuiGray0: string;
  // 主要内容用色，常用语常规标题内容、细文浏览、常规按钮文字以及图表引导。
  readonly nutuiGray1: string;
  // 次要文字色，用于次级标题、属性标示、非主要信息引导等。
  readonly nutuiGray2: string;
  // 不可操作内容色，用于预置内容、无效内容、特殊不可点击按钮、组件边框线等。
  readonly nutuiGray3: string;
  // 页面基底色，用于卡片式页面的兜底，永远置于页面最底层。
  readonly nutuiGray4: string;
  // 卡片内嵌背景色，用于卡片内部的信息包裹，感知较弱。
  readonly nutuiGray5: string;
  // 卡片背景色
  readonly nutuiGray6: string;
  // 页面全局蒙层，用于弹出层、弹窗、新功能引导出现的整页遮罩
  readonly nutuiGray7: string;
  // 局部蒙层，用于非整页遮罩
  readonly nutuiGray8: string;
  // 间隔线/容错线，用于结构或信息分割
  readonly nutuiGray9: string;
  // 图片容错蒙层
  readonly nutuiGray10: string;
}

const lightColors: Colors = {
  nutuiBrandColor: '#fa2c19',
  nutuiBrandColorStart: '#ff404f',
  nutuiBrandColorEnd: '#fa2c19',
  nutuiBrandLinkColor: '#396acc',
  nutuiGray0: '#000000',
  nutuiGray1: '#1a1a1a',
  nutuiGray2: '#757575',
  nutuiGray3: '#bfbfbf',
  nutuiGray4: '#f4f4f4',
  nutuiGray5: '#f8f8f8',
  nutuiGray6: '#ffffff',
  nutuiGray7: 'rgba(0, 0, 0, 0.7)',
  nutuiGray8: 'rgba(0, 0, 0, 0.4)',
  nutuiGray9: 'rgba(0, 0, 0, 0.08)',
  nutuiGray10: 'rgba(0, 0, 0, 0.02)'
};

const darkColors = {
  nutuiBrandColor: '#fa2c19',
  nutuiBrandColorStart: '#ff404f',
  nutuiBrandColorEnd: '#fa2c19',
  nutuiBrandLinkColor: '#396acc',
  nutuiGray0: '#000000',
  nutuiGray1: '#e6e6e6',
  nutuiGray2: '#828282',
  nutuiGray3: '#404040',
  nutuiGray4: '#0a0a0a',
  nutuiGray5: '#141414',
  nutuiGray6: '#1f1f1f',
  nutuiGray7: 'rgba(0, 0, 0, 0.7)',
  nutuiGray8: 'rgba(0, 0, 0, 0.4)',
  nutuiGray9: 'rgba(0, 0, 0, 0.08)',
  nutuiGray10: 'rgba(0, 0, 0, 0.02)'
};


export { lightColors, darkColors };
export type { Colors };
