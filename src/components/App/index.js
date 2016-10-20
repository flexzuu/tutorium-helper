import React from 'react';
import Deadlines from 'components/Deadlines';
import logo from 'assets/logo.svg';
import './style.css';

export default () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Tutorium - Helper</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Deadlines />
  </div>
);
