import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import PlaceDisplay from './place_display.js';
const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const mapCenter = [44.45326626477771, 1.4361190795898438];
const zoomLevel = 12;

class MapCahors extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // console.log(this.props.x,"this.props.x");
        
        return (

            <div>
                <div>
                    <Map
                        center={mapCenter}
                        zoom={zoomLevel}
                    >
                        <TileLayer
                            attribution={stamenTonerAttr}
                            url={stamenTonerTiles}
                        />
                         {this.props.x &&
                            <PlaceDisplay key={this.props.x} x={this.props.x} emptyArray = {[]} /> 
                        }
                        
                    </Map>
                </div>
                <div id='marker'>
                   
                </div>
            </div>
        );
    }
}

export default MapCahors;