// NutUI主题定制
const commonStyles = {
  '$primary-color': '#fa2c19',
  '$primary-color-start': '#fa2c19',
  '$primary-color-end': '#fa6419',
  '$help-color': '#f5f5f5',
  '$title-color': '#1a1a1a',
  '$title-color2': '#666666',
  '$text-color': '#808080',
  '$disable-color': '#cccccc',
  $white: '#fff',
  $black: '#000',
  '$required-color': '#fa2c19',
  '$dark-background': '#131313',
  '$dark-background2': '#1b1b1b',
  '$dark-background3': '#141414',
  '$dark-background4': '#323233',
  '$dark-background5': '#646566',
  '$dark-background6': '#380e08',
  '$dark-background7': '#707070',
  '$dark-color': '#fff',
  '$dark-color2': '#f2270c',
  '$dark-color3': 'rgba(232, 230, 227, 0.8)',
  '$dark-color-gray': '#808080',
  '$dark-calendar-choose-color': 'rgba(227, 227, 227, 0.2)',
  '$font-family':
    'PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif', // todo 字体
  '$animation-duration': '0.25s',
  '$animation-timing-fun': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', // todo 动画
  '$font-size-0': 10, // todo 字体
  '$font-size-1': 12,
  '$font-size-2': 14,
  '$font-size-3': 16,
  '$font-size-4': 18,
  '$font-weight-bold': 400,
  '$font-size-small': 12,
  '$font-size-base': 14,
  '$font-size-large': 16,
  '$line-height-base': 1.5,
  $gray0: '#000000',
  // 主要内容用色，常用语常规标题内容、细文浏览、常规按钮文字以及图表引导。
  $gray1: '#1a1a1a',
  // 次要文字色，用于次级标题、属性标示、非主要信息引导等。
  $gray2: '#757575',
  // 不可操作内容色，用于预置内容、无效内容、特殊不可点击按钮、组件边框线等。
  $gray3: '#bfbfbf',
  // 页面基底色，用于卡片式页面的兜底，永远置于页面最底层。
  $gray4: '#f4f4f4',
  // 卡片内嵌背景色，用于卡片内部的信息包裹，感知较弱。
  $gray5: '#f8f8f8',
  // 卡片背景色
  $gray6: '#ffffff',
  // 页面全局蒙层，用于弹出层、弹窗、新功能引导出现的整页遮罩
  $gray7: 'rgba(0, 0, 0, 0.7)',
  // 局部蒙层，用于非整页遮罩
  $gray8: 'rgba(0, 0, 0, 0.4)',
  // 间隔线/容错线，用于结构或信息分割
  $gray9: 'rgba(0, 0, 0, 0.08)',
  // 图片容错蒙层
  $gray10: 'rgba(0, 0, 0, 0.02)'
};

