import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Button from './Button';
import { ReactComponent as Logo } from '../images/logo/logo-desktop.svg';

import '../styles/Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(
    () => {
      setIsOpen(false);
    },
    [location]
  );

  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink to="/">
          <Logo className="header__logo" />
        </NavLink>
        <nav className={isOpen ? 'header__menu menu--open' : 'header__menu'}>
          <ul className="header__menu__list">
            <li className="header__menu__listItem">
              <NavLink to="/onas">O nas</NavLink>
            </li>
            <li className="header__menu__listItem">
              <NavLink to="/plany">Plany</NavLink>
            </li>
            <li className="header__menu__listItem">
              <NavLink to="/kalkulator">Kalkulator</NavLink>
            </li>
            <li className="header__menu__listItem">
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={isOpen ? 'header__wrapper buttons--wrapper --open' : 'header__wrapper buttons--wrapper'}>
        <Button content="Logowanie" secondary />
        <Button content="Zarejestruj się" />
      </div>
      <button className="header__menuButton" type="button" onClick={() => setIsOpen(!isOpen)}>
        <span className="header__menuButton__span" />
      </button>
    </header>
  );
};

export default Header;
