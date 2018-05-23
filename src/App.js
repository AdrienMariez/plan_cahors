import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map_cahors from './components/map.js';
import Categories from './components/categories_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        request: false

    }
}

subcategoryClick(x) {
// needed form reloading
    this.setState({ request: false })
    
    if (this.state[x]) {
        this.setState({ [x]: false });
    }
    else {
        this.setState({ [x]: true });
    }
    
    this.setState({ request: true })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with leaflet</h1>
        </header>
        <div>
          <Categories handleClick={x => this.subcategoryClick(x)} />
        </div>
        <div>

          {this.state.request === true &&
            <Map_cahors x={this.state} />
          }
          {this.state.request !== true &&
            <Map_cahors />
          }


        </div>
      </div>
    );
  }
}

export default App;
