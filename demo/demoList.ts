// 基础组件
import ButtonDemo from '@nutui/nutui-react-native/button/demo'
import CellDemo from '@nutui/nutui-react-native/cell/demo'
import IconDemo from '@nutui/nutui-react-native/icon/demo'
import ImageDemo from '@nutui/nutui-react-native/image/demo';
import OverLayDemo from '@nutui/nutui-react-native/overlay/demo'
import PopupDemo from '@nutui/nutui-react-native/popup/demo'
// 导航组件
import ElevatorDemo from '@nutui/nutui-react-native/elevator/demo';
import FixedNavDemo from '@nutui/nutui-react-native/fixednav/demo';
import IndicatorDemo from '@nutui/nutui-react-native/indicator/demo';
import SideNavBarDemo from '@nutui/nutui-react-native/sidenavbar/demo';
import NavBarDemo from '@nutui/nutui-react-native/navbar/demo'
import TabbarDemo from '@nutui/nutui-react-native/tabbar/demo';
import PaginationDemo from '@nutui/nutui-react-native/pagination/demo'
// 布局组件
import DividerDemo from '@nutui/nutui-react-native/divider/demo';
import GridDemo from '@nutui/nutui-react-native/grid/demo';
import LayoutDemo from '@nutui/nutui-react-native/row/demo';
// 操作反馈组件
import ActionSheetDemo from '@nutui/nutui-react-native/actionsheet/demo';
import BackTopDemo from '@nutui/nutui-react-native/backtop/demo';
import DragDemo from '@nutui/nutui-react-native/drag/demo';
import NotifyDemo from '@nutui/nutui-react-native/notify/demo';
import SwipeDemo from '@nutui/nutui-react-native/swipe/demo';
import SwitchDemo from '@nutui/nutui-react-native/switch/demo';
import ToastDemo from '@nutui/nutui-react-native/toast/demo';
// 展示组件
import AvatarDemo from '@nutui/nutui-react-native/avatar/demo'
import CountDownDemo from '@nutui/nutui-react-native/countdown/demo';
import StepsDemo from '@nutui/nutui-react-native/steps/demo'
import EllipsisDemo from '@nutui/nutui-react-native/ellipsis/demo'
import NoticeBarDemo from '@nutui/nutui-react-native/noticebar/demo';
import VirtuallistDemo from '@nutui/nutui-react-native/virtuallist/demo'
import ProgressDemo from '@nutui/nutui-react-native/progress/demo'
import SkeletonDemo from '@nutui/nutui-react-native/skeleton/demo';
import SwiperDemo from '@nutui/nutui-react-native/swiper/demo';
import TableDemo from '@nutui/nutui-react-native/table/demo';
import TagDemo from '@nutui/nutui-react-native/tag/demo';
import TrendArrowDemo from '@nutui/nutui-react-native/trendarrow/demo';

//录入组件
import CalendarDemo from '@nutui/nutui-react-native/calendar/demo'
import CheckboxDemo from '@nutui/nutui-react-native/checkbox/demo';
import SearchBarDemo from '@nutui/nutui-react-native/searchbar/demo'
import InputNumberDemo from '@nutui/nutui-react-native/inputnumber/demo';
import RadioDemo from '@nutui/nutui-react-native/radio/demo';
import RateDemo from '@nutui/nutui-react-native/rate/demo'
//特色组件
import TimeSelectDemo from '@nutui/nutui-react-native/timeselect/demo'
import BadgeDemo from '@nutui/nutui-react-native/badge/demo';
import CollapseDemo from '@nutui/nutui-react-native/collapse/demo';
import EmptyDemo from '@nutui/nutui-react-native/empty/demo';
import PriceDemo from '@nutui/nutui-react-native/price/demo';
// 特色组件
import CardDemo from '@nutui/nutui-react-native/card/demo';

