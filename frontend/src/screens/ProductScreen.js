import React from 'react';
import {Link} from 'react-router-dom'
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id)
    if(!product){
        return <div>Product Not Found</div>;
    }
    return <div>
        <Link to="/">back to result</Link>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} 
                alt={product.name}
                ></img>
            </div>
            <div className="col-1">
                <ul>
                    <li><h1>{product.name}</h1></li>
                    <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
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

ALWAYS REMEMBER TO MANUALLY IMPORT FROM DESIRED FILE OR LINK (Top of the product screen)

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

11. Under the 2nd list (li), To render the stock status(Whether item is in stock or unavailable), use conditional rendering i.e. if product.countInStock is greater than zero, render the span 
        {product.countInStock>0? <span className="success"}></span>};
        To show no stock, put a colon after the span above and set another span to show unavailability i.e.
        <span className="error">Unavailable</span>
        Go to data.js and add the "CountInStock" property under price and specify the number of items for each product

12. Under the 3rd list, we'll have a button for users to click. Set the classname as primary block i.e.
        Primary class for gold color and block class for the button to occupy the full width (line 43-45)

May 17th - continuation
13. To stick the information items to the top, add a 'top' class to the row class name (line 10)
        Then go to index.css and add a row.top style to align items to the top i.e.
        .row.top{align-items:flex-start} (refer to index.css,line no. 83)

May 20th - continuation
14. To add "Back to result":
add this tag: "<Link to="/">back to result</Link>"" in line 12, just before row-top.When you get an error page,
        restart react by closing the current terminal (CTRL C) the typing in
        the new terminal "npm start"
15. To style the column information, got to index.css. Below row.top, type:
            .col-1{
                flex: 1 1 25rem *This is shorthand for flex: grow shrink basis. The second 1 makes the column shrinkable, 25rem sets the width of this column*
            }.
        Copy the style above for column 2 like this:
            .col-2{
                flex: 2 1 50rem;
            } 
16. To remove bullet points from the column information, use this style (line 56):
            ul{
                padding: 0;
                margin: 0;
                list-style-type: none;
            } 
17. For all list items, create a margin top to 1rem to create vertical space between items i.e. 
            li {
                margin-top: 1rem
            }
July 16th - 
18. Added CountinStock property to data.js. Details added in note no. 11

July 21
19. Changed the color of the 'add to cart button, refer to index.css button element
    Added a hover element to the button
    Also made the images to be responsive to screen size by adding the element below
    img.large{
    width: 100%;
    }
20. This lesson focused on adding routing to the product page. We used react router to implement routing in our web application. 
    1. We create a single page application to create multiple routes that renders different components of our web application.
    2. We added homescreen
    3. Added product screen
    4. Updated data.js
    5. Added countinstock as a new property to the products
    6. In app.js, we imported browser routers & routes from react-router-dom
    7. We defined 2 route paths for home screen and product screen
    8. We installed a new react-router-dom package in json
    9. In index.css, we styled lists, unordered lists, buttons, rows and columns 

21. BUILDING THE BACKEND WITH NODE.JS - the plan
    1. Create a Node.js server (place in the root folder i.e. ecommerce-site)
    2. Run npm init in root folder (type npm init and press enter on all queries)
    3. Create a backend folder within the root folder
    4. Create server.js file. This file is the entry point for our backend application
    5. Create an express server by typing "npm install express" command. Express is a node package that helps create easy servers
       update package.json set type:module
       Add .js to imports
       npm install express
    6. add start command as node backend/server.js
    8. Require express
    9. create route for / Server is ready
    10. Move products.js from frontend to backend
    11. create route for /api/products
    12. return products
    13. run npm start 

    
---*/