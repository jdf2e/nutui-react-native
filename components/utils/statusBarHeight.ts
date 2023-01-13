// 状态栏高度
import {
    Platform,
    StatusBar,
    NativeModules
} from 'react-native';

// 适配jdreact
const JDReactNativeAdaptXModule = NativeModules.JDReactNativeAdaptXModule;

let statusBarHeight = 0;

if (Platform.OS === 'ios') {
    if (!!JDReactNativeAdaptXModule) {
        statusBarHeight = JDReactNativeAdaptXModule.statusBarHeight
    }

    if(!statusBarHeight) {
        statusBarHeight = 60
    }
} else if (Platform.OS === 'android' && Platform.Version >= 19) {
    statusBarHeight = StatusBar.currentHeight;
}

export default statusBarHeight;