export const DemoList = [
  {
    title: 'Button',
    description: '按钮',
    demo: ButtonDemo,
    type: 'Basic',
  },
  {
    title: 'Cell',
    description: '单元格',
    demo: CellDemo,
    type: 'Basic',
  },
  {
    title: 'Icon',
    description: '图标',
    demo: IconDemo,
    type: 'Basic',
  },
  {
    title: 'Image',
    description: '图片',
    demo: ImageDemo,
    type: 'Basic',
  },
  {
    title: 'Overlay',
    description: '遮罩层',
    demo: OverLayDemo,
    type: 'Basic',
  },
  {
    title: 'Divider',
    description: '分割线',
    demo: DividerDemo,
    type: 'Layout',
  },
  {
    title: 'Grid',
    description: '宫格',
    demo: GridDemo,
    type: 'Layout',
  },
  {
    title: 'Layout',
    description: '布局',
    demo: LayoutDemo,
    type: 'Layout',
  },
  {
    title: 'Elevator',
    description: '电梯楼层',
    demo: ElevatorDemo,
    type: 'Nav',
  },
  {
    title: 'FixedNav',
    description: '悬浮导航',
    demo: FixedNavDemo,
    type: 'Nav',
  },
  {
    title: 'Indicator',
    description: '指示器',
    demo: IndicatorDemo,
    type: 'Nav',
  },
  {
    title: 'NavBar',
    description: '导航栏',
    demo: NavBarDemo,
    type: 'Nav',
  },
  {
    title: 'SideNavBar',
    description: '侧边栏导航',
    demo: SideNavBarDemo,
    type: 'Nav',
  },
  {
    title: 'Tabbar',
    description: '标签栏',
    demo: TabbarDemo,
    type: 'Nav',
  },
  {
    title: 'ActionSheet',
    description: '动作面板',
    demo: ActionSheetDemo,
    type: 'Feedback',
  },
  {
    title: 'BackTop',
    description: '回到顶部',
    demo: BackTopDemo,
    type: 'Feedback',
  },
  {
    title: 'Drag',
    description: '拖拽',
    demo: DragDemo,
    type: 'Feedback',
  },
  {
    title: 'Notify',
    description: '消息通知',
    demo: NotifyDemo,
    type: 'Feedback',
  },
  {
    title: 'Swipe',
    description: '滑动手势',
    demo: SwipeDemo,
    type: 'Feedback',
  },
  {
    title: 'Switch',
    description: '开关',
    demo: SwitchDemo,
    type: 'Feedback',
  },
  {
    title: 'Toast',
    description: '吐司',
    demo: ToastDemo,
    type: 'Feedback',
  },
  {
    title: 'Avatar',
    description: '头像',
    demo: AvatarDemo,
    type: 'Exhibition',
  },
  {
    title: 'Badge',
    description: '徽标',
    demo: BadgeDemo,
    type: 'Exhibition',
  },
  {
    title: 'Collapse',
    description: '折叠面板',
    demo: CollapseDemo,
    type: 'Exhibition',
  },
  {
    title: 'CountDown',
    description: '倒计时',
    demo: CountDownDemo,
    type: 'Exhibition',
  },
  {
    title: 'Empty',
    description: '空状态',
    demo: EmptyDemo,
    type: 'Exhibition',
  },
  {
    title: 'Price',
    description: '价格',
    demo: PriceDemo,
    type: 'Exhibition',
  },
  {
    title: 'Card',
    description: '商品卡片',
    demo: CardDemo,
    type: 'Business',
  },
  {
    title: 'Popup',
    description: '弹出层',
    demo: PopupDemo,
    type: 'Basic'
  },
  {
    title: 'Pagination',
    description: '分页',
    demo: PaginationDemo,
    type: 'Nav'
  },
  {
    title: 'Calendar',
    description: '日历',
    demo: CalendarDemo,
    type: 'Dentry'
  },
  {
    title: 'Checkbox',
    description: '复选按钮',
    demo: CheckboxDemo,
    type: 'Dentry'
  },
  {
    title: 'SearchBar',
    description: '搜索栏',
    demo: SearchBarDemo,
    type: 'Dentry'
  },
  {
    title: 'InputNumber',
    description: '数字输入框',
    demo: InputNumberDemo,
    type: 'Dentry'
  },
  {
    title: 'Radio',
    description: '单选按钮',
    demo: RadioDemo,
    type: 'Dentry'
  },
  {
    title: 'Rate',
    description: '评分',
    demo: RateDemo,
    type: 'Dentry'
  },
  {
    title: 'Steps',
    description: '步骤条',
    demo: StepsDemo,
    type: 'Exhibition'
  },
  {
    title: 'TimeSelect',
    description: '配送时间',
    demo: TimeSelectDemo,
    type: 'Business'
  },
  {
    title: 'Ellipsis',
    description: '文本省略',
    demo: EllipsisDemo,
    type: 'Exhibition'
  },
  {
    title: 'NoticeBar',
    description: '公告栏',
    demo: NoticeBarDemo,
    type: 'Exhibition'
  },
  {
    title: 'Virtuallist',
    description: '虚拟列表',
    demo: VirtuallistDemo,
    type: 'Exhibition'
  },
  {
    title: 'Progress',
    description: '进度条',
    demo: ProgressDemo,
    type: 'Exhibition'
  },
  {
    title: 'Skeleton',
    description: '骨架屏',
    demo: SkeletonDemo,
    type: 'Exhibition'
  },
  {
    title: 'Swiper',
    description: '轮播',
    demo: SwiperDemo,
    type: 'Exhibition'
  },
  {
    title: 'Table',
    description: '表格',
    demo: TableDemo,
    type: 'Exhibition'
  },
  {
    title: 'Tag',
    description: '标签',
    demo: TagDemo,
    type: 'Exhibition'
  },
  {
    title: 'TrendArrow',
    description: '趋势箭头',
    demo: TrendArrowDemo,
    type: 'Exhibition'
  }
];

export const CategoryList = [
  {
    title: 'Basic',
    description: '基础组件',
  },
  {
    title: 'Layout',
    description: '布局组件',
  },
  {
    title: 'Dentry',
    description: '录入组件',
  },
  {
    title: 'Feedback',
    description: '反馈组件',
  },
  {
    title: 'Nav',
    description: '导航组件',
  },
  {
    title: 'Exhibition',
    description: '展示组件',
  },
  {
    title: 'Business',
    description: '特色组件',
  },
];
