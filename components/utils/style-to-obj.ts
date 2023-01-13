import {
    StyleSheet
} from 'react-native';

export default (style = {}) => {
    if (style instanceof Array) {
        return StyleSheet.flatten(style);
    }
    return style;
};
