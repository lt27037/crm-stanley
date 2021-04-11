import React from 'react';

import { ReactComponent as ZigBlue } from '../images/crm/vector-zigzac-bold-blue.svg';
import { ReactComponent as ZigGreen } from '../images/crm/vector-zigzac-green.svg';
import { ReactComponent as Calendar } from '../images/crm/calendar.svg';

import card1 from '../images/crm/card-1.png';
import card2 from '../images/crm/card-2.png';
import card3 from '../images/crm/card-3.png';

import '../styles/sections/Crm.scss';

const Crm = () => {
  return (
    <section className="crm">
      <div className="crm__container">
        <div className="crm__card1">
          <img src={card1} alt="ilustracja posta" className="crm__card1__img" />
          <span className="crm__card1__icon" />
          <span className="crm__card1__tag">@GPW</span>
        </div>
        <div className="crm__noCard">
          <span className="crm__noCard__img" />
          <Calendar className="crm__noCard__icon" />
          <span className="crm__noCard__tag">@OPENFIN</span>
        </div>
        <div className="crm__card2">
          <img src={card2} alt="ilustracja posta" className="crm__card2__img" />
        </div>
        <div className="crm__card3">
          <img src={card3} alt="ilustracja posta" className="crm__card3__img" />
        </div>
        <div className="crm__lastTag">
          <span className="crm__lastTag__tag">@crypto</span>
        </div>
      </div>
      <div className="crm__wrapper">
        <h2 className="crm__title">Dopasowany do Ciebie CRM</h2>
        <p className="crm__discription">
          Sprawdź najnowsze informacje w jednym miejscu. Dodaj je do swojego
          Feeda, uzupełniaj notatkami i dodawaj ważne wydarzenia do kalendarza.
          I wiele, wiele więcej...
        </p>
        <div className="crm__zigzac">
          <ZigBlue className="crm__zigzac__item" />
          <ZigGreen className="crm__zigzac__item" />
        </div>
      </div>
    </section>
  );
};

export default Crm;
