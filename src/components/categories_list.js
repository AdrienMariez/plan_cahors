// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import Composant from './Composant.js'

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: false,

        }
    }

    subcategory_click(x) {
// needed form reloading
        this.setState({ request: false })
        
        if (this.state[x]) {
            this.setState({ [x]: false });
        }
        else {
            this.setState({ [x]: true });
        }
        
        this.setState({ request: true })
    }

    // /!\
    //  needs new method to set all states of subcategories at false when the json is processed
    // /!\

    render() {
        return (
            <div>
                <ul>
                    {console.log("categorie", this.state)}

                    <li><button id="123" onClick={() => this.subcategory_click("123")}>subcat1</button></li>
                    <li><button id="456" onClick={() => this.subcategory_click("456")}>subcat2</button></li>
                    <li><button id="789" onClick={() => this.subcategory_click("789")}>subcat3</button></li>
                </ul>

                {this.state.request === true &&

                    <Composant x={this.state} />
                }
            </div>
        );
    }
}

export default Categories;