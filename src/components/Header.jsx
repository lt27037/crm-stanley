import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from './Button';
import { ReactComponent as Logo } from '../images/logo/logo-desktop.svg';

import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink to="/">
          <Logo className="header__logo" />
        </NavLink>
        <nav className="header__menu">
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
      <div className="header__wrapper">
        <Button content="Logowanie" secondary />
        <Button content="Zarejestruj się" />
      </div>
    </header>
  );
};

export default Header;
