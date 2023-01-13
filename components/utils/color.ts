export const isLinearGradient = (color: string = ''):boolean => {
    if (color.includes('linear-gradient')) {
        return true;
    }
    return false;
};

export const getLinearParam = (color:string) => {
    const result = [];
    if (isLinearGradient(color)) {
        const leftIndex = color.indexOf('(');
        const rightIndex = color.indexOf(')');
        const params = color.substring(leftIndex + 1, rightIndex).split(',');
        if (isColor(params[0])) { // 第一个值是颜色
            // 给它一个默认的度数
            result.push(0);
            for (let i = 0; i < params.length; i++) {
                const items = params[i].split(/\s+/g);
                const perNum = 100 / params.length;
                let angle = 0;
                if (i === 0) { // 处理第一个值
                    if (items.length === 1) {
                        result.push([items[0], 0]);
                    } else {
                        const two = items[1].slice(0, -1);
                        result.push([items[0], +two]);
                    }
                } else if (i !== 0 && i !== params.length) {
                    if (items.length === 1) {
                        angle += perNum;
                        result.push([items[0], angle / 100]);
                    } else {
                        const two = items[1].slice(0, -1);
                        result.push([items[0], (+two) / 100]);
                    }
                } else if (i !== 0 && i === params.length) {
                    result.push([items[0], 1]);
                }
            }
        } else { // 第一个值deg
            result.push(toAngle(params[0]));
            for (let i = 1; i < params.length; i++) {
                const items = params[i].split(/\s+/g).filter((item) => !!item);
                const perNum = 100 / (params.length - 1);
                let angle = 0;
                if (i === 1) { // 处理第一个值
                    if (items.length === 1) {
                        result.push([items[0], 0]);
                    } else {
                        const two = items[1].slice(0, -1);
                        result.push([items[0], +two]);
                    }
                } else if (i !== 1 && i !== params.length) {
                    if (items.length === 1) {
                        angle += perNum;
                        result.push([items[0], angle / 100]);
                    } else {
                        const two = items[1].slice(0, -1);
                        result.push([items[0], +two / 100]);
                    }
                } else if (i !== 1 && i === params.length) {
                    result.push([items[0], 1]);
                }
            }
        }
    }
    return result;
};

const isDeg = (value: string): boolean => {
    if (value.includes('deg')) {
        return true;
    }
    return false;
};

const isColor = (color: string): boolean => {
    if (color.includes('#') || color.includes('rgb')) {
        return true;
    }
    return false;
};

export const getColor = (color: string): string => {
    if (isLinearGradient(color)) {
        const leftIndex = color.indexOf('(');
        const rightIndex = color.indexOf(')');
        const params = color.substring(leftIndex + 1, rightIndex).split(',');
        // 获取第一次参数
        if (isColor(params[0])) {
            return params[0];
        }
        // 分割
        const items = params[1].split(/\s+/g);
        for (let i = 0; i < items.length; i++) {
            if (isColor(items[i])) {
                return items[i];
            }
        }
    }
    return color;
};

const ANGLEMAP = {
    totop: 0,
    torighttop: 45,
    toright: 90,
    torightbottom: 135,
    tobottom: 180,
    toleftbottom: 225,
    toleft: 270,
    tolefttop: 315
};

// replace(/\s*/g,"")
export const toAngle = (value: string):number => {
    if (isDeg(value)) {
        return +value.slice(0, -3);
    }
    const val = value.replace(/\s*/g, '');
    if (typeof ANGLEMAP[val] === 'number') {
        return ANGLEMAP[val];
    }
    return 0;
};
