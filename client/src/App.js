import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ChannelsList = () => (
  <ul className="Item-list">
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Apollo</h2>
        </header>
        <ChannelsList />
      </div>
    );
  }
}

export default App;