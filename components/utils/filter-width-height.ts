export default (style = {}) => {
  const keys = Object.keys(style);

  const filterKeys = keys.filter((key) => {
    return /width/.test(key) || /height/.test(key);
  });

  const result = {};

  for (let i = 0; i < filterKeys.length; i++) {
    const key = filterKeys[i];

    result[key] = style[key];
  }

  return result;
};
