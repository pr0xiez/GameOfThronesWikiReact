import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const House = (props) => {
  return (
    <div className="four wide computer ten wide mobile six wide tablet column">
      <h2>{props.houseName}</h2>
      <p>{props.houseWords}</p>
      <Button value='See Details' />
    </div>
  );
};

House.propTypes = {
  houseName: PropTypes.string,
  houseWords: PropTypes.string,
};

House.defaultProps = {
  houseName: 'No Name Found :(',
  houseWords: 'test',
};

export default House;
