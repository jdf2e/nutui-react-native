
import {
    findNodeHandle,
    UIManager
} from 'react-native';

// export const getRectByTaro = async(element: any) => {
//     const res = await element.getBoundingClientRect();
//     return res;
// };

const getRect = async(ref) => {
    const handle = findNodeHandle(ref) || -1;
    const res = await new Promise((resolve) => {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            resolve({
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
        });
    });

    return res;
};

export default getRect;
