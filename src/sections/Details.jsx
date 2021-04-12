import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Discover from './Discover';
import Crm from './Crm';
import Feed from './Feed';

import '../styles/sections/Details.scss';

const Details = () => {
  const location = useLocation();
  const about = useRef(null);
  useLayoutEffect(
    () => {
      if (location.pathname === '/onas') about.current?.scrollIntoView();
    },
    [location]
  );

  return (
    <section className="details" ref={about}>
      <Discover />
      <Crm />
      <Feed />
    </section>
  );
};

export default Details;
