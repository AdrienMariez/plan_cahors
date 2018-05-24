import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Map_cahors from './components/map.js';
import places from './places.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: false,
      // categories: '',
      // cat: ''
    }
  }

  subcategoryClick(e, x) {
    // needed form reloading

    this.setState({ request: false })

    if (this.state[x.id]) {
      this.setState({ [x.id]: false });
      e.target.style.color = 'black';
      
    }
    else {
      this.setState({ [x.id]: true });
      console.log('effetgraph')
      e.target.style.color = 'red';
    }

    this.setState({ request: true })
  }

  createElement(id, name) {
    return <div onClick={(e) => this.subcategoryClick(e, { id })}>{name}</div>
  }

  createMenu() {
    var htmlList = [];
    for (let i = 0; i < places.length; i++) {
      htmlList.push(<h3>{places[i].name}</h3>);
      for (let y = 0; y < places[i].children.length; y++) {
        var id = places[i].id + '/' + places[i].children[y].id;
        htmlList.push(this.createElement(id, places[i].children[y].name));
      }
    }
    return htmlList
  }

  render() {

    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}
        <div className="displayFlex">
          <div className='Menu'>
            {this.createMenu()}

          </div>
          <div id="map">

            {this.state.request === true &&
              <Map_cahors x={this.state} />
            }
            {this.state.request !== true &&
              <Map_cahors />
            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
