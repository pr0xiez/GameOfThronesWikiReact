import React, { Component } from 'react';
import HouseCard from './House-Card';
import PaginationButton from '../components/Pagination-Button';
import Fetch from '../lib/fetch';
import Loader from '../components/Loader';

class Houses extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      pageSize: 16,
      paginator: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  componentWillMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const data = await Fetch.fetchy(`houses?page=${this.state.page}&pageSize=${this.state.pageSize}`);
    this.setState({ houses: data });
  }

  paginationClicked = pageNumber => this.setState({ page: pageNumber }, this.fetchHouses);

  render() {
    return (
      <div>
        <h2>Houses</h2>
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
              : <Loader />
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
