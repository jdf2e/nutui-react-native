import {
    Dimensions,
    Platform
} from 'react-native';
let { width, height } = Dimensions.get('window');

if (Platform.OS === 'android') {
    if (width > height) {
        width = Dimensions.get('window').height;
        height = Dimensions.get('window').width;
    };
};

const pt = (num: number): number => (num * width) / (375 * 2);
export default pt;
