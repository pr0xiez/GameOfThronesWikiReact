import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Houses from './stateful-components/Houses';
import './GOT-App.css';

class GOTApp extends Component {
  constructor() {
    super();
    this.state = { // app state
      appTitle: `Alex's Game of Thrones Wiki :)`,
    };
  }

  render() {
    return (
      <Router>
        <div className="GOT-App">
          <div className="ui inverted menu">
            <Link to="/" className="header item">{this.state.appTitle}</Link>
            <Link to="/houses" className="item">Houses</Link>
            <Link to="/characters" className="item">Characters</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/houses" component={Houses} />
        </div>
      </Router>
    );
  }
}

export default GOTApp;
