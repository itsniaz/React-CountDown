import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter delay="100"/>
        <Counter delay="200"/>
        <Counter delay="300"/>
      </div>
      );
  }
}

export default App;
