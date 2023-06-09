import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { nav } from '../../config.json';
import useLocale from '../../assets/locale/useLocale';

import './nav.scss';

const Nav = () => {
  const [cNav] = useState<any>(nav);
  const [lang] = useLocale();
  const [fixed, setFixed] = useState(false);
  const scrollNav = () => {
    let top = document.documentElement.scrollTop;
    if (top > 64) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollNav);
  }, []);
  return (
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      <ol>
        {cNav.map((cn: any, index: number) => {
          return (
            <div key={index}>
              <li>{cn.name}</li>
              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null;
                  return (
                    <li key={cp.name}>
                      <NavLink
                        to={`${lang ? `/${lang}` : ''}/component/${cp.name}`}
                      >
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Nav;
