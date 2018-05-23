// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const mapPos = [44.45326626477771, 1.4361190795898438];

class PlaceDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker_html: '',
            marker_position: '',
        }
    }


    componentWillMount() {
        var props = ' ';

        if (this.props.x) {
            console.log("componentWillMount", this.props.x)

            for (const key in this.props.x) {
                props += this.props.x[key];

            }
            this.setState({ marker_html: props })
        }
        else this.setState({ marker_html: '' })
    }

    componentWillReceiveProps(newProps) {
        var temp = ' ';
        var tempPosition = [ ];

        console.log("componentWillReceiveProps", newProps.x)


        for (const key in this.props.x) {
            temp += newProps.x[key];
            console.log("temp : ", key)

            if (key === "123" && newProps.x[key]) {
                tempPosition.push([44.45326626477771, 1.4161190795898438]);
            }
            if (key === "456" && newProps.x[key]) {
                tempPosition.push([44.50326626477771, 1.4361190795898438]);
            }
            if (key === "789" && newProps.x[key]) {
                tempPosition.push([44.40326626477771, 1.4361190795898438]);
            }

        }
        this.setState({ marker_html: temp })
        this.setState({ marker_position: tempPosition })
    }
    // /!\
    //  needs new method to set all states of subcategories at false when the json is processed
    // /!\

    getPlaces(x) {
        if (x === "123") {
            return [44.45326626477771, 1.4161190795898438];
        }
        if (x === "456") {
            return [44.50326626477771, 1.4361190795898438];
        }
        if (x === "789") {
            return [44.40326626477771, 1.4361190795898438];
        }
    }

    render() {
        // if (document.getElementById('marker')){
        //     document.getElementById('marker').innerHTML = this.state.marker_html
        //     // var log = ''

        //     // document.getElementById('marker').innerHTML = log
        // }


        return (
            <div className='xerox'>
                <div>
                    {(() => {
                        var tempol = [];
                        
                        for (let i of this.state.marker_position) {
                        
                            tempol.push(<Marker position={i}>
                            <Popup>
                                <span>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </span>
                            </Popup>
                        </Marker>);
                        }
                        
                        return tempol;
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