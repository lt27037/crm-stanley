import React from 'react';

import Button from '../components/Button';

import '../styles/sections/Newsletter.scss';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2 className="newsletter__title">Newsletter</h2>
      <p className="newsletter__discription">
        Podobają Ci się nasz rozwiązania i chcesz
        wiedzieć więcej? Zapisz się do naszego
        Newslettera. Będziemy Cię informować na
        bieżąco o nowych funkcjonalnościach i planach!
      </p>
      <form className="newsletter__form">
        <input
          type="email"
          className="newsletter__form__input"
          placeholder="Email"
        />
        <Button content="Zapisz się" type="submit" />
      </form>
    </section>
  );
};

export default Newsletter;
