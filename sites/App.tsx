import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import useLocale from './assets/locale/useLocale';
import { routers, raws } from './docs';
import Header from './components/header';
import Nav from './components/nav';
import Title from './components/title';
import Issue from './components/issue';
import myRemarkPlugin from './markdown-plugin/my-remark-plugin';
import snackPlayer from './markdown-plugin/remark-snackplayer';
import DemoPreview from './components/demo-preview';

import './App.scss';

function App() {
  const [lang] = useLocale();

  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);

  const getMarkdownByLang = (ru: string) => {
    if (lang === 'zh-CN' || lang === '') {
      // @ts-ignore
      return raws[ru];
    } else {
      // @ts-ignore
      return raws[`${ru}${lang.replace('-', '')}`];
    }
  };

  const scrollTitle = () => {
    let top = document.documentElement.scrollTop;
    if (top > 127) {
      setFixed(true);
      if (top < 142) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setFixed(false);
      setHidden(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollTitle)
  }, [])

  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className='doc-content'>
          <div className='doc-title'>
            <div
              className={`doc-title-position ${fixed ? 'fixed' : ''} ${
                hidden ? 'hidden' : ''
              }`}
            >
              <Title />
              <Issue />
            </div>
          </div>
        </div>

        <div className='doc-content-document isComponent'>
          <Switch>
            {routers.map((ru, k) => {
              return (
                <Route
                  key={k}
                  path={`${lang ? `/${lang}` : ''}/component/${ru}`}
                >
                  <ReactMarkdown
                    children={getMarkdownByLang(ru)}
                    remarkPlugins={[
                      snackPlayer,
                      remarkGfm,
                      remarkDirective,
                      myRemarkPlugin,
                    ]}
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
                </Route>
              );
            })}
          </Switch>
        </div>
        <div className='markdown-body'>
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
