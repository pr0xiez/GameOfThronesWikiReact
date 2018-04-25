import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button className="ui violet basic button">{props.value}</button>;

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: 'Click Me!',
};

export default Button;
