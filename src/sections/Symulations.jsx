import React, { useState, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';

import Button from '../components/Button';
import Company from '../components/Company';

import '../styles/sections/Symulations.scss';

const companiesInfo = [
  {
    id: 0,
    name: 'TELIANI',
    content: '1,1000 PLN / 13,40% wartość 238,85',
  },
  {
    id: 1,
    name: 'KBJ',
    content: '27,800 PLN / 11,20% wartość 324,98',
  },
  {
    id: 2,
    name: 'BBINWEST',
    content: '17,900 PLN / 9,15% wartość 761,57',
  },
  {
    id: 3,
    name: 'AZTEC',
    content: '3,2000 PLN / 6,67% wartość 11,47',
  },
  {
    id: 4,
    name: 'HORTICO',
    content: '4,2000 PLN / 5,00% wartość 41,47',
  },
  {
    id: 5,
    name: 'BIOGENED',
    content: '13,7000 PLN / 4,58% wartość 0,42',
  },
  {
    id: 6,
    name: 'INTERNITY',
    content: '2,4200 PLN / 4,31% wartość 15,32',
  },
  {
    id: 7,
    name: 'NETWISE',
    content: '19,8000 PLN / 4,21% wartość 0,20',
  },
  {
    id: 8,
    name: 'TELESTR',
    content: '16,0000 PLN / 3,90% wartość 37,33',
  },
  {
    id: 9,
    name: 'TAXNET',
    content: '1,6500 PLN / 3,77% wartość 4,62',
  },
];

const Symulations = () => {
  const [value, setValue] = useState(10000);
  const location = useLocation();
  const calculator = useRef(null);

  useLayoutEffect(
    () => {
      if (location.pathname === '/kalkulator') calculator.current?.scrollIntoView();
    },
    [location]
  );

  const companies = companiesInfo.map((company) => <Company key={company.id} company={company} />);

  return (
    <section className="symulations" ref={calculator}>
      <div className="symulations__container">
        <h2 className="symulations__title">Sprawdź nasze symulacje</h2>
        <div className="symulations__slider">
          <span className="symulations__slider__value">
            Kwota inwestycji:
            {' '}
            {value}
            {' '}
            PLN
          </span>
          <Slider
            min={0}
            max={80000}
            step={1000}
            value={value}
            scale={(x) => x ** 10}
            onChange={(e, newValue) => setValue(newValue)}
          />
        </div>
        <div className="symulations__session">
          <h3 className="symulations__session__title">Spółki rosnące: 91</h3>
          <form className="symulations__session__form">
            <label className="symulations__session__label" htmlFor="sesion">
              Ostatnia Sesja
              <input type="checkbox" className="symulations__session__input" name="sesion" />
            </label>
            <label className="symulations__session__label" htmlFor="sesion">
              Ostatni Tydzień
              <input type="checkbox" className="symulations__session__input" name="sesion" />
            </label>
            <label className="symulations__session__label" htmlFor="sesion">
              Ostatni Miesiąc
              <input type="checkbox" className="symulations__session__input" name="sesion" />
            </label>
            <label className="symulations__session__label" htmlFor="sesion">
              Ostatni Rok
              <input type="checkbox" className="symulations__session__input" name="sesion" />
            </label>
          </form>
        </div>

      </div>
      <div className="symulations__profit">
        <h4 className="symulations__profit__title">Twój zysk:</h4>
        <span className="symulations__profit__value">{`${Math.floor(value * 0.15)} PLN`}</span>
        <h5 className="symulations__profit__grow">Wzrost</h5>
        <span className="symulations__profit__percentage">+15%</span>
        <Button content="Zarejestruj się" />
      </div>
      <div className="symulations__companies">
        <h2 className="symulations__companies__title">TOP 10 najbardziej rosnących spółek</h2>
        <div className="symulations__companies__wrapper">
          {companies}
        </div>
      </div>
    </section>
  );
};

export default Symulations;
