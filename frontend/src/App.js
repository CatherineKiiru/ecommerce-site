import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  return (
     <BrowserRouter>
<div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" href="/">Shoppa</Link>
        </div>
        <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign in</Link>
        </div>
    </header>
    <main>
      <Route path="/cart/:id" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} ></Route>
      <Route path="/home/:id" component={HomeScreen} exact></Route>  
        
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}
export default App;



