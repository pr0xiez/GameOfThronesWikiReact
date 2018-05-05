import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import GOTApp from './GOT-App';

ReactDOM.render(
  <BrowserRouter>
    <GOTApp />
  </BrowserRouter>,
  document.getElementById('root'),
); // eslint-disable-line