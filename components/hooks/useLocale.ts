import { useEffect, useState } from 'react';

export const getLocale = () => {
  let locale = 'zh-CN';
  // const matched = window.parent.location.href.match(/#\/([a-z-]+)/i);
  // if (matched) {
  //   [, locale] = matched;
  // }
  return locale;
};

const useLocale = (): [string, any] => {
  const [locale, setLocale] = useState<string>(getLocale());
  const handlePopState = () => {
    setLocale(getLocale());
  };
  useEffect(() => {
    window.parent.addEventListener('popstate', handlePopState);
    return () => {
      window.parent.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return [locale, setLocale];
};

export default useLocale;
