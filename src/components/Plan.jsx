import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import '../styles/Plan.scss';

const Plan = ({ plan }) => {
  const profits = plan.profits.map((profit) => <span className="plan__profits__text" key={profit}>{profit}</span>);

  return (
    <article className="plan">
      <h3 className="plan__title">{plan.title}</h3>
      <div className="plan__profits">
        {profits}
      </div>
      <span className="plan__price">{plan.price}</span>
      <Button content="Wybierz plan" />
    </article>
  );
};

Plan.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  plan: PropTypes.object.isRequired,
};

export default Plan;
