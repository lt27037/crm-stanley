import React, { useLayoutEffect } from 'react';

import '../styles/Error.scss';

const Error = () => {
  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    []
  );

  return (
    <div className="error">
      <span className="error__number">404</span>
      <p className="error__message">Ups, coś poszło nie tak...</p>
    </div>
  );
};

export default Error;
