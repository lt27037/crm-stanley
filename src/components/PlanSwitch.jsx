import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PlanSwitch.scss';

const PlanSwitch = ({ yearly, setYearly }) => {
  return (
    <div className="planSwitch">
      <button
        className={yearly ? 'planSwitch__button switch--on' : 'planSwitch__button'}
        type="button"
        onClick={() => setYearly(true)}
      >
        Roczny

      </button>
      <button
        className={yearly ? 'planSwitch__button' : 'planSwitch__button switch--on'}
        type="button"
        onClick={() => setYearly(false)}
      >
        Miesięczny

      </button>
    </div>
  );
};

PlanSwitch.propTypes = {
  yearly: PropTypes.bool.isRequired,
  setYearly: PropTypes.func.isRequired,
};

export default PlanSwitch;
