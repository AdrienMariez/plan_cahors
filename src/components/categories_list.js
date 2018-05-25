// // info needed : JSON : categories names / subcategories names / hierarchy

// // ONCLICK category : displays subcategories in the list
// // ONCLICK subcategory : send to COMPONENT places_display.js

// //RETURNS html list
// //needed : id of subcategories in this format : id="categoryid/subcatid"

// import React, { Component } from 'react';
// import PlaceDisplay from './place_display.js';
// import places from '../places.json'


// // /!\
// //  needs new method to set all states of subcategories at false when the json is processed
// // /!\



// const Categories = ({ handleClick }) => {
//     var starchild
//     var listItems;
//     return (
//         <div id='azerty' className='bonjouru'>


//             {
//                 places.map((parent, i) => {

//                     starchild = [];
//                     // console.log(parent.name);
//                     parent.children.map((child, y) => {
//                         // console.log(child);
//                         var li = document.createElement('li');
//                         li.setAttribute('className', "subCategories")
//                         li.setAttribute('id', parent.id + '/' + child.id)
//                         li.setAttribute('onClick', "{() => handleClick(" + li.id + ")}")

//                         li.innerHTML = child.name;
//                         starchild.push(li);
//                         // console.log("starchild in loop : ",starchild)
//                         listItems = starchild.map((list) =>
//                             <ul>{list}</ul>
//                         );
//                     });
//                     // console.log("listItems before return : ",listItems)
                
//                 })



//             }

//             <ul>
//                 <li><button id="123" onClick={() => handleClick("123")}>subcat1</button></li>
//                 <li><button id="456" onClick={() => handleClick("456")}>subcat2</button></li>
//                 <li><button id="789" onClick={() => handleClick("789")}>subcat3</button></li>
//             </ul>

//         </div>
//     )

// }

// export default Categories;