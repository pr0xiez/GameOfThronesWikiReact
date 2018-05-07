import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gotPoster from '../assets/images/Game-of-thrones-final-season-poster.jpg';

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
      <div className="ui 4 cards">
        <div className="ui card">
          <img src={gotPoster} className="ui image" alt="house" />
          <div className="content">
            <div className="header">{this.props.houseName}</div>
            <div className="description">{this.props.houseWords}</div>
          </div>
          <div className="extra content">
            <Link to={`/houses/${this.state.id}`} href={`/houses/${this.state.id}`}>See Details</Link>
          </div>
        </div>
      </div>
    );
  }
}

HouseCard.propTypes = {
  houseName: PropTypes.string.isRequired,
  houseWords: PropTypes.string.isRequired,
  houseUrl: PropTypes.string.isRequired,
};

HouseCard.defaultProps = {
  houseName: 'No Name Found :(',
  houseWords: 'No Words Found :(',
  houseUrl: '',
};

export default HouseCard;
