import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './demo-preview.scss';

const DemoPreview = (props: any) => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const [URL, setURL] = useState(path[path.length - 1]);

  useEffect(() => {
    const path = location.pathname.split('/');
    setURL(path[path.length - 1]);
  }, [location]);

  return (
    <div className={`doc-demo-preview ${props.className}`}>
      <iframe src={`https://nutui.jd.com/h5/react/1x/demo.html#${URL}`} frameBorder='0'></iframe>
    </div>
  );
};

export default DemoPreview;
