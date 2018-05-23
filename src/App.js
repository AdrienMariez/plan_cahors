import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map_cahors from './components/map.js';
import Categories from './components/categories_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with leaflet</h1>
        </header>
        <div>
        <Categories/>
        </div>
        <div>
        <Map_cahors/>

        </div>
      </div>
    );
  }
}

export default App;
