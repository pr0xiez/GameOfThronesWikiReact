import React, { Component } from 'react';
import Fetch from '../lib/fetch';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 16,
      paginator: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const data = await Fetch.fetchy(`characters?page=${this.state.page}&pageSize=${this.state.pageSize}`)
    this.setState({ characters: data }, () => console.log(this.state.characters));
  }

  render() {
    return (
      <h1>Characters works!</h1>
    );
  }
}

export default Characters;
