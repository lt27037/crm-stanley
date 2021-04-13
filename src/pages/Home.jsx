import React from 'react';

import Welcome from '../sections/Welcome';
import Details from '../sections/Details';
import Symulations from '../sections/Symulations';
import Plans from '../sections/Plans';
import Newsletter from '../sections/Newsletter';

import '../styles/Home.scss';

// container zawierający komponenty z sekcjami

const Home = () => {
  return (
    <div>
      <Welcome />
      <Details />
      <Symulations />
      <Plans />
      <Newsletter />
    </div>
  );
};

export default Home;
