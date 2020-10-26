import React from 'react';
import NotFound from 'regen-components/lib/components/not-found';
import { getImgSrc } from '../lib/imgSrc';

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFound
      img={<img alt="home" src={getImgSrc('rotational-grazing.png')} />}
      home={process.env.REACT_APP_WEBSITE_URL}
    />
  );
};

export default NotFoundPage;
