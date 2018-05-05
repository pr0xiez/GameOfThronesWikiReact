import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GOTApp from './GOT-App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <GOTApp />
  </BrowserRouter>, 
  document.getElementById('root')
); // eslint-disable-line