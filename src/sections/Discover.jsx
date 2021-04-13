import React from 'react';

import DiscoverItem from '../components/DiscoverItem';

import symulation from '../images/discover/symulator.png';
import informations from '../images/discover/informacje.png';
import crm from '../images/discover/crm.png';
import analitic from '../images/discover/analityka.png';
import ways from '../images/discover/sciezki.png';
import networking from '../images/discover/networking.png';
import events from '../images/discover/wydarzenia.png';
import notifications from '../images/discover/powiadomienia.png';
import image from '../images/discover-image.png';
import imageBg from '../images/discover-image-background.png';

import '../styles/sections/Discover.scss';

const data = [
  {
    id: 1,
    title: 'Symulator',
    content: 'Prawdziwe transakcje giełdowe 24/7 na żywo',
    icon: symulation,
  },
  {
    id: 2,
    title: 'Informacje',
    content: 'Sieć komunikatów giełdowych i prasowych',
    icon: informations,
  },
  {
    id: 3,
    title: 'CRM',
    content: 'System zarządzania informacją',
    icon: crm,
  },
  {
    id: 4,
    title: 'Analityka',
    content: 'Zestaw automatycznych narzędzi do analizy zachowania rynku',
    icon: analitic,
  },
  {
    id: 5,
    title: 'Ścieżki',
    content: 'Analizy własnych ścieżek inwestycyjnych',
    icon: ways,
  },
  {
    id: 6,
    title: 'Networking',
    content: 'Poznawaj inwestorów i traderów',
    icon: networking,
  },
  {
    id: 7,
    title: 'Wydarzenia',
    content: 'Kalendarz giełdowy',
    icon: events,
  },
  {
    id: 8,
    title: 'Powiadomienia',
    content: 'Centrum ważnych notyfikacji',
    icon: notifications,
  },
];

const Discover = () => {
  // tworzenie komponentów na podstawie listy data.
  const items = data.map((item) => <DiscoverItem key={item.id} item={item} />);

  return (
    <section className="discover">
      <div className="discover__container">
        <h2 className="discover__title">Odkrywaj nowe możliwości</h2>
        <p className="discover__discription">
          Korzystaj z przystępnych narzędzi, zgłebiaj rynki i wzorce.
          Poznawaj nowych ludzi i twórz swoją sieć.
        </p>
        <section className="discover__wrapper">
          {items}
        </section>
      </div>
      <div className="discover__image">
        <img
          src={image}
          alt="Zdjęcie mężczyzny w górach"
          className="discover__image__img"
        />
        <img
          src={imageBg}
          alt="kształt w tle zdjęcia"
          className="discover__image__background"
        />
      </div>
    </section>
  );
};

export default Discover;
