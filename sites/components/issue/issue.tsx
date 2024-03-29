import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Icon from '../icon';
import { nav } from '../../config.json';

import './issue.scss';

const Issue = () => {
  let location = useLocation();

  const getComponentName = () => {
    const s = window.location.hash.split('/');
    const cname = s[s.length - 1].toLowerCase();
    const component: any = {};
    nav.forEach((item: any) => {
      item.packages.forEach((sItem: any) => {
        if (sItem.name.toLowerCase() == cname) {
          component.name = sItem.name;
          component.cName = sItem.cName;
          return;
        }
      });
    });
    return component;
  };
  useEffect(() => {
    const componentName = getComponentName();
    setComponentName(componentName);
  }, [location]);
  const [componentName, setComponentName] = useState({ name: '', cName: '' });
  return (
    <>
      <div className='doc-content-issue'>
        <a
          className='issue-item'
          href='https://github.com/jdf2e/nutui-react-native/issues'
          target='_blank'
        >
          <Icon name='uploader'></Icon>
          Issue
        </a>
        <a
          className='issue-item'
          href='https://github.com/jdf2e/nutui-react-native/issues?q=is:issue+is:open'
          target='_blank'
        >
          <Icon name='issue'></Icon>
          Open
        </a>
        <a
          className='issue-item'
          href={`https://github.com/jdf2e/nutui-react-native/issues?q=is:issue+is:closed+${componentName.name}`}
          target='_blank'
        >
          <Icon name='checklist'></Icon>
          Closed
        </a>
      </div>
    </>
  );
};
export default Issue;
