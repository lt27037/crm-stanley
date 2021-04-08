import React from 'react';

import Logo from '../images/logo-desktop.png';
import { ReactComponent as FbIcon } from '../images/Facebook-square.svg';
import { ReactComponent as TtIcon } from '../images/Twitter.svg';
import { ReactComponent as LiIcon } from '../images/linkedin-in.svg';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="footer__logo" />
      <span className="footer__copyright">&copy;2021 CashCNTR</span>
      <ul className="footer__menu">
        <li className="footer__menu__item">Regulamin</li>
        <li className="footer__menu__item">Polityka prywatności</li>
      </ul>
      <div className="footer__wrapper">
        <span className="footer__wrapper__icon"><FbIcon /></span>
        <span className="footer__wrapper__icon"><TtIcon /></span>
        <span className="footer__wrapper__icon"><LiIcon /></span>
      </div>
    </footer>
  );
};

export default Footer;
