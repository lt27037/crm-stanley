import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Discover from './Discover';
import Crm from './Crm';
import Feed from './Feed';

import '../styles/sections/Details.scss';

const Details = () => {
  const location = useLocation();
  const about = useRef(null);

  // funkcja scrollująca do sekcji po zmienie lokalizacji
  useLayoutEffect(
    () => {
      if (location.pathname === '/onas') about.current?.scrollIntoView();
    },
    [location]
  );

  // komponent z sekcją podzielony na dodatkowe 3 komponenty
  return (
    <section className="details" ref={about}>
      <Discover />
      <Crm />
      <Feed />
    </section>
  );
};

export default Details;
