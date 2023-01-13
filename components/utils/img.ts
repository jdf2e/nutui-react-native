import tag from './img-url/tag.json';
import icon from './img-url/icon.json';

const imgUrlList = Object.assign(tag, icon);// 所有图片

const getImageUrl = (key) => {
    return imgUrlList[key];
};

export default getImageUrl;
