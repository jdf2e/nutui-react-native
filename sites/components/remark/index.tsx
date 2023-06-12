import { memo, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import myRemarkPlugin from '../../markdown-plugin/my-remark-plugin';
import snackPlayer from '../../markdown-plugin/remark-snackplayer';
import useLocale from '../../assets/locale/useLocale';
import { raws } from '../../docs';

const Remark = ({ ru }: { ru: any }) => {
  const [lang] = useLocale();
  const getMarkdownByLang = (ru: string) => {
    if (lang === 'zh-CN' || lang === '') {
      // @ts-ignore
      return raws[ru];
    } else {
      // @ts-ignore
      return raws[`${ru}${lang.replace('-', '')}`];
    }
  };
  useEffect(() => {
    console.log('_______________________');
    window.ExpoSnack?.initialize();
    window.scrollTo(0, 0);
  }, [ru]);
  return (
    <ReactMarkdown
      children={getMarkdownByLang(ru)}
      remarkPlugins={[snackPlayer, remarkGfm, remarkDirective, myRemarkPlugin]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default memo(Remark, (prev, next) => {
  return prev.ru === next.ru;
});
