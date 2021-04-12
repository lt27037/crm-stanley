import React from 'react';

import Welcome from '../sections/Welcome';
import Details from '../sections/Details';
import Symulations from '../sections/Symulations';
import Plans from '../sections/Plans';

import '../styles/Home.scss';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Details />
      <Symulations />
      <Plans />
    </div>
  );
};

export default Home;
