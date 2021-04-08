import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

import '../styles/Container.scss';

const Container = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/kontakt">
          <Contact />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
