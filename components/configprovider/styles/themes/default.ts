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
  '$line-height-base': 1.5
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
  '$cell-line-height': 20,
  '$cell-after-right': 16,
  '$cell-after-border-bottom': '1px solid #f5f6f7', // todo
  '$cell-default-icon-margin': '0 4px 0 0px', // todo
  '$cell-large-title-font': commonStyles['$font-size-large'],
  '$cell-large-title-desc-font': commonStyles['$font-size-base'],
  '$cell-large-padding': '15px 16px', // todo
  '$cell-background': commonStyles['$white'],
  '$cell-group-title-padding': '0 10px', // todo
  '$cell-group-title-color': '#909ca4',
  '$cell-group-title-font-size': commonStyles['$font-size-2'],
  '$cell-group-title-line-height': 20,
  '$cell-group-desc-padding': '0 10px', // todo
  '$cell-group-desc-color': '#909ca4',
  '$cell-group-desc-font-size': commonStyles['$font-size-1'],
  '$cell-group-desc-line-height': 16,
  '$cell-group-background-color': commonStyles['$white'],

  // Icon
  '$icon-height': 20,
  '$icon-width': 20,
  '$icon-line-height': 20,

  // OverLay
  '$overlay-bg-color': 'rgba(0, 0, 0, 0.7)',

  // Popup
  '$popup-close-icon-margin': 16,
  '$popup-border-radius': 20,

  // Divider
  '$divider-margin': '16px 0', // todo
  '$divider-text-font-size': commonStyles['$font-size-2'],
  '$divider-text-color': '#909ca4',
  '$divider-line-height': 2,
  '$divider-before-margin-right': 16,
  '$divider-after-margin-left': 16,
  '$divider-vertical-height': 12,
  '$divider-vertical-top': 2,
  '$divider-vertical-border-left': 'rgba(0, 0, 0, 0.06)',
  '$divider-vertical-margin': '0 8px', // todo

  // Grid
  '$grid-border-color': '#f5f6f7',
  '$grid-item-content-padding': '16px 8px', // todo
  '$grid-item-content-bg-color': commonStyles['$white'],
  '$grid-item-text-margin': 8,
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
  '$fixednav-item-active-color': commonStyles['$primary-color']

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

  // // Pagination
  // $pagination-color: $primary-color,
  // $pagination-font-size: $font-size-2,
  // $pagination-item-border-color: #e4e7eb,
  // $pagination-active-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%),
  // $pagination-disable-color: rgba(116, 116, 116, 0.31),
  // $pagination-disable-background-color: #f7f8fa,
  // $pagination-item-border-width: 1px,
  // $pagination-item-border-radius: 2px,
  // $pagination-prev-next-padding: 0 11px,

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

  // // SearchBar
  // $searchbar-background: $white,
  // $searchbar-right-out-color: $black,
  // $searchbar-padding: 9px 16px,
  // $searchbar-width: 100%,
  // $searchbar-input-background: #f7f7f7,
  // $searchbar-input-padding: 0 0 0 13px,
  // $searchbar-input-height: 32px,
  // $searchbar-input-width: 100%,
  // $searchbar-input-border-radius: 16px,
  // $searchbar-input-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04),

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

  // // Checkbox
  // $checkbox-label-color: #1d1e1e,
  // $checkbox-label-disable-color: #999,
  // $checkbox-icon-disable-color: #d6d6d6,
  // $checkbox-label-margin-left: 15px,
  // $checkbox-label-font-size: 14px,
  // $checkbox-icon-font-size: 18px,

  // // InputNumber
  // $inputnumber-icon-color: $title-color,
  // $inputnumber-icon-void-color: $disable-color,
  // $inputnumber-icon-size: 20px,
  // $inputnumber-input-font-size: 12px,
  // $inputnumber-input-font-color: $title-color,
  // $inputnumber-input-background-color: $help-color,
  // $inputnumber-input-border-radius: 4px,
  // $inputnumber-input-width: 40px,
  // $inputnumber-input-margin: 0 6px,
  // $inputnumber-input-border: 0,

  // // Input
  // $input-border-bottom: #eaf0fb,
  // $input-disabled-color: #c8c9cc,
  // $input-required-color: $required-color,
  // $input-font-size: $font-size-2,

  // // Radio
  // $radio-label-font-color: #1d1e1e,
  // $radio-label-font-active-color: $primary-color,
  // $radio-label-disable-color: #999,
  // $radio-icon-disable-color: #d6d6d6,
  // $radio-label-button-border-color: $primary-color,
  // $radio-label-button-background: rgba($primary-color, 0.05),
  // $radio-label-margin-left: 15px,
  // $radio-button-border-radius: 15px,
  // $radio-label-font-size: 14px,
  // $radio-button-font-size: 12px,
  // $radio-button-padding: 5px 18px,
  // $radio-icon-font-size: 18px,

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

  // // ActionSheet
  // $actionsheet-light-color: #f6f6f6,
  // $actionsheet-item-border-bottom: none,
  // $actionsheet-item-font-size: $font-size-2,
  // $actionsheet-item-subdesc-font-size: $font-size-1,
  // $actionsheet-item-cancel-border-top: 1px solid $actionsheet-light-color,
  // $actionsheet-item-line-height: 24px,
  // $actionsheet-item-font-color: $title-color,

  // // BackTop
  // $backtop-border-color: #e0e0e0,

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

  // // Switch
  // $switch-close-bg-color: #ebebeb,
  // $switch-close--cline-bg-color: #f0f0f0,
  // $switch-width: 36px,
  // $switch-height: 21px,
  // $switch-line-height: 21px,
  // $switch-border-radius: 21px,
  // $switch-inside-width: 13px,
  // $switch-inside-height: 13px,
  // $switch-inside-open-transform: translateX(146%),
  // $switch-inside-close-transform: translateX(30%),

  // // Toast
  // $toast-title-font-size: 16px,
  // $toast-text-font-size: 14px,
  // $toast-font-color: $white,
  // $toast-inner-padding: 24px 30px,
  // $toast-inner-bg-color: rgba(0, 0, 0, 0.8),
  // $toast-inner-border-radius: 12px,
  // $toast-cover-bg-color: rgba(0, 0, 0, 0),

  // // Avatar
  // $avatar-square: 5px,
  // $avatar-large-width: 60px,
  // $avatar-large-height: 60px,
  // $avatar-small-width: 32px,
  // $avatar-small-height: 32px,
  // $avatar-normal-width: 40px,
  // $avatar-normal-height: 40px,

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
  // $noticebar-background: rgba(251, 248, 220, 1),
  // $noticebar-color: #d9500b,
  // $noticebar-font-size: 14px,
  // $noticebar-height: 40px,
  // $noticebar-line-height: 24px,
  // $noticebar-left-icon-width: 16px,
  // $noticebar-right-icon-width: 16px,
  // $noticebar-box-padding: 0 16px,
  // $noticebar-wrapable-padding: 16px,
  // $noticebar-lefticon-margin: 0px 10px,
  // $noticebar-righticon-margin: 0px 10px,

  // // Empty
  // $empty-padding: 32px 0,
  // $empty-image-size: 170px,
  // $empty-description-margin-top: 4px,
  // $empty-description-color: #666666,
  // $empty-description-font-size: 14px,
  // $empty-description-line-height: 20px,
  // $empty-description-padding: 0 40px,

  // // Steps
  // $steps-base-icon-width: 25px,
  // $steps-base-icon-height: 25px,
  // $steps-base-icon-line-height: 25px,
  // $steps-base-icon-font-size: 13px,
  // $steps-base-title-font-size: 14px,
  // $steps-base-line-color: #909ca4,
  // $steps-base-title-color: #909ca4,
  // $steps-base-title-margin-bottom: 10px,
  // $steps-base-content-font-size: 14px,
  // $steps-base-content-color: #666,
  // $steps-wait-icon-bg-color: #959fb1,
  // $steps-wait-icon-color: $white,
  // $steps-wait-head-color: #909ca4,
  // $steps-wait-head-border-color: #909ca4,
  // $steps-wait-content-color: #909ca4,
  // $steps-finish-head-color: $primary-color,
  // $steps-finish-head-border-color: $primary-color,
  // $steps-finish-title-color: $primary-color,
  // $steps-finish-line-background: $primary-color,
  // $steps-finish-icon-text-color: $white,
  // $steps-process-head-color: $white,
  // $steps-process-head-border-color: $primary-color,
  // $steps-process-title-color: $primary-color,
  // $steps-process-icon-text-color: $primary-color,

  // // Swiper
  // $swiper-pagination-item-width: 8px,
  // $swiper-pagination-item-height: 3px,
  // $swiper-pagination-item-margin-right: 7px,
  // $swiper-pagination-item-border-radius: 2px,

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

  // // Tag
  // $tag-font-size: 12px,
  // $tag-default-border-radius: 4px,
  // $tag-round-border-radius: 8px,
  // $tag-default-background-color: #000000,
  // $tag-primary-background-color: #3460fa,
  // $tag-success-background-color: #4fc08d,
  // $tag-danger-background-color: linear-gradient(
  //   135deg,
  //   rgba(242, 20, 12, 1) 0%,
  //   rgba(232, 34, 14, 1) 69.83950099728881%,
  //   rgba(242, 77, 12, 1) 100%
  // ),
  // $tag-danger-background-color-plain: #df3526,
  // $tag-warning-background-color: #f3812e,
  // $tag-default-color: #ffffff,
  // $tag-border-width: 1px,
  // $tag-plain-background-color: #fff,

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

  // // TimeSelect
  // $timeselect-title-font-size: $font-size-2,
  // $timeselect-title-color: $title-color,
  // $timeselect-title-width: 100%,
  // $timeselect-title-height: 50px,
  // $timeselect-title-line-height: 50px,
  // $timeselect-pannel-bg-color: #f6f7f9,
  // $timeselect-timepannel-text-color: $title-color2,
  // $timeselect-timepannel-font-size: $font-size-2,
  // $timeselect-timepannel-cur-bg-color: $white,
  // $timeselect-timepannel-cur-text-color: #333333,
  // $timeselect-timepannel-width: 140px,
  // $timeselect-timepannel-height: 40px,
  // $timeselect-timepannel-padding: 15px,
  // $timeselect-timedetail-padding: 0 5px 50px 13px,
  // $timeselect-timedetail-item-width: 100px,
  // $timeselect-timedetail-item-height: 50px,
  // $timeselect-timedetail-item-line-height: 50px,
  // $timeselect-timedetail-item-bg-color: #f6f7f9,
  // $timeselect-timedetail-item-border-radius: 5px,
  // $timeselect-timedetail-item-text-color: #333333,
  // $timeselect-timedetail-item-text-font-size: $font-size-2,
  // $timeselect-timedetail-item-cur-bg-color: rgba($primary-color, 0.15),
  // $timeselect-timedetail-item-cur-border: $primary-color,
  // $timeselect-timedetail-item-cur-text-color: $primary-color,
  // $timeselect-timedetail-time-text-color: #999,
  // $timeselect-timedetail-time-font-size: $font-size-1,

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
};
export default { ...commonStyles, ...themeDefault };
