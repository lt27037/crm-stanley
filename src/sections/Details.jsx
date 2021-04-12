import React from 'react';

import Discover from './Discover';
import Crm from './Crm';
import Feed from './Feed';

import '../styles/sections/Details.scss';

const Details = () => {
  return (
    <section className="details">
      <Discover />
      <Crm />
      <Feed />
    </section>
  );
};

export default Details;
