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
                    <a href="product.html">
                        <img className="medium" src="./images/p1.jpg" alt=""/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
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
  one cart by using map functions to convert JS items (from data.js) to HTML elements
2.If you want to put Javascript code inside your react code, use curly braces (line no. 18)
3.React helps in creating large web apps that can change data without reloading the page
  and affecting the user interface
4. 



--*/