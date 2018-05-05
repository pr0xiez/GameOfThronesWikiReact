import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
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

  componentWillMount() {
    console.log(this.props);
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  handleLocationChange = (location) => {
    console.log('location', location);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="ui inverted menu">
            <Link to="/" className="header item">{this.state.appTitle}</Link>
            <Link to="/houses" className="item">Houses</Link>
            <Link to="/characters" className="item">Characters</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/houses" render={(props => 
            <Houses {... props } 
              apiUrl={this.state.apiUrl} 
              page={this.state.page} 
              pageSize={this.state.pageSize} />
          )} />
          {
            window.location.pathname !== '/' && this.state.paginator.map(i => <PaginationButton paginationClicked={this.paginationClicked} key={i} page={i} />) 
          }
        </div>
      </Router>
    );
  }

  paginationClicked = (x) => this.setState({ page: x });
}

export default withRouter(App);
