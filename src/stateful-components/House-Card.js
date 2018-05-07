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
        <div class="ui card">
          <img src={gotPoster} class="ui image" alt="house" />
          <div class="content">
            <div class="header">{this.props.houseName}</div>
            <div class="description">{this.props.houseWords}</div>
          </div>
          <div class="extra content">
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
