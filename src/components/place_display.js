// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Popup } from 'react-leaflet';
// import L from 'leaflet';
import places from '../places.json'
import DivIcon from 'react-leaflet-div-icon'

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
                            if (children.id === ids[1]) {
                                // console.log(children.name)
                                tempPosition = this.processPlaces(children.icon, children.places, tempPosition, parent.color)
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



    processPlaces(childrenIcon, childPlaces, tempPosition, parentColor) {

        childPlaces.forEach(element => {
            // console.log(childrenIcon)
            tempPosition.push({ lat: element.lat, lon: element.lon, name: element.name, description: element.description, childrenIcon: childrenIcon, parentColor: parentColor });
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
                        var x = 0;
                        for (let i of coord) {
                        //     var __html = require('../svg/' + i.childrenIcon);
                        //     var template = { __html: __html };
                        //     console.log(template);
                            x++;
                            temp.push(

                                <DivIcon
                                    key={x}
                                    position={[i.lat, i.lon]}>
                                    <svg
                                    fill={i.parentColor}width="120" height="120" viewBox="0 0 768 768" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="160" cy="160" r="50"/>
                                    </svg>


                              
                                    <Popup>
                                        <span>
                                            <h5>
                                                {i.name}
                                            </h5>
                                            <span>
                                                {i.description}
                                            </span>
                                        </span>

                                    </Popup>
                                </DivIcon>
                            );
                        }
                        return temp;
                    })()}
                </div>

            </div>
        );
    }
}

export default PlaceDisplay;



{/*


{(() => {
var temp = [];
for (let i of coord) {
console.log(i.parentColor);


const iconSubcat = new L.Icon({
iconUrl: require('../svg/' + i.childrenIcon),
iconAnchor: null,
shadowUrl: null,
shadowSize: null,
shadowAnchor: null,
iconSize: new L.Point(60, 75),

});
temp.push(

<Marker key={i.id}
position={[i.lat, i.lon]}
icon={iconSubcat}
>
<Popup>
    <span>
        <h5>
            {i.name}
        </h5>
        <span>
            {i.description}
        </span>
    </span>

</Popup>
</Marker>
);
}
return temp;
})()} */}