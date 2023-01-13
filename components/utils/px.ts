import {
    PixelRatio
} from 'react-native';

const pr = PixelRatio.get() + '';
const dpr = parseInt(pr, 10) || 1;
const px = (num: number): number => num / dpr;
export default px;
