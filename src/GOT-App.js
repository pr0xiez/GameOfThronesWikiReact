import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Houses from './stateful-components/Houses';
import Footer from './components/Footer';
import HouseDescription from './stateful-components/House-Description';
import './GOT-App.css';
import Characters from './stateful-components/Characters';

class GOTApp extends Component {
  constructor() {
    super();
    this.state = { // app state
      appTitle: 'Game of Thrones Wiki',
    };
  }

  render() {
    return (
      <Router>
        <div className="GOT-App">
          <div className="ui inverted menu">
            <Link to="/" className="header item" href="/">{this.state.appTitle}</Link>
            <Link to="/houses" className="item" href="/houses">Houses</Link>
            <Link to="/characters" className="item" href="/characters">Characters</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/houses" component={Houses} />
          <Route path="/houses/:id" component={HouseDescription} />
          <Route path="/characters" component={Characters} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default GOTApp;
