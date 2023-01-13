import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { nav } from '../../config.json';
import config from '../../config/env';
import { version } from '../../../package.json';

import './header.scss';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [currLang, setCurrLang] = useState({});
  const toHome = () => {
    history.replace('/');
  };
  const langs = [
    { name: '中文', locale: 'zh-CN' },
    { name: '中文(繁体)', locale: 'zh-TW' },
    { name: 'English', locale: 'en-US' },
    { name: 'Thai', locale: 'th' },
  ];

  useEffect(() => {
    let packages = [] as any[];
    nav.forEach((item) => {
      packages.push(...item.packages);
    });
  }, []);

  useEffect(() => {
    const lang = langs.filter(
      (l) => location.pathname.indexOf(l.locale) > -1
    )[0];
    setCurrLang(lang);
  }, [location]);

  const [visible, setVisible] = useState(false);

  const handleSwitchLocale = (e: any) => {
    const classList: string[] = [].slice.call(e.target.classList);
    if (classList.indexOf('curr-lang') > -1) {
      return setVisible(!visible);
    }
    const name = e.target.innerText;
    setVisible(!visible);
    const [{ locale }] = langs.filter((l) => name == l.name);

    let link = '';
    if (config.locales.some((l) => window.location.href.indexOf(l) > -1)) {
      link = window.location.href.replace(/\#\/([a-z-]+)/gi, `#/${locale}`);
    } else {
      link = window.location.href.replace(/\#\//gi, `#/${locale}/`);
    }
    window.location.href = link;
  };
  return (
    <div className='doc-header doc-header-red'>
      <div className='header-logo'>
        <a className='logo-link' href='#/' onClick={toHome}></a>
        <span className='logo-border'></span>
        <span className='version'>{version}</span>
      </div>
      <div className='header-nav'>
        <a href='https//github.com/jdf2e/nutui-docs' target='_blank'>
          当前环境：development
        </a>
      </div>
    </div>
  );
};
export default Header;
