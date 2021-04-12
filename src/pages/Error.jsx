import React from 'react';

import '../styles/Error.scss';

const Error = () => {
  return (
    <div className="error">
      <span className="error__number">404</span>
      <p className="error__message">Ups, coś poszło nie tak...</p>
    </div>
  );
};

export default Error;
