// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import places from '../places.json'

// const mapPos = [44.45326626477771, 1.4361190795898438];

class PlaceDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker_position: [],
            click: 0,
        }
    }


    sortItems(newProps) {

        delete newProps.x['request']

        var answers = newProps.x
        var tempPosition = this.props.emptyArray;
        var atLeastOneItem = false;

        // find places to display
        for (const state in answers) {

            if (answers[state]) {

                atLeastOneItem = true;

                var ids = state.split('/')
                for (let i = 0; i < places.length; i++) {
                    var parent = places[i];
                    if (parent.id === ids[0]) {

                        for (let j = 0; j < parent.children.length; j++) {
                            var children = parent.children[j];
                            if (children.id == ids[1]) {
                                tempPosition = this.processPlaces(children.places, tempPosition)
                            };
                        }
                    };
                }
            }

        }
        if (atLeastOneItem === false)
            return this.props.emptyArray
        else return tempPosition

    }


    // /!\
    //  needs new method to set all states of subcategories at false when the json is processed
    // /!\

    processPlaces(x, tempPosition) {

        x.forEach(element => {
            tempPosition.push([element.lat, element.lon]);

        });
        return tempPosition
    }

    render() {
        var coord = this.sortItems(this.props);
        return (
            <div className='markers'>

                <div>

                    {(() => {
                        var temp = [];
                        for (let i of coord) {
                            temp.push(<Marker key={i} position={i}>
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

            </div>
        );
    }
}

export default PlaceDisplay;