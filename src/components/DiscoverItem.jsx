import React from 'react';
import PropTypes from 'prop-types';

import '../styles/DiscoverItem.scss';

const DiscoverItem = ({ item }) => {
  return (
    <div className="discoverItem">
      <div className="discoverItem__icon">
        <img
          src={item.icon}
          alt="Ikona"
          className="discoverItem__icon__img"
        />
      </div>
      <div className="discoverItem__wrapper">
        <h4 className="discoverItem__title">{item.title}</h4>
        <span className="discoverItem__content">{item.content}</span>
      </div>
    </div>
  );
};

DiscoverItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default DiscoverItem;
