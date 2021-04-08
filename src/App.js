import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

import './styles/App.scss';

const App = () => (
  <div className="app">
    <Header />
    <Container />
    <Footer />
  </div>
);

export default App;
