import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PlaceDisplay from './place_display.js';
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [44.45326626477771, 1.4361190795898438];
const zoomLevel = 12;

class MapCahors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                            <PlaceDisplay x={this.props.x} emptyArray = {[]} /> 
                        }
                        {/* <Marker position={mapCenter}>
                            <Popup>
                                <span>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </span>
                            </Popup>
                        </Marker> */}
                    </Map>
                </div>
                <div id='marker'>
                   
                </div>
            </div>
        );
    }
}

export default MapCahors;