import React, { Component } from 'react';
import House from '../components/House';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props);
  }

  // componentWillMount() {
  //   this.fetchHouses();
  // }

  render() { 
    return (
      <div className="ui equal width celled grid">
          {this.state.houses
            ? this.state.houses.map((house) => {
                return (
                  <House
                    key={house.url}
                    houseName={house.name}
                    houseWords={house.coatOfArms}
                  />
                );
              })
            : <div className="ui active transition visible inverted dimmer"> 
                <div className="ui inverted text loader">Loading...</div>
              </div> // eslint-disable-line 
          }
        </div>
    );
  }

  fetchHouses = async () => {
    const result
      = await fetch(`${this.props.apiUrl}houses?page=${this.props.page}&pageSize=${this.props.pageSize}`);
    const data = await result.json();
    this.setState({ houses: data });
  }
}
 
export default Houses;
