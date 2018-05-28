import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import MapCahors from './components/map.js';
import places from './places.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: false,
    }
  }

  subcategoryClick(e, x) {


    // needed form reloading

    this.setState({ request: false })

    if (this.state[x.id]) {
      this.setState({ [x.id]: false });
      e.target.style.color = 'black';
      // console.log("black");
    }
    else {
      this.setState({ [x.id]: true });
      e.target.style.color = 'red';
      // console.log("red");
    }

    this.setState({ request: true })

  }

  createElement(id, name) {
    return <div key={id} onClick={(e) => this.subcategoryClick(e, { id })}>{name}</div>
  }

  createMenu() {
    var htmlList = [];
    for (let i = 0; i < places.length; i++) {
      htmlList.push(<h3 key={places[i].id}>{places[i].name}</h3>);
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
              <MapCahors x={this.state} />
            }
            {this.state.request !== true &&
              <MapCahors />

            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
