import React, { Component } from 'react';
import House from './components/House';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl: 'https://www.anapioficeandfire.com/api/',
      appTitle: 'Welcome to Game of Thrones Wiki :)',
      pagination: {
        page: 1,
        pageSize: 10
      }
    };
  }

  async componentWillMount() {
    const result 
      = await fetch(`${this.state.apiUrl}houses?page=${this.state.pagination.page}&pageSize=${this.state.pagination.pageSize}`);
    const data = await result.json();
    this.setState({ houses: data });
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.appTitle}</h1>
        </header>
        <div className="ui equal width celled grid">
          {this.state.houses
            ? this.state.houses.map(house => {
            return <House 
              key={house.url} 
              houseName={house.name}
              houseWords={house.coatOfArms}
            />
          })
            : <div className="ui active transition visible inverted dimmer">
                <div className="ui inverted text loader">Loading...</div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
