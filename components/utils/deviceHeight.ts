import {
    Dimensions,
    NativeModules,
    Platform
} from 'react-native';

// 适配 jdreact
const JDReactNativeSystemModule = NativeModules.JDReactNativeSystemModule;
 
// 安卓上不准，ios是正常的
let { height } = Dimensions.get('window');

if (Platform.OS === 'android' && JDReactNativeSystemModule && JDReactNativeSystemModule.getDimensions) {
    // 由于Dimensions依赖didUpdateDimensions事件来更新宽高，该事件为异步，导致屏幕尺寸变化后，一定概率无法在加载jsbundle前更新缓存宽高，所以改为native同步获取宽高
    let initDimens = JDReactNativeSystemModule.getDimensions();
    if (initDimens) {
      Dimensions.set(initDimens)
      height = Dimensions.get('window').height;
    }
}

export default height;