import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.scss';

const Button = ({ content, click, secondary }) => (
  <button
    className={secondary ? 'button--secondary' : 'button'}
    type="button"
    onClick={click}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  click: PropTypes.func,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  click: () => null,
  secondary: false,
};

export default Button;
