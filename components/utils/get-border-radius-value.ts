import pt from './pt';

export default (value) => {
  if (typeof value === 'string') {
    if (value.includes('%')) {
      // 截取
      if (!Number.isNaN(value)) {
        const val = parseFloat(value);

        return (pt(750) * (val / 100)) / 2;
      }
    }

    const val = parseFloat(value);

    return (val / 2);
  }
  if (typeof value === 'number') {
    return value / 2;
  }

  return 0;
};
