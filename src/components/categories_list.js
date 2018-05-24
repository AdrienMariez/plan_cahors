// info needed : JSON : categories names / subcategories names / hierarchy

// ONCLICK category : displays subcategories in the list
// ONCLICK subcategory : send to COMPONENT places_display.js

//RETURNS html list
//needed : id of subcategories in this format : id="categoryid/subcatid"

import React, { Component } from 'react';
import PlaceDisplay from './place_display.js';
import places from '../places.json'


// /!\
//  needs new method to set all states of subcategories at false when the json is processed
// /!\



const Categories = ({ handleClick }) => {
    var starchild
    var listItems
    var tagLi;
    return (
        <div id='azerty' className='bonjouru'>


            {
                places.map((parent, i) => {
                    // starchild = document.createElement('ul');

                    starchild = [];
                    // console.log(parent.name);
                    parent.children.map((child, y) => {
                        // console.log(child);
                        var li = document.createElement('li');
                        li.setAttribute('className', "subCategories")
                        li.setAttribute('id', parent.id + '/' + child.id)
                        li.setAttribute('onClick', "{() => handleClick(" + li.id + ")}")

                        li.innerHTML = child.name;
                        // starchild += "<li className='subCategories' id = " + parent.id + '/' + child.id + ">";
                        // starchild += child.name;
                        // starchild += "</li>";
                        // starchild.appendChild(li);
                        starchild.push(li);
                        console.log("starchild in loop : ",starchild)
                        listItems = starchild.map((list) =>
                            <ul>{list}</ul>
                        );
                    });
                    console.log("listItems before return : ",listItems)
                   
                    //  return <div><h3>{parent.name}</h3>{listItems}</div>
                })



            }
            {tagLi = document.getElementsByTagName("li")}
            {/* {console.log(tagLi)} */}
            {/* {Array.from(tagLi).forEach(function(item){
                console.log(tagLi[item])}
            )} */}
            {Array.prototype.forEach.call(tagLi, function (el) {
                console.log("reuters");
            })
            }

            <ul>
                <li><button id="123" onClick={() => handleClick("123")}>subcat1</button></li>
                <li><button id="456" onClick={() => handleClick("456")}>subcat2</button></li>
                <li><button id="789" onClick={() => handleClick("789")}>subcat3</button></li>
            </ul>

        </div>
    )

}

export default Categories;