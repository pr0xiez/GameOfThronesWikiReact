import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HouseCard extends Component {
  constructor(props) {
    super(props);
    const id
      = props.houseUrl
        .split('/')
        .slice(-1)[0];

    this.state = {
      id,
    };
  }

  render() {
    return (
      <div className="four wide computer ten wide mobile six wide tablet column">
        <h2>{this.props.houseName}</h2>
        <p>{this.props.houseWords}</p>
        <Link to={`/houses/${this.state.id}`} href={`/houses/${this.state.id}`}>See Details</Link>
      </div>
    );
  }
}

HouseCard.propTypes = {
  houseName: PropTypes.string,
  houseWords: PropTypes.string,
  houseUrl: PropTypes.string,
};

HouseCard.defaultProps = {
  houseName: 'No Name Found :(',
  houseWords: 'No Words Found :(',
  houseUrl: '',
};

export default HouseCard;
