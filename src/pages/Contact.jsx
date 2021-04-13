import React, { useLayoutEffect } from 'react';

import ContactFrom from '../components/ContactForm';
import { ReactComponent as Zigzac1 } from '../images/welcome/Vector 1.svg';
import { ReactComponent as Zigzac2 } from '../images/welcome/Vector 2.svg';
import map from '../images/contact/map.png';

import '../styles/Contact.scss';

const Contact = () => {
  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    []
  );

  return (
    <div className="contact">
      <span className="contact__zigzacs">
        <Zigzac1 />
        <Zigzac2 />
      </span>
      <h1 className="contact__title">Kontakt</h1>
      <ContactFrom />
      <div className="contact__container">
        <section className="contact__section section--email">
          <span className="contact__section__title">Nasz email</span>
          <span className="contact__section__content">hello@cashcntr.com</span>
        </section>
        <section className="contact__section section--adress">
          <span className="contact__section__title">Adres</span>
          <span className="contact__section__content">ul. PIEKARY, nr 12A, lok. 4P</span>
          <span className="contact__section__content">61-823 Poznań</span>
          <span className="contact__section__content">POLSKA</span>
        </section>
        <div className="contact__map">
          <img
            src={map}
            alt="mapa z lokalizacją biura"
            className="contact__map__img"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
