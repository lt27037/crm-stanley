import React from 'react';

import Button from '../components/Button';
import { ReactComponent as Info } from '../images/information.svg';

import '../styles/sections/Welcome.scss';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <h1 className="welcome__title">We share!</h1>
        <p className="welcome__discription">
          Zestaw prostych narzędzi, pozwalający utrzymać kontrolę nad zyskiem z Twoich pieniędzy.
          Zarabiaj 5%, 10%, 15%... w skali miesiąca. Wszystko zależy od
          Twojego systematycznego zaangażowania.
        </p>
        <div className="welcome__wrapper">
          <Button content="Zarejestruj się" />
          <span className="welcome__info">
            <Info className="welcome__info__icon" />
            Liczba kont ograniczona
          </span>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
