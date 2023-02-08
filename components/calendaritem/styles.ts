import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) =>
  StyleSheet.create({
    calendar: {
      flex: 1,
      backgroundColor: theme['$white'],
      height: '100%',
    },

    // 头部导航
    calendarHeader: {
      alignItems: 'center',
      paddingTop: px(1),
      backgroundColor: theme['$white'],
    },
    calendarTitle: {
      fontSize: theme['$calendar-title-font'],
      fontWeight: theme['$calendar-title-font-weight'],
      lineHeight: pt(88),
    },
    calendarTopSlot: {
      height: theme['$calendar-top-slot-height'],
    },
    calendarCurrMonth: {
      paddingVertical: pt(14),
      lineHeight: pt(44),
    },
    calendarWeeks: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: pt(72),
      borderBottomLeftRadius: pt(24),
      borderBottomRightRadius: pt(24),
    },
    calendarWeekItem: {
      fontSize: pt(32),
      color: theme['$gray1'],
    },
    calendarWeekday: {
        color: theme['$calendar-day67-font-color'],
    },
    // 月份
    calendarContent: {
      flex: 1,
      width: '100%',
    },
    calendarMonthsPanel: {
      width: '100%',
      height: 'auto',
    },
    calendarMonth: {
    },
    calendarMonthTitle: {
      textAlign: 'center',
      height: pt(46),
      lineHeight: pt(46),
      marginVertical: pt(16),
      color: theme['$gray1'],
      fontSize: theme['$calendar-base-font'],
    },
    calendarMonthItem: {
        flexDirection:'row',
        flexWrap: 'wrap',
    },

    calendarMonthDay: {
      width: theme['$calendar-day-width'],
      height: theme['$calendar-day-height'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendarMonthConDay: {
        color: theme['$calendar-day67-font-color'],
    },
    calendarMonthDay__disabled: {
       
    },
    calendarMonthDay__active: {
      backgroundColor: theme['$calendar-primary-color'],
      borderRadius: theme['$calendar-day-active-border-radius'],
    },
    calendarMonthDay__choose: {
      backgroundColor: theme['$calendar-choose-color']
    },
    calendarDay: {
      color: theme['$gray1'],
      paddingVertical: pt(4),
      fontSize: theme['$calendar-day-font'],
      fontWeight: theme['$calendar-day-font-weight'],
    },
    calendarDay__disabled: {
        color: theme['$calendar-disable-color']
    },
    calendarDay__active: {
        color: theme['$white']
    },
    calendarDay__choose: {
        color: theme['$calendar-choose-font-color']
    },
    calendarCurrTips: {
      position: 'absolute',
      width: '100%',
    },
    calendarCurrTips__choose: {
        color: theme['$calendar-choose-font-color']
    },
    calendarCurrTips__active: {
        opacity: 0
    },
    calendarCurrTips__disabled: {
        color: theme['$calendar-disable-color']
    },
    
    calendarCurrTipsTop: {
      top: pt(12),
    },
    calendarCurrTipsBottom: {
      bottom: pt(12),
    },
    calendarCurrTipCurr: {
      position: 'absolute',
      bottom: pt(12),
      width: '100%',
      fontSize: pt(24),
      lineHeight: pt(28),
    },
    calendarCurrTipCurr__active: {
        opacity: 0
    },
    calendarDayTip: {
      position: 'absolute',
      bottom: pt(12),
      width: '100%',
      textAlign: 'center',
      fontSize: pt(24),
      lineHeight: pt(28),
      color: theme['$calendar-primary-color'],
    },
    calendarDayTip__active: {
        color: theme['$white']
    },
    // 底部导航
    calendarFooter: {
      height: pt(124),
      width: '100%',
      paddingHorizontal: pt(36),
      paddingVertical: pt(20),
      backgroundColor: theme['$white'],
    },
    calendarConfirmBtn: {
      justifyContent: 'center',
      height: pt(88),
      width: '100%',
      borderRadius: pt(44),
      backgroundColor: theme['$button-danger-border-color'],
      lineHeight: pt(88),
    },
    calendarConfirmBtnText: {
      textAlign: 'center',
      color: theme['$white'],
      fontSize: pt(32),
    },
  });
