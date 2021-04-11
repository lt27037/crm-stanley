import React from 'react';

import Discover from './Discover';
import Crm from './Crm';

import '../styles/sections/Details.scss';

const Details = () => {
  return (
    <section className="details">
      <Discover />
      <Crm />
    </section>
  );
};

export default Details;
