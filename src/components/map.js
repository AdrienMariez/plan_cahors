import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Places_display from './places_display.js';
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [44.45326626477771, 1.4361190795898438];
const zoomLevel = 12;

class Map_cahors extends Component {
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
                    </Map>
                </div>
                <div id='marker'>
                    <Places_display />
                </div>
            </div>

        );
    }
}
export default Map_cahors;