// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import places from '../places.json'

const mapPos = [44.45326626477771, 1.4361190795898438];

class PlaceDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker_html: '',
            marker_position: [],

        }
    }


    componentWillMount() {
        this.setState({ marker_position: [] })

        var props = ' ';

        if (this.props.x) {

            var answers = delete this.props.x['request']


        }
        else this.setState({ marker_html: '' })
    }

    componentWillReceiveProps(newProps) {

        this.setState({ })

        delete newProps.x['request']
        var answers = newProps.x

        // find places to display
        for (const state in answers) {
            if (answers[state]) {


                var ids = state.split('/')
                for (let i = 0; i < places.length; i++) {
                    var parent = places[i];
                    if (parent.id === ids[0]) {


                        for (let j = 0; j < parent.children.length; j++) {

                            var children = parent.children[j];
                            if (children.id == ids[1]) {
                                this.processPlaces(children.places)

                            };

                        }
                    };

                }

            }

        }

    }


    // /!\
    //  needs new method to set all states of subcategories at false when the json is processed
    // /!\

    processPlaces(x) {
    
        var tempPosition = this.props.emptyArray;
        x.forEach(element => {
            tempPosition.push([element.lat, element.lon]);

        });

        this.setState({ marker_position: tempPosition })

    }

    render() {

        return (
            <div className='markers'>
                <div>

                    {(() => {
                        var temp = [];
                        for (let i of this.state.marker_position) {

                            temp.push(<Marker position={i}>
                                <Popup>
                                    <span>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                </span>
                                </Popup>
                            </Marker>);
                        }

                        return temp;
                    })()}
                </div>
                {/* <Marker position={mapPos}>
                    <Popup>
                        <span>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </span>
                    </Popup>
                </Marker> */}
            </div>
        );
    }
}

export default PlaceDisplay;