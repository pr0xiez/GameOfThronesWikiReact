import React, { Component } from 'react';
import Fetch from '../lib/fetch';
import Loader from '../components/Loader';

class HouseDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    }
  }

  componentDidMount() {
    this.fetchHouse();
  }

  fetchHouse = async () => {
    const data = await Fetch.fetchy(`houses/${this.state.id}`)
    console.log(data);
    this.setState({ house: data });
  }

  render() {
    return (
      <div>
        {this.state.house
          ? <p>{this.state.house.name}</p>
          : <Loader />
        }
      </div>
    );
  }
}

export default HouseDescription;
