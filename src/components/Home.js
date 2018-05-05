import React from 'react';
import logo from '../logo.svg';
import '../GOT-App.css';

const Home = () => (
  <div>
    <h1>Welcome to the Game of Thrones Wiki Home Page!</h1>
    <h3>Powered By React</h3>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

export default Home;
