import React from 'react';
import data from './data';
function App() {
  return (
<div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">Shoppa</a>
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in</a>
        </div>
    </header>
    <main>
        <div> 
            <div className="row center">
                {data.products.map((product) => (
                    <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt="product._id"/>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">$120</div>
                    </div>
                </div> 
                    ))
                } 
                
            </div>
        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
  );
}
export default App;

/*--Notes:
1.You don't have to have multiple static carts: You can have
  one cart by using map functions to convert JS product items (from data.js) to HTML elements.
  So for each product, convert them to the div below the map function i.e.
  {data.products.map((product) => ( insert div elements );}
2.If you want to put Javascript code inside your react code, use curly braces (line no. 18)
3.React helps in creating large web apps that can change data without reloading the page
  and affecting the user interface
4.Remember to update the static text under heading 2 to the dynamic one
  that comes from the product object i.e. {product.name} (line 25)
5.Import your data by typing import data from './data'; at the top of App.JS file (line 2)
6.When you import from a file, you need to go to the file and export the data
  Type export default data; at the end of the file.You data will now be displayed in 
  your React App. You will now see the arrays from your data file in the final result.
7.To update other fields in your data file, go to your App.JS file 
  and inside your map function, set key (within the div element) to key={product._id} (line 19)
8.When you're using the map function in React, the first element after map should have a key attribute 
  i.e. key={product._id} and the value of that key should be different because in the data.JS file,
  all IDs (_id:'1','2')are unique. 
9.Note: In React, to convert static data to dynamic data, use curly braces
10.Change the href to {`/product/${product._id}`} so as to enter dynamic data (line 20)
   Here, you are setting the image URL to the product for the specific id.
   Copy the href info and paste it for the product name (line 24) because
   image and name should link to the same location. Failure to do this will result in your data
   not compiling in React
11. After the above, you should update the image source (src)

--*/