import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from './Button';
import Logo from '../images/logo-desktop.png';

import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src={Logo}
          alt="Logo"
          className="header__logo"
        />
        <nav className="header__menu">
          <ul className="header__menu__list">
            <li className="header__menu__listItem">
              <a href="#about">O nas</a>
            </li>
            <li className="header__menu__listItem">
              <a href="#plans">Plany</a>
            </li>
            <li className="header__menu__listItem">
              <a href="#calculator">Kalkulator</a>
            </li>
            <li className="header__menu__listItem">
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__wrapper">
        <Button content="Logowanie" secondary />
        <Button content="Zarejestruj się" />
      </div>
    </header>
  );
};

export default Header;
