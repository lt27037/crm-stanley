import React from 'react';

import Button from '../components/Button';
import { ReactComponent as Info } from '../images/information.svg';
import { ReactComponent as Zigzac1 } from '../images/welcome/Vector 1.svg';
import { ReactComponent as Zigzac2 } from '../images/welcome/Vector 2.svg';
import { ReactComponent as ArcTop } from '../images/welcome/Vector 4.svg';
import { ReactComponent as ArcBottom } from '../images/welcome/Vector 3.svg';
import pictures1 from '../images/welcome/welcome-picture-1.png';
import pictures2 from '../images/welcome/welcome-picture-2.png';

import '../styles/sections/Welcome.scss';

const Welcome = () => {
  return (
    <section className="welcome">
      <ArcTop className="welcome__arc arc--top" />
      <ArcBottom className="welcome__arc arc--bottom" />
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
      <div className="welcome__photoWrapper">
        <img
          src={pictures1}
          alt="Zdjęcie mężczyzny"
          className="welcome__picture picture--first"
        />
        <img
          src={pictures2}
          alt="Zdjęcie kobiety"
          className="welcome__picture picture--second"
        />
        <span className="welcome__zigzacs">
          <Zigzac1 />
          <Zigzac2 />
        </span>
      </div>
    </section>
  );
};

export default Welcome;
