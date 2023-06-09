import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import useLocale from './assets/locale/useLocale';
import { routers } from './docs';
import Header from './components/header';
import Nav from './components/nav';
import Title from './components/title';
import Issue from './components/issue';
import DemoPreview from './components/demo-preview';

import './App.scss';
import Remark from './components/remark';

function App() {
  const [lang] = useLocale();

  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);

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
    document.addEventListener('scroll', scrollTitle);
  }, []);

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
          <Routes>
            {routers.map((ru, k) => {
              return (
                <Route
                  key={k}
                  path={`${lang ? `/${lang}` : ''}/component/${ru}`}
                  element={<Remark ru={ru} />}
                >
                </Route>
              );
            })}
          </Routes>
        </div>
        <div className='markdown-body'>
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
