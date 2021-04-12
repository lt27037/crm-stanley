import React from 'react';

import Button from './Button';

import '../styles/ContactForm.scss';

const ContactForm = () => {
  return (
    <form className="contactForm">
      <input
        type="text"
        className="contactForm__input"
        placeholder="Imię i Nazwisko"
      />
      <input
        type="email"
        className="contactForm__input"
        placeholder="Email"
      />
      <input
        type="text"
        className="contactForm__input input--area"
        value="+48"
      />
      <input
        type="number"
        className="contactForm__input input--phone"
        placeholder="Telefon (Opcjonalnie)"
      />
      <textarea
        className="contactForm__text"
        placeholder="Jak możemy ci pomóc?"
      />
      <Button content="Wyślij" type="submit" />
    </form>
  );
};

export default ContactForm;
