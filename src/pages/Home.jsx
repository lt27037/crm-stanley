import React from 'react';

import Welcome from '../sections/Welcome';
import Details from '../sections/Details';

import '../styles/Home.scss';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Details />
    </div>
  );
};

export default Home;
