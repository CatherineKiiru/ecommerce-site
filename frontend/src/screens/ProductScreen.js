import React from 'react';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id)
    if(!product){
        return <div>Product Not Found</div>;
    }
    return <div>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li><h1>{product.name}</h1></li>
                    <li><rating rating={product.rating} numReviews={product.numReviews}></rating></li>
                    <li>Price : ${product.price}</li>
                    <li>Description: <p>{product.description}</p></li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                     {product.countInStock>0?(
                                     <span className="success">In Stock</span>
                                     ) : (
                                     <span className="error">Unavailable</span>
                                     )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
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

May 12th - continuation
8. Add lists to the first information column(first col-1); ratings, price and product description
        (Line 14-21)
9. The second col-1 is the action column i.e. where users click on add to cart.
        Set the className of the div to card card-body. This class is so that you can add a border and padding (line 22-33)
        to the border, respectively.
10. Under the 1st list (li), set the class name to row because you'll put price label and price value next to each other. (Line 26-28)
        This requires you add another div for Price label and price value

11. Under the 2nd list (li), To render the status, use conditional rendering i.e. if product.countInStock is greater than zero, render the span 
        {product.countInStock>0? <span className="success"}></span>};
        To show no stock, put a colon after the span above and set another span (line 35-39)

12. Under the 3rd list, we'll have a button for users to click. Set the classname as primary block i.e.
        Primary class for gold color and block class for the button to occupy the full width (line 43-45)

May 17th - continuation
13. To stick the information items to the top, add a 'top' class to the row class name (line 10)
        Then go to index.css and add a row.top style to align items to the top i.e.
        .row.top{align-items:flex-start}









---*/