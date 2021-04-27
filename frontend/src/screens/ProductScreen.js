import React from 'react';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id)
    return <div>
        <div className="row">
            <div className="col-2">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">

            </div>
            <div className="col-1">

            </div>
        </div>
    </div>
    
}




/*--
Notes on product screen April 27th

The product screen should show product image, details and a box that indicates the action 
a user should execute on that page.
To do this, go to the return div and set the class name to row, then create 3 columns (line 7)
The row is the main container that will house the columns.
Define the first column to 2 columns i.e. col-2. This will occupy twice the width of the screen

Products should be loaded from data.js. To do this, use the function:
        const product = data.product (line 5)
Find is the 














---*/