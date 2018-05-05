import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import HouseCard from '../components/House-Card';
import PaginationButton from '../components/Pagination-Button';

class Houses extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl: 'https://www.anapioficeandfire.com/api/',
      page: 1,
      pageSize: 16,
      paginator: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  componentWillMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const result
      = await fetch(
        `${this.state.apiUrl}houses?page=${this.state.page}&pageSize=${this.state.pageSize}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
    const data = await result.json();
    console.log(data);
    this.setState({ houses: data });
  }

  paginationClicked = pageNumber => this.setState({ page: pageNumber }, this.fetchHouses);

  render() {
    return (
      <div>
        <div className="ui equal width celled grid">
          {this.state.houses
              ? this.state.houses.map(house => (
                <HouseCard
                  key={house.url}
                  houseName={house.name}
                  houseWords={house.coatOfArms}
                  houseUrl={house.url}
                />
                  ))
              : <div className="ui active transition visible inverted dimmer">
                <div className="ui inverted text loader">Loading...</div>
                </div> // eslint-disable-line 
            }
        </div>
        <div>
          {
            this.state.paginator.map(i => <PaginationButton paginationClicked={this.paginationClicked} key={i} page={i} />) //eslint-disable-line
          }
        </div>
      </div>
    );
  }
}

export default Houses;
