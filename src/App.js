import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Houses from './stateful-components/Houses';
import PaginationButton from './components/Pagination-Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { // app state
      apiUrl: 'https://www.anapioficeandfire.com/api/',
      appTitle: `Alex's Game of Thrones Wiki :)`,
      page: 1,
      pageSize: 20,
      paginator: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="ui inverted menu">
          <a className="header item">{this.state.appTitle}</a>
          <a className="item"><Link to="/houses">Houses</Link></a>
          <a className="item">Characters</a>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/houses" component={Houses} page={this.state.page} pageSize={this.state.pageSize} />
        { this.state.paginator.map(i => <PaginationButton paginationClicked={this.paginationClicked} key={i} page={i} />) }
      </div>

      
      </Router>
    );
  }

  paginationClicked = (x) => this.setState({ page: x }, this.fetchHouses);
}

export default App;
