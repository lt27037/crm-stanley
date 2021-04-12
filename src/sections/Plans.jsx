import React, { useState } from 'react';

import { ReactComponent as Info } from '../images/information.svg';
import PlanSwitch from '../components/PlanSwitch';
import Plan from '../components/Plan';

import '../styles/sections/Plans.scss';

const plans = [
  {
    id: 0,
    title: 'Trial',
    profits: [
      'BEZ ZOBOWIĄZAŃ',
      'Dostęp do wszystkich funkcjonalności',
    ],
    price: 'ZA DARMO',
  },
  {
    id: 1,
    title: 'Standard',
    profits: [
      'BEZ ZOBOWIĄZAŃ',
      'Rabat dla aktywnych do 50%',
      'Dostęp do wszystkich funkcjonalności',
    ],
    price: '10PLN',
  },
  {
    id: 2,
    title: 'PRO',
    profits: [
      'BEZ ZOBOWIĄZAŃ',
      'Rabat dla aktywnych do 80%',
      'Wsparcie techniczne 24/7',
      'Warsztaty z naszym konsultantem',
      'Dostęp do wszystkich funkcjonalności',
    ],
    price: '50PLN',
  },
];

const Plans = () => {
  const [yearlyPlan, setYearlyPlan] = useState(true);
  const plansElements = plans.map((plan) => <Plan key={plan.id} plan={plan} />);
  return (
    <section className="plans">
      <div className="plans__titleWrapper">
        <h2 className="plans__title">Wybierz odpowiedni plan dla siebie</h2>
        <PlanSwitch yearly={yearlyPlan} setYearly={setYearlyPlan} />
      </div>
      <div className="plans__container">
        { plansElements }
      </div>
      <span className="plans__alert">
        <Info className="plans__alert__icon" />
        <p className="plans__alert__text">
          Pierwszy miesiąc jest zawsze za darmo. Podczas trwania
          miesiąca testowego można gromadzić rabaty już na kolejne
          miesiące aż do 80%! (Wystarczy aktywnie korzystać z serwisu)
        </p>
      </span>
    </section>
  );
};

export default Plans;
