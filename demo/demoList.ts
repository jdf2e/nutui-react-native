import ButtonDemo from 'nutui-rn/button/demo'
import IconDemo from 'nutui-rn/icon/demo'
// import CellDemo from 'nutui-rn/cell/demo'

import NavBarDemo from 'nutui-rn/navbar/demo'

import ActionSheetDemo from 'nutui-rn/actionsheet/demo'
import BackTopDemo from 'nutui-rn/backtop/demo'
import ToastDemo from 'nutui-rn/toast/demo'

export const DemoList = [{
  title: 'Button',
  description: '按钮',
  demo: ButtonDemo,
  type: 'Basic'
},
{
  title: 'Icon',
  description: '图标',
  demo: IconDemo,
  type: 'Basic'
},
{
  title: 'NavBar',
  description: '导航栏',
  demo: NavBarDemo,
  type: 'Nav'
},
{
  title: 'ActionSheet',
  description: '动作面板',
  demo: ActionSheetDemo,
  type: 'Feedback'
},
{
  title: 'BackTop',
  description: '回到顶部',
  demo: BackTopDemo,
  type: 'Feedback'
},
{
  title: 'Toast',
  description: '吐司',
  demo: ToastDemo,
  type: 'Feedback'
},
// {
//   title: 'Cell',
//   description: ' 单元格',
//   demo: ButtonDemo,
//   type: 'Basic'
// }
]

export const CategoryList = [{
  title: 'Basic',
  description: '基础组件',
}, {
  title: 'Layout',
  description: '布局组件',
}, {
  title: 'Dentry',
  description: '录入组件',
}, {
  title: 'Feedback',
  description: '反馈组件',
}, {
  title: 'Nav',
  description: '导航组件',
}, {
  title: 'Exhibition',
  description: '展示组件',
}, {
  title: 'Business',
  description: '特色组件',
}]
