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
Notes on product screen

1. Products should be loaded from data.js. To do this, use the function:
        const product = data.product (line 5)
2. Find is the 














---*/