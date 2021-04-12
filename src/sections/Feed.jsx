import React from 'react';

import image from '../images/header/header-image-try.png';
import card from '../images/header/modalasfaf 1.png';
import { ReactComponent as Icon } from '../images/header/feed-icon.svg';
import { ReactComponent as Elipse } from '../images/header/left-elipse.svg';

import '../styles/sections/Feed.scss';

const Feed = () => {
  return (
    <section className="feed">
      <Elipse className="feed__elipse" />
      <div className="feed__wrapper">
        <h2 className="feed__title">Fajny nagłówek</h2>
        <p className="feed__discription">
          Sprawdź najnowsze informacje w jednym miejscu. Dodaj je do swojego Feeda,
          uzupełniaj notatkami i dodawaj ważne wydarzenia do kalendarza.
          I wiele, wiele więcej...
        </p>
        <div className="feed__card">
          <img
            src={card}
            alt="ilustracja posta"
            className="feed__card__img"
          />
          <Icon className="feed__card__icon" />
          <span className="feed__card__tag">@biznes</span>
          <span className="feed__card__button">Post it</span>
        </div>
      </div>
      <div className="feed__container">
        <img
          src={image}
          alt="Ilustracja strony głównej aplikacji"
          className="feed__container__img"
        />
      </div>
    </section>
  );
};

export default Feed;
