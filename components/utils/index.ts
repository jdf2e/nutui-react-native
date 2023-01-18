export { default as DiviceWidth } from './deviceWidth';
export { default as DiviceHeight } from './deviceHeight';
export { default as StatusBarHeight } from './statusBarHeight';
export { IComponent, BasicComponent, ComponentDefaults } from './typings';

const trimExtraChar = (value: string, char: string, regExp: RegExp) => {
  const index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
};

export const formatNumber = (
  value: string,
  allowDot = true,
  allowMinus = true
) => {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

  return value.replace(regExp, '');
};
