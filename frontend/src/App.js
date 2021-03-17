import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Product from './components/Product';
import data from './data';

function App() {
  return (
     <BrowserRouter>
<div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Shoppa</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
        </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>  
        <div> 
            <div className="row center">
                {data.products.map((product) => (
                  <Product key={product._id} product={product}></Product> 
                    ))
                }  
            </div>
        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}
export default App;

/*--Lesson 1 Notes:
1. You don't have to have multiple static carts: You can have
   one cart by using map functions to convert JS product items (from data.js) to HTML elements.
   So for each product, convert them to the div below the map function i.e.
   {data.products.map((product) => ( insert div elements );}

2. If you want to put Javascript code inside your react code, use curly braces (line no. 18)
3. React helps in creating large web apps that can change data without reloading the page
   and affecting the user interface

4. Remember to update the static text under heading 2 to the dynamic one
   that comes from the product object i.e. {product.name} (line 25)

5. Import your data by typing import data from './data'; at the top of App.JS file (line 2)
6. When you import from a file, you need to go to the file and export the data

   Type export default data; at the end of the file.You data will now be displayed in 
   your React App. You will now see the arrays from your data file in the final result.
7. To update other fields in your data file, go to your App.JS file

   and inside your map function, set key (within the div element) to key={product._id} (line 19)
8. When you're using the map function in React, the first element after map should have a key attribute 
   i.e. key={product._id} and the value of that key should be different because in the data.JS file,
   all IDs (_id:'1','2')are unique.

9. Note: In React, to convert static data to dynamic data, use curly braces

10.Change the href to {`/product/${product._id}`} so as to enter dynamic data (line 20)
   Here, you are setting the image URL to the product for the specific id.
   Copy the href info and paste it for the product name (line 24) because
   image and name should link to the same location. Failure to do this will result in your 
   data not compiling in React
   
11.After the above, you should update the image source (src) to product.image and alt to 
   product.name

Lesson 1 review:
1. We created a react app using npx create react apt command
2. We set the name of the application to 'frontend' 
3. We moved the content of static HTML document that we created to App.JS inside
   React application and changed the static elements to dynamic ones.

Lesson 2 notes:
   Modular & component based code - this is highly organized code that subdivides
   a computer program into seperate sub-programs. Known as modular programming/architecture,
   it involves seperating a program's functions into independent pieces, each containing all 
   the parts needed to execute a single aspect of the functionality.

Lesson 2 review:
1. We created product component through Product.js
2. We created rating component through Rating.js
3. In app.js we used product component and passed properties (props)
   to product component (line 21)
4. Finally, we set the last span in the rating component (Rating.js) to dark grey

Lesson 3 notes:
1. This part involves creating a product details screen. There will be 2 screens i.e. 
   home screen & product details screen using React Router DOMS to creat routes in React application.
2. Start by installing react-router-dom then go to App.js and wrap the whole div in the <BrowserRouter></BrowserRouter>
3. Proceed to create routes in the main section (line 20)
4. Line 21 - set the attribute to exact which means that only if url is exactly equal to "/", the render the element in line 21
5. Line 20 - :id is a parameter and it contains the id of your product.So when a user enters this product id, you'll render the component indicated
--*/