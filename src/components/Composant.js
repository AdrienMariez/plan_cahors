// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker_html: '',
            bonjour: ''
        }
    }
    
    

    // shouldComponentUpdate() {

    //     console.log("should",this.props.x)
    // }
   componentWillMount() {
        var props = ' ';

        console.log("will mount", this.props.x)


        for (const key in this.props.x) {
         props += this.props.x[key];

        }
        this.setState({ marker_html: props })
    }


    // componentDidMount() {
    //     var props = ' ';

    //     console.log("did mount", this.props.x)


    //     for (const key in this.props.x) {
    //      props += this.props.x[key];

    //     }
    //     this.setState({ bonjour: props })
    // }

    componentWillReceiveProps(newProps) {
        var placeho = ' ';

        console.log("will receive props", newProps.x)


        for (const key in this.props.x) {
            placeho += newProps.x[key];
            console.log(placeho)

        }
        this.setState({ marker_html: placeho })
    }
    // /!\
    //  needs new method to set all states of subcategories at false when the json is processed
    // /!\

    render() {

        document.getElementById('marker').innerHTML = this.state.marker_html
        return (
            <div>


                {console.log("composant", this.props.x)

                }
                {this.state.bonjour}
            </div>
        );
    }
}

export default Categories;