import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Grow } from '../images/growing-company.svg';

import '../styles/Company.scss';

const Company = ({ company }) => {
  return (
    <article className="company">
      <h3 className="company__title">{company.name}</h3>
      <span className="company__content">{company.content}</span>
      <Grow />
    </article>
  );
};

Company.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  company: PropTypes.object.isRequired,
};

export default Company;
