// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import PlaceDisplay from './place_display.js';



// /!\
//  needs new method to set all states of subcategories at false when the json is processed
// /!\
const Categories = ({ handleClick }) => {

    return (
        <div> 
            {/* <button id="123" onClick={() => handleClick("123")}>subcat1</button> */}

            <ul>
                <li><button id="123" onClick={() => handleClick("123")}>subcat1</button></li>
                <li><button id="456" onClick={() => handleClick("456")}>subcat2</button></li>
                <li><button id="789" onClick={() => handleClick("789")}>subcat3</button></li>
            </ul>
        </div>
    );
}

export default Categories;