import React from 'react';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id)
    if(!product){
        return <div>Product Not Found</div>;
    }
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
Notes on product screen April 27th: building the product screen:

1. The product screen should show specific product images, details and a box that indicates the action 
    a user should execute on that page.
2. To do this, go to the return div and set the class name to row, then create 3 columns (line 7)
    The row is the main container that will house the columns.
    Define the first column to 2 columns i.e. col-2. This will occupy twice the width of the screen
3. To display the image, set the image tag as product.image and source as product.image and alt text to 
    product.name
4. Product image should be loaded from data.js.Ensure to import data from data.js by typing
    'import data from '../data'; at the top of ProductScreen.js 
    To load products from data.js, use this function (line 5):
    const product = data.products.find()
5. Find function is an array function that finds elements based on the criteria that you define.
    const product = data.products.find(x => x._id === props.match.params.id). 
    This criteria means you're searching for x._id.
    This is the id for products inside the array above and you are comparing
    (===) the id with props.match.params.id - pass props as a parameter for ProductScreen
        ProductScreen(props)
6. What does props.match.params.id mean? This is the exact value under App.js
    that users enter in the first route. When a user clicks on a specific product,
    props.match.params.id is the value at the end of the product's url
7. If the product does not exist, use this function to return a 'Product not found' message:
        if(!product){
            return <div>Product Not Found</div>
        }
    Otherwise, if the product exists, the browser will render the product information
8. 














---*/