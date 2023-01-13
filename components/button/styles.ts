import { StyleSheet } from 'react-native';
import pt from '../utils/pt';
import px from '../utils/px';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: pt(48), // 默认size normal的尺寸
      borderWidth: px(1),
    },
    largeRaw: {
      height: pt(96),
      width: pt(678),
      borderRadius: pt(50),
    },
    normalRaw: {
      width: pt(190),
      height: pt(76),
    },
    smallRaw: {
      width: pt(144),
      height: pt(56),
      borderRadius: pt(48),
    },
    // type 类型相关
    defaultRaw: {
      backgroundColor: '#fff',
      borderColor: '#ccc',
    },
    primaryRaw: {
      borderWidth: 0,
    },
    infoRaw: {
      borderWidth: 0,
    },
    warningRaw: {
      borderWidth: 0,
    },
    successRaw: {
      borderWidth: 0,
    },
    dangerRaw: {
      backgroundColor: '#f00',
      borderWidth: 0,
    },
    disabledRaw: {
      opacity: 0.6,
    },
    largeRawText: {
      fontSize: pt(32),
      fontWeight: '600',
      color: '#fff',
    },
    normalRawText: {
      fontSize: pt(28),
      fontWeight: 'normal',
      color: '#fff',
    },
    smallRawText: {
      fontSize: pt(24),
      fontWeight: 'normal',
      color: '#fff',
    },
    primaryRawText: {
      fontWeight: 'normal',
      color: '#fff',
    },
    defaultRawText: {
      fontWeight: 'normal',
      color: '#666',
    },
    infoRawText: {
      fontWeight: 'normal',
      color: '#fff',
    },
    successRawText: {
      fontWeight: 'normal',
      color: '#fff',
    },
    warningRawText: {
      fontWeight: 'normal',
      color: '#fff',
    },
    dangerRawText: {
      fontWeight: 'normal',
      color: '#fff',
    },
    plaintrueprimaryRawText: {
      color: '#FA2C19',
    },
    plaintrueinfoRawText: {
      color: '#496AF2',
    },
    plaintruedangerRawText: {
      color: '#f00',
    },
    plaintruewarningRawText: {
      color: '#FF9E0D',
    },
    plaintruesuccessRawText: {
      color: '#26BF26',
    },
    disabledRawText: {
      // opacity: 0.6
    },
    indicatorColor: {
      color: '#ffffff',
    },
    defaultIndicatorColor: {
      color: '#cccccc',
    },
    indicator: {
      marginRight: pt(20),
    },
    blockStyle: {
      width: pt(678),
    },
    // plain${plain}${type}IconColor
    plaintrueprimaryIconColor: {
      color: '#FA2C19',
    },
    plaintrueinfoIconColor: {
      color: '#498FF2',
    },
    plaintruedangerIconColor: {
      color: '#ff0000',
    },
    plaintruewarningIconColor: {
      color: '#FF9E0D',
    },
    plaintruesuccessIconColor: {
      color: '#26BF26',
    },
    plainHighlight: {
      backgroundColor: 'rgba(0,0,0, 0.2)',
    },
    primaryHighlight: {
      backgroundColor: '#FA2C19',
    },
    defaultHighlight: {
      // backgroundColor: 'rgba(255,255,255,0.9)'
      backgroundColor: 'rgba(0,0,0, 0.2)',
    },
    infoHighlight: {
      backgroundColor: 'rgba(73,101,242, 0.9)',
    },
    dangerHighlight: {
      backgroundColor: '#CC0000',
    },
    warningHighlight: {
      backgroundColor: '#FF9E0D',
    },
    successHighlight: {
      // backgroundColor: '#26BF26'
      backgroundColor: 'rgb(38,191,38)',
    },
  });