const themeDefault: any = {
  // Base

  // Button
  '$button-border-radius': 25,
  '$button-border-width': 1,
  '$button-default-bg-color': commonStyles['$white'],
  '$button-default-border-color': 'rgba(204, 204, 204, 1)',
  '$button-default-color': 'rgba(102, 102, 102, 1)',
  '$button-default-padding': '0 18px', // todo
  '$button-mini-padding': '0 12px', // todo padding&margin 处理
  '$button-small-padding': '0 12px', // todo
  '$button-small-height': 28,
  '$button-mini-height': 24,
  '$button-default-height': 38,
  '$button-large-height': 48,
  '$button-large-line-height': 46,
  '$button-small-line-height': 26,
  '$button-block-height': 48,
  '$button-default-line-height': 36,
  '$button-block-line-height': 46,
  '$button-default-font-size': commonStyles['$font-size'] - 2,
  '$button-large-font-size': commonStyles['$button-default-font-size'],
  '$button-small-font-size': commonStyles['$font-size-1'],
  '$button-mini-font-size': commonStyles['$font-size-1'],
  '$button-mini-line-height': 1.2,
  '$button-disabled-opacity': 0.68,
  '$button-primary-color': commonStyles['$white'],
  '$button-primary-border-color': commonStyles['$primary-color'],
  '$button-primary-background-color':
    'linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%)', // todo
  '$button-info-color': commonStyles['$white'],
  '$button-info-border-color': 'rgba(73, 106, 242, 1)',
  '$button-info-background-color':
    'linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)', // todo
  '$button-success-color': commonStyles['$white'],
  '$button-success-border-color': 'rgba(38, 191, 38, 1)',
  '$button-success-background-color':
    'linear-gradient(135deg, rgba(38, 191, 38, 1) 0%, rgba(39, 197, 48, 1) 45%, rgba(40, 207, 63, 1) 83%, rgba(41, 212, 70, 1) 100%)', // todo
  '$button-danger-color': commonStyles['$white'],
  '$button-danger-border-color': 'rgba(250, 44, 25, 1)',
  '$button-danger-background-color': 'rgba(250, 44, 25, 1)',
  '$button-warning-color': commonStyles['$white'],
  '$button-warning-border-color': 'rgba(255, 158, 13, 1)',
  '$button-warning-background-color':
    'linear-gradient(135deg, rgba(255, 158, 13, 1) 0%, rgba(255, 167, 13, 1) 45%, rgba(255, 182, 13, 1) 83%, rgba(255, 190, 13, 1) 100%)', // todo
  '$button-plain-background-color': commonStyles['$white'],

  // Cell
  '$cell-color': commonStyles['$title-color2'],
  '$cell-title-font': commonStyles['$font-size-2'],
  '$cell-title-desc-font': commonStyles['$font-size-1'],
  '$cell-desc-font': commonStyles['$font-size-2'],
  '$cell-desc-color': commonStyles['$disable-color'],
  '$cell-border-radius': 6,
  '$cell-padding': '13px 16px', // todo
  '$cell-padding-top-bottom': 13,
  '$cell-padding-left-right': 16,
  '$cell-line-height': 20,
  '$cell-after-right': 16,
  '$cell-after-border-bottom': '1px solid #f5f6f7', // todo
  '$cell-after-border-bottom-width': 1,
  '$cell-after-border-bottom-color': '#f5f6f7',
  '$cell-default-icon-margin': '0 4px 0 0px', // todo
  '$cell-default-icon-margin-right': 4,
  '$cell-large-title-font': commonStyles['$font-size-large'],
  '$cell-large-title-desc-font': commonStyles['$font-size-base'],
  '$cell-large-padding': '15px 16px', // todo
  '$cell-large-padding-top-bottom': 15,
  '$cell-large-padding-left-right': 16,
  '$cell-background': commonStyles.$white,
  '$cell-group-title-padding': '0 10px', // todo
  '$cell-group-title-padding-left-right': 10,
  '$cell-group-title-color': '#909ca4',
  '$cell-group-title-font-size': commonStyles['$font-size-2'],
  '$cell-group-title-line-height': 20,
  '$cell-group-desc-padding': '0 10px', // todo
  '$cell-group-desc-padding-left-right': 10,
  '$cell-group-desc-color': '#909ca4',
  '$cell-group-desc-font-size': commonStyles['$font-size-1'],
  '$cell-group-desc-line-height': 16,
  '$cell-group-background-color': commonStyles.$white,

  // Icon
  '$icon-height': 20,
  '$icon-width': 20,
  '$icon-line-height': 20,

  // OverLay
  '$overlay-bg-color': 'rgba(0, 0, 0, 0.7)',

  // Popup
  '$popup-close-icon-margin': 16,
  '$popup-border-radius': 20,
  '$popup-bg':'rgba(0, 0, 0, 0.7)',
  '$popup-top-radius':15,
  '$popup-bottom-radius':15,
  '$popup-icon-margin':10,

  // Divider
  '$divider-margin': '16px 0', // todo
  '$divider-margin-left': 8,
  '$divider-margin-right': 8,
  '$divider-text-font-size': 28, // 等于$font-size-2 兼容ios
  '$divider-text-color': '#909ca4',
  '$divider-line-height': 1,
  '$divider-before-margin-right': 23,
  '$divider-after-margin-left': 23,
  '$divider-vertical-height': 12,
  '$divider-vertical-top': 2,
  '$divider-vertical-border-left': 'rgba(0, 0, 0, 0.06)',
  '$divider-vertical-border-color': 'rgba(0, 0, 0, 0.2)',
  '$divider-vertical-margin': '0 8px', // todo

  // Grid
  '$grid-bg-color': commonStyles.$white,
  '$grid-border-color': '#f5f6f7',
  '$grid-item-content-padding': '16px 8px', // todo
  '$grid-item-content-bg-color': commonStyles.$white,
  '$grid-item-content-paddingV': 20,
  '$grid-item-text-margin': 8,
  '$grid-item-text-size':14,
  '$grid-item-text-color': commonStyles['$title-color2'],
  '$grid-item-text-font-size': commonStyles['$font-size-1'],

  // Navbar
  '$navbar-height': 44,
  '$navbar-margin-bottom': 20,
  '$navbar-padding': '13px 16px', // todo
  '$navbar-background': commonStyles['$white'],
  '$navbar-box-shadow': '0px 1px 7px 0px rgba(237, 238, 241, 1)', // todo
  '$navbar-color': commonStyles['$title-color2'],
  '$navbar-title-base-font': commonStyles['$font-size-2'],
  '$navbar-title-font': commonStyles['$font-size-2'],
  '$navbar-title-font-weight': 0,
  '$navbar-title-font-color': commonStyles['$navbar-color'],
  '$navbar-title-width': 100,
  '$navbar-title-icon-margin': '0 0 0 13px', // todo

  // FixedNav
  '$fixednav-bg-color': commonStyles['$white'],
  '$fixednav-font-color': commonStyles['$black'],
  '$fixednav-index': 201, // todo
  '$fixednav-btn-bg':
    'linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%)', // todo
  '$fixednav-item-active-color': commonStyles['$primary-color'],

  // Menu
  // $menu-bar-line-height: 48px,
  // $menu-item-font-size: $font-size-2,
  // $menu-item-text-color: $title-color,
  // $menu-item-active-text-color: $primary-color,
  // $menu-bar-border-bottom-color: #eaf0fb,
  // $menu-bar-opened-z-index: 2001,
  // $menu-item-disabled-color: #969799,
  // $menu-title-text-padding-left: 8px,
  // $menu-title-text-padding-right: 8px,
  // $menu-item-content-padding: 12px 24px,
  // $menu-item-content-max-height: 214px,
  // $menu-item-option-padding-top: 12px,
  // $menu-item-option-padding-bottom: 12px,
  // $menu-item-option-i-margin-right: 6px,
  // $menu-bar-box-shadow: 0 2px 12px rgba(89, 89, 89, 0.12),
  // $menu-scroll-fixed-top: 0,
  // $menu-scroll-fixed-z-index: 1000,

  // // Tabbar
  // $tabbar-active-color: $primary-color,
  // $tabbar-unactive-color: $primary-color,
  // $tabbar-border-top: 1px solid #eee,
  // $tabbar-border-bottom: 1px solid #eee,
  // $tabbar-box-shadow: none,
  // $tabbar-item-text-font-size: $font-size-0,
  // $tabbar-item-text-line-height: initial,

  // // Elevator
  // $elevator-list-item-highcolor: $primary-color,
  // $elevator-list-item-font-size: 12px,
  // $elevator-list-item-font-color: #333333,
  // $elevator-list-item-name-padding: 0 20px,
  // $elevator-list-item-name-height: 30px,
  // $elevator-list-item-name-line-height: 30px,
  // $elevator-list-item-code-font-size: 14px,
  // $elevator-list-item-code-font-color: #1a1a1a,
  // $elevator-list-item-code-font-weight: 500,
  // $elevator-list-item-code-padding: 0 20px,
  // $elevator-list-item-code-height: 35px,
  // $elevator-list-item-code-line-height: 35px,
  // $elevator-list-item-code-after-width: 100%,
  // $elevator-list-item-code-after-height: 1px,
  // $elevator-list-item-code-after-bg-color: #f5f5f5,
  // $elevator-list-item-code-current-box-shadow: 0 3px 3px 1px rgba(240, 240, 240, 1),
  // $elevator-list-item-code-current-bg-color: #fff,
  // $elevator-list-item-code-current-border-radius: 50%,
  // $elevator-list-item-code-current-width: 45px,
  // $elevator-list-item-code-current-height: 45px,
  // $elevator-list-item-code-current-line-height: 45px,
  // $elevator-list-item-code-current-position: absolute,
  // $elevator-list-item-code-current-right: 60px,
  // $elevator-list-item-code-current-top: 50%,
  // $elevator-list-item-code-current-transform: translateY(-50%),
  // $elevator-list-item-code-current-text-align: center,
  // $elevator-list-item-bars-position: absolute,
  // $elevator-list-item-bars-right: 8px,
  // $elevator-list-item-bars-top: 50%,
  // $elevator-list-item-bars-transform: translateY(-50%),
  // $elevator-list-item-bars-padding: 15px 0,
  // $elevator-list-item-bars-background-color: #eeeff2,
  // $elevator-list-item-bars-border-radius: 6px,
  // $elevator-list-item-bars-text-align: center,
  // $elevator-list-item-bars-z-index: 1,
  // $elevator-list-item-bars-inner-item-padding: 3px,
  // $elevator-list-item-bars-inner-item-font-size: 10px,
  // $elevator-list-fixed-color: $primary-color,
  // $elevator-list-fixed-bg-color: $white,
  // $elevator-list-fixed-box-shadow: 0 0 10px #eee,
  // $elevator-list-item-bars-inner-item-active-color: $primary-color,

 // Pagination
 '$pagination-height': 40,
 '$pagination-paddingH': 10,
 '$pagination-paddingV': 5,
 '$pagination-border-width': 0.5,
 '$pagination-border-color': '#cfd0d1',
 '$pagination-bg-color': '#f7f8fa',
 '$pagination-border-able-color': '#e6e9ed',
 '$pagination-bg-able-color': commonStyles.$white,
 '$pagination-text-size':commonStyles['$font-size-2'],
 '$pagination-text-color':'#cecfde',
 '$pagination-text-pre-color':commonStyles['$primary-color'],
 '$pagination-center-active-width':40,
 '$pagination-center-active-height':40,
 '$pagination-center-active-radius':2,
 '$pagination-center-active-bg':commonStyles['$primary-color'],
 '$pagination-center-disactive-border-width':0.5,
 '$pagination-center-disactive-border-color':'#e6e9ed',
 '$pagination-center-disactive-bg':commonStyles.$white,
 '$pagination-center-disactive-radius':2,
 '$pagination-center-text-color':commonStyles.$white,
 '$pagination-center-text-size':14,
 '$pagination-center-distext-color':commonStyles['$primary-color'],

  // // Tabs
  // $tabs-tab-smile-color: $primary-color,
  // $tabs-titles-border-radius: 0,
  // $tabs-titles-item-large-font-size: $font-size-3,
  // $tabs-titles-item-font-size: $font-size-2,
  // $tabs-titles-item-small-font-size: $font-size-1,
  // $tabs-titles-item-color: $title-color,
  // $tabs-titles-item-active-color: $title-color,
  // $tabs-titles-background-color: $help-color,
  // $tabs-horizontal-tab-line-color: linear-gradient(90deg, $primary-color 0%, rgba($primary-color, 0.15) 100%),
  // $tabs-horizontal-titles-height: 46px,
  // $tabs-horizontal-titles-item-min-width: 50px,
  // $tabs-horizontal-titles-item-active-line-width: 40px,
  // $tabs-vertical-tab-line-color: linear-gradient(180deg, $primary-color 0%, rgba($primary-color, 0.15) 100%),
  // $tabs-vertical-titles-item-height: 40px,
  // $tabs-vertical-titles-item-active-line-height: 14px,
  // $tabs-vertical-titles-width: 100px,

  // // Indicator
  // $indicator-color: $primary-color,
  // $indicator-dot-color: $disable-color,
  // $indicator-white: $white,
  // $indicator-size: 18px,
  // $indicator-dot-size: calc($indicator-size / 3),
  // $indicator-border-size: $indicator-size + 2,
  // $indicator-number-font-size: 10px,

  // // SideNavBar
  // $sidenavbar-content-bg-color: $white,
  // $sidenavbar-sub-title-border-color: #f6f6f6,
  // $sidenavbar-sub-title-bg-color: #f6f6f6,
  // $sidenavbar-sub-title-font-size: $font-size-large,
  // $sidenavbar-sub-title-radius: 0,
  // $sidenavbar-sub-title-border: 0,
  // $sidenavbar-sub-title-width: 100%,
  // $sidenavbar-sub-title-height: 40px,
  // $sidenavbar-sub-title-text-line-height: 40px,
  // $sidenavbar-sub-title-text-color: $title-color,
  // $sidenavbar-item-title-color: #333,
  // $sidenavbar-item-title-bg-color: $white,
  // $sidenavbar-item-height: 40px,
  // $sidenavbar-item-line-height: 40px,
  // $sidenavbar-item-font-size: 16px,

  // // Range
  // $range-tip-font-color: #333333,
  // $range-bg-color: rgba($primary-color, 0.5),
  // $range-bg-color-tick: #fa958c,
  // $range-bar-bg-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%),
  // $range-bar-btn-bg-color: $white,
  // $range-bar-btn-width: 24px,
  // $range-bar-btn-height: 24px,
  // $range-bar-btn-border: 1px solid $primary-color,

   // SearchBar
   '$searchbar-background': commonStyles.$white,
   '$searchbar-height':60,
   '$searchbar-paddingH':10,
   '$searchbar-background-inner-color':commonStyles['$help-color'],
   '$searchbar-inner-height':40,
   '$searchbar-lebal-marginright':10,
   '$searchbar-lebal-marginleft':10,
   '$searchbar-clear-marginright':10,
   '$searchbar-out-marginleft':10,
   '$searchbar-icon-marginH':10,
   '$searchbar-icon-marginright':10,
   '$searchbar-left-in-marginH':10,

  // // Cascader
  // $cascader-font-size: $font-size-2,
  // $cascader-line-height: 22px,
  // $cascader-tabs-item-padding: 0 10px,
  // $cascader-bar-padding: 24px 20px 17px,
  // $cascader-bar-font-size: $font-size-4,
  // $cascader-bar-line-height: 20px,
  // $cascader-bar-color: $title-color,
  // $cascader-item-padding: 10px 20px,
  // $cascader-item-color: $title-color,
  // $cascader-item-font-size: $font-size-2,
  // $cascader-item-active-color: $primary-color,

  // // Calendar
  // $calendar-primary-color: $primary-color,
  // $calendar-choose-color: rgba($primary-color, 0.09),
  // $calendar-choose-font-color: $primary-color,
  // $calendar-base-color: #333333,
  // $calendar-disable-color: #d1d0d0,
  // $calendar-base-font: $font-size-3,
  // $calendar-title-font: $font-size-4,
  // $calendar-title-font-weight: 500,
  // $calendar-sub-title-font: $font-size-2,
  // $calendar-text-font: $font-size-1,
  // $calendar-day-font: 16px,
  // $calendar-day-active-border-radius: 0px,
  // $calendar-day-width: 14.28%,
  // $calendar-day-height: 64px,
  // $calendar-day-font-weight: 500,
  // $calendar-day67-font-color: $primary-color,

  // Checkbox
  '$checkbox-label-color': '#1d1e1e',
  '$checkbox-label-disable-color': '#999',
  '$checkbox-icon-disable-color': '#d6d6d6',
  '$checkbox-label-margin-left': 15,
  '$checkbox-label-font-size': 14,
  '$checkbox-icon-font-size': 18,

 // InputNumber
 '$inputnumber-height': 25,
 '$inputnumber-bg-color':commonStyles['gray4'],
 '$inputnumber-paddingH':20,
 '$inputnumber-radius':3,
 '$inputnumber-icon-marginH':10,

  // // Input
  // $input-border-bottom: #eaf0fb,
  // $input-disabled-color: #c8c9cc,
  // $input-required-color: $required-color,
  // $input-font-size: $font-size-2,

  // Radio
  '$radio-label-font-color': '#1d1e1e',
  '$radio-label-font-active-color': commonStyles['$primary-color'],
  '$radio-label-disable-color': '#999',
  '$radio-icon-disable-color': '#d6d6d6',
  '$radio-button-check-background-color': '#f6f7f9',
  '$radio-button-uncheck-background-color': 'rgba(250,44,25,0.05)',
  '$radio-label-button-border-color': commonStyles['$primary-color'],
  '$radio-label-margin-left': 15,
  '$radio-button-border-radius': 15,
  '$radio-button-margin': 10,
  '$radio-label-font-size': 14,
  '$radio-button-font-size': 12,
  '$radio-button-padding-top-bottom': 5,
  '$radio-button-padding-left-right': 18,
  '$radio-icon-font-size': 18,
  '$radio-button-border-width': 1,

  // // Rate
  // $rate-icon-color: $primary-color,
  // $rate-icon-void-color: $disable-color,

  // // Picker
  // $picker-cancel-color: #808080,
  // $picker-ok-color: $primary-color,
  // $picker-bar-cancel-font-size: 14px,
  // $picker-bar-ok-font-size: 14px,
  // $picker-bar-button-padding: 0 15px,
  // $picker-bar-title-font-size: 16px,
  // $picker-bar-title-color: $title-color,
  // $picker-bar-title-font-weight: normal,
  // $picker-item-height: 36px,
  // $picker-item-text-color: $title-color,
  // $picker-item-active-text-color: inherit,
  // $picker-item-text-font-size: 14px,
  // $picker-item-active-line-border: 1px solid #d8d8d8,
  // $picker-columns-item-color: $title-color,

  // // ShortPassword
  // $shortpassword-background-color: rgba(245, 245, 245, 1),
  // $shortpassword-border-color: #ddd,
  // $shortpassword-error: $primary-color,
  // $shortpassword-forget: rgba(128, 128, 128, 1),

  // // TextArea
  // $textarea-font: $font-size-2,
  // $textarea-height: 100px,
  // $textarea-limit-color: $text-color,
  // $textarea-text-color: $title-color,
  // $textarea-disabled-color: $disable-color,

  // // Uploader
  // $uploader-picture-width: 100px,
  // $uploader-picture-height: 100px,
  // $uploader-background: #f7f8fa,

  // // NumberKeyboard
  // $numberkeyboard-width: 100%,
  // $numberkeyboard-padding: 0 0 22px 0,
  // $numberkeyboard-background-color: #f2f3f5,
  // $numberkeyboard-header-height: 34px,
  // $numberkeyboard-header-padding: 6px 0 0 0,
  // $numberkeyboard-header-color: #646566,
  // $numberkeyboard-header-font-size: 16px,
  // $numberkeyboard-header-close-padding: 0 16px,
  // $numberkeyboard-header-close-color: #576b95,
  // $numberkeyboard-header-close-font-size: 14px,
  // $numberkeyboard-header-close-background-color: transparent,
  // $numberkeyboard-key-background-color: #fff,
  // $numberkeyboard-key-active-background-color: #ebedf0,
  // $numberkeyboard-key-height: 48px,
  // $numberkeyboard-key-line-height: 1.5,
  // $numberkeyboard-key-border-radius: 8px,
  // $numberkeyboard-key-font-size: 28px,
  // $numberkeyboard-key-font-size-color: #333,
  // $numberkeyboard-key-finish-font-size: 16px,
  // $numberkeyboard-key-finish-font-size-color: #fff,
  // $numberkeyboard-key-finish-background-color: #1989fa,
  // $numberkeyboard-key-activeFinsh-background-color: #0570db,

  // // Form
  // $form-item-error-line-color: $required-color,
  // $form-item-required-color: $required-color,
  // $form-item-error-message-color: $required-color,
  // $form-item-label-font-size: 14px,
  // $form-item-label-width: 90px,
  // $form-item-label-margin-right: 10px,
  // $form-item-label-text-align: left,
  // $form-item-required-margin-right: 4px,
  // $form-item-body-font-size: 14px,
  // $form-item-body-slots-text-align: left,
  // $form-item-body-input-text-align: left,
  // $form-item-tip-font-size: 10px,
  // $form-item-tip-text-align: left,

  // ActionSheet
  '$actionsheet-desc-color': commonStyles['text-color'],
  '$actionsheet-desc-size': 15,
  '$actionsheet-items-bg':commonStyles.$white,
  '$actionsheet-items-paddding':15,
  '$actionsheet-items-border-radius':12,
  '$actionsheet-items-border-top_color':'#f2f2f2',
  '$actionsheet-items-border-top_width':0.5,
  '$actionsheet-items-sub-text-color':commonStyles['$text-color'],

  // BackTop
  '$backtop-width': 45,
  '$backtop-height': 45,
  '$backtop-radius':23,
  '$backtop-border-color':commonStyles.$gray3,
  '$backtop-bg-color':commonStyles.$white,
  '$backtop-text-size':12,
  '$backtop-text-color':'#2c2c2c',
  '$backtop-text-maginTop':2,

  // // Dialog
  // $dialog-width: 296px,

  // // InfiniteLoading
  // $infiniteloading-bottom-color: #c8c8c8,

  // // Notify
  // $notify-text-color: $white,
  // $notify-padding: 12px 0,
  // $notify-font-size: 14px,
  // $notify-height: 44px,
  // $notify-line-height: auto,
  // $notify-base-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%),
  // $notify-primary-background-color: linear-gradient(
  //   315deg,
  //   rgba(73, 143, 242, 1) 0%,
  //   rgba(73, 101, 242, 1) 100%
  // ),
  // $notify-success-background-color: linear-gradient(
  //   135deg,
  //   rgba(38, 191, 38, 1) 0%,
  //   rgba(39, 197, 48, 1) 45%,
  //   rgba(40, 207, 63, 1) 83%,
  //   rgba(41, 212, 70, 1) 100%
  // ),
  // $notify-danger-background-color: rgba(250, 50, 25, 1),
  // $notify-warning-background-color: linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%),

  // Switch
  '$switch-close-bg-color': '#ebebeb',
  '$switch-close--cline-bg-color': '#f0f0f0',
  '$switch-width': 36,
  '$switch-height': 21,
  '$switch-line-height': 21,
  '$switch-border-radius': 21,
  '$switch-inside-width': 13,
  '$switch-inside-height': 13,

  // // Toast
  '$toast-title-font-size': 16,
  '$toast-text-font-size': 12,
  '$toast-font-color': commonStyles.$white,
  '$toast-inner-padding-top': 24,
  '$toast-inner-padding-bottom': 24,
  '$toast-inner-padding-left': 30,
  '$toast-inner-padding-right': 30,
  '$toast-inner-bg-color': 'rgba(0, 0, 0, 0.8)',
  '$toast-inner-border-radius': 12,
  '$toast-cover-bg-color': 'rgba(0, 0, 0, 0)',

  // // Avatar
  '$avatar-square-border-radius': 5,
  '$avatar-large-width': 60,
  '$avatar-large-height': 60,
  '$avatar-small-width': 32,
  '$avatar-small-height': 32,
  '$avatar-normal-width': 40,
  '$avatar-normal-height': 40,
  '$avatar-round-large-border-radius': 60,
  '$avatar-round-small-border-radius': 32,
  '$avatar-round-normal-border-radius': 40,
  '$avatar-icon-large-size': 60,
  '$avatar-icon-normal-size': 40,
  '$avatar-icon-small-size': 32,

  // // List
  // $list-item-margin: 0 0 10px 0,

  // // Progress
  // $progress-inner-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%),
  // $progress-insidetext-background: $progress-inner-background-color,
  // $progress-outer-background-color: #f3f3f3,
  // $progress-outer-border-radius: 12px,
  // $progress-insidetext-border-radius: 5px,
  // $progress-insidetext-padding: 3px 5px 3px 6px,
  // $progress-insidetext-top: -42%,
  // $progress-small-height: 5px,
  // $progress-small-text-font-size: 7px,
  // $progress-small-text-line-height: 10px,
  // $progress-small-text-padding: 2px 4px,
  // $progress-small-text-top: -100%,
  // $progress-base-height: 10px,
  // $progress-base-text-font-size: 9px,
  // $progress-base-text-line-height: 13px,
  // $progress-base-text-padding: $progress-insidetext-padding,
  // $progress-base-text-top: $progress-insidetext-top,
  // $progress-large-height: 15px,
  // $progress-large-text-font-size: 13px,
  // $progress-large-text-line-height: 18px,
  // $progress-large-text-padding: $progress-insidetext-padding,
  // $progress-large-text-top: $progress-insidetext-top,

  // // CircleProgress
  // $circleprogress-primary-color: $primary-color,
  // $circleprogress-path-color: #e5e9f2,
  // $circleprogress-text-color: #000000,
  // $circleprogress-text-size: $font-size-3,

  // // NoticeBar
  '$noticebar-background': 'rgba(251, 248, 220, 1)', // #FBF8DC
  '$noticebar-color': '#d9500b',
  '$noticebar-wrapable-padding-top-bottom': 12,
  '$noticebar-wrapable-padding-left-right': 28,
  '$noticebar-font-size': 28,
  '$noticebar-height': 40,
  '$noticebar-line-height': 24,
  '$noticebar-left-icon-width': 16,
  '$noticebar-left-icon-wrapable-size': 40,
  '$noticebar-left-icon-wrapable-padding': 32,
  '$noticebar-right-icon-width': 16,
  '$noticebar-right-icon-wrapable-size': 40,
  '$noticebar-right-icon-wrapable-padding': 32,

  // // Empty
  // $empty-padding: 32px 0,
  // $empty-image-size: 170px,
  // $empty-description-margin-top: 4px,
  // $empty-description-color: #666666,
  // $empty-description-font-size: 14px,
  // $empty-description-line-height: 20px,
  // $empty-description-padding: 0 40px,

  // Steps
  '$step_h_left_width':30,
  '$step_h_line_height':1,
  '$step_h_dot_width':30,
  '$step_h_dot_height':30,
  '$step_h_dot_radius':15,
  '$step_text_fontsize':15,
  '$step_v_container_paddingLeft':20,
  '$step_v_text_fontsize':15,
  '$step_v_text_marginTop':10,
  '$step_v_text_marginRight':10,
  '$step_h_content_container':10,

  // // Swiper
  '$swiper-pagination-vertical-item-width': 6,
  '$swiper-pagination-vertical-item-height': 6,
  '$swiper-pagination-item-active-border-radius': 3,
  '$swiper-pagination-vertical-item-active-height': 18,
  '$swiper-pagination-item-width': 8,
  '$swiper-pagination-item-height': 3,
  '$swiper-pagination-item-margin-right': 7,
  '$swiper-pagination-item-border-radius': 2,
  '$swiper-pagination-active-background-color': '#d3d3d3',
  '$swiper-pagination-space-margin-left': 2.5,
  '$swiper-pagination-space-margin-right': 2.5,
  '$swiper-pagination-space-margin-top': 3,
  '$swiper-pagination-space-margin-bottom': 3,
  '$swiper-pagination-cross-absolute-left': 0,
  '$swiper-pagination-cross-absolute-right': 0,
  '$swiper-pagination-cross-absolute-bottom': 10,
  '$swiper-pagination-vertical-absolute-left': 10,

  // // Price
  // $price-symbol-big-size: 18px,
  // $price-big-size: 24px,
  // $price-decimal-big-size: 18px,
  // $price-symbol-medium-size: 14px,
  // $price-medium-size: 16px,
  // $price-decimal-medium-size: 14px,
  // $price-symbol-small-size: 10px,
  // $price-small-size: 12px,
  // $price-decimal-small-size: 10px,

  // // CountDown
  // $countdown-display: flex,
  // $countdown-color: inherit,
  // $countdown-font-size: initial,

  // // Badge
  // $badge-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%),
  // $badge-color: #fff,
  // $badge-font-size: $font-size-1,
  // $badge-border-radius: 14px,
  // $badge-padding: 0 5px,
  // $badge-content-transform: translateY(-50%) translateX(100%),
  // $badge-z-index: 1,
  // $badge-dot-width: 7px,
  // $badge-dot-height: 7px,
  // $badge-dot-border-radius: 7px,
  // $badge-dot-padding: 0px,

  // Tag
  '$tag-font-size': 12,
  '$tag-default-border-radius': 4,
  '$tag-round-border-radius': 8,
  '$tag-default-background-color': commonStyles['$black'],
  '$tag-default-plain-color': '#fa2400',
  '$tag-plain-border-color': '#FA2400',
  '$tag-primary-background-color': '#3460fa',
  '$tag-primary-plain-color': '#3460FA',
  '$tag-success-background-color': '#4fc08d',
  '$tag-success-plain-color': '#4fc08d',
  '$tag-danger-background-color-plain': '#df3526',
  '$tag-warning-background-color': '#f3812e',
  '$tag-warning-plain-color': '#F3812E',
  '$tag-default-color': commonStyles['$white'],
  '$tag-border-width': 1,
  '$tag-plain-background-color': commonStyles['$white'],

  // // Popover
  // $popover-white-background-color: rgba(255, 255, 255, 1),
  // $popover-dark-background-color: rgba(75, 76, 77, 1),
  // $popover-border-bottom-color: rgba(229, 229, 229, 1),
  // $popover-primary-text-color: rgba(51, 51, 51, 1),
  // $popover-disable-color: rgba(154, 155, 157, 1),

  // // Collapse
  // $collapse-item-padding: 13px 36px 13px 26px,
  // $collapse-item-color: #666666,
  // $collapse-item-disabled-color: #c8c9cc,
  // $collapse-item-icon-color: #666666,
  // $collapse-item-font-size: $font-size-2,
  // $collapse-item-line-height: 24px,
  // $collapse-item-sub-title-color: #666666,
  // $collapse-wrapper-content-padding: 12px 26px,
  // $collapse-wrapper-empty-content-padding: 0 26px,
  // $collapse-wrapper-content-color: #666666,
  // $collapse-wrapper-content-font-size: $font-size-2,
  // $collapse-wrapper-content-line-height: 1.5,
  // $collapse-wrapper-content-background-color: $white,

  // // Table
  // $table-border-color: #ececec,
  // $table-cols-padding: 10px,
  // $table-tr-even-bg-color: #f3f3f3,
  // $table-tr-odd-bg-color: $white,

  // // Ellipsis
  // $ellipsis-expand-collapse-color: #3460fa,

  // // WaterMark
  // $watermark-z-index: 2000,

  // // Address
  // $address-region-tab-line: linear-gradient(90deg, $primary-color 0%, rgba($primary-color, 0.15) 100%),
  // $address-icon-color: $primary-color,

 // TimeSelect
 '$timeselect_bg_color':commonStyles.$white,
 '$timeselect_title_height':50,
 '$timepannel_container_height':40,
 '$timepannel_container_active':commonStyles.$white,
 '$timepannel_container_no_active':commonStyles.$gray5,
 '$timepannel_container_active_text_fontsize':14,
 '$timepannel_container_active_text_color':commonStyles.$black,
 '$timepannel_container_no_active_text_fontsize':14,
 '$timepannel_container_no_active_text_color':'grey',
 '$timedetail_active_height':40,
 '$timedetail_active_border_width':0.4,
 '$timedetail_active_border_color':commonStyles["$primary-color"],
 '$timedetail_active_border_radius':4 ,
 '$timedetail_active_bg_color':'#ffe0e0',
 '$timedetail_active_bg_marginR':10,
 '$timedetail_active_bg_marginB':10,
 '$timedetail_no_active_bg_color':'#f4f4f4',
 '$timedetail_active_text_fontsize':14,
 '$timedetail_active_text_color':commonStyles["$primary-color"],
 '$timedetail_no_active_text_fontsize':14,
 '$timedetail_no_active_text_color':'#000',
 '$timedetail_container_paddingL':10,

  // // Sku
  // $sku-item-border: 1px solid $primary-color,
  // $sku-item-disable-line: line-through,
  // $sku-opetate-bg-default: linear-gradient(90deg, $primary-color, $primary-color-end 100%),
  // $sku-item-active-bg: rgba($primary-color, 0.15),
  // $sku-opetate-bg-buy: linear-gradient(
  //   135deg,
  //   rgba(255, 186, 13, 1) 0%,
  //   rgba(255, 195, 13, 1) 69%,
  //   rgba(255, 207, 13, 1) 100%
  // ),

  // // Card
  // $card-font-size-0: $font-size-0,
  // $card-font-size-1: $font-size-1,
  // $card-font-size-2: $font-size-2,
  // $card-font-size-3: $font-size-3,

  // // Ecard
  // $ecard-bg-color: #f0f2f5,

  // // AddressList
  // $addresslist-bg: #fff,
  // $addresslist-border: #f0f0f0,
  // $addresslist-font-color: #333333,
  // $addresslist-font-size: 16px,
  // $addresslist-mask-bg: rgba(0, 0, 0, 0.4),
  // $addresslist-addr-font-color: #666666,
  // $addresslist-addr-font-size: 12px,
  // $addresslist-set-bg: #f5a623,
  // $addresslist-del-bg: #e1251b,
  // $addresslist-contnts-contact-default: $primary-color,
  // $addresslist-contnts-contact-color: $white,

  // // Category
  // $category-bg-color: rgba(255, 255, 255, 1),
  // $category-list-left-bg-color: rgba(246, 247, 249, 1),
  // $category-list-item-color: $title-color,
  // $category-list-item-checked-color: rgba(255, 255, 255, 1),
  // $category-list-item-checked-img-bg-color: $primary-color,
  // $category-pane-gray-color: #666,
  // $category-pane-border-color: rgb(153, 153, 153),
  // $category-pane-title-color: rgba(51, 51, 51, 1),

  // // Comment
  // $comment-header-user-name-color: rgba(51, 51, 51, 1),
  // $comment-header-time-color: rgba(153, 153, 153, 1),
  // $comment-bottom-label-color: rgba(153, 153, 153, 1),
  // $comment-shop-color: $primary-color,

  // // Image
  '$image-loading-background-color': '#f7f8fa',
  '$image-error-background-color': '#f7f8fa',
  // // TrendArrow
  '$trendarrow-font-size': 14,
  '$trendarrow-before-icon-margin': 4,
  // skeleton（✅）
  '$skeleton-content-block-background-color': '#efefef',
  '$skeleton-content-block-margin-bottom': 10,
  '$skeleton-content-block-border-radius': 10,
  '$skeleton-content-line-title-background-color': '#efefef',
  '$skeleton-content-line-height': 15,
  '$skeleton-content-margin-bottom': 10,
  '$skeleton-content-avatar-background-color': '#efefef',
  '$skeleton-content-avatar-margin-right': 20,
};
export default { ...commonStyles, ...themeDefault };
