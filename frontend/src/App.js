

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  return (
     <BrowserRouter>
<div className="grid-container">
    <header className="row">
        <div>
            <link className="brand" href="/">Shoppa</link>
        </div>
        <div>
            <link to="/cart">Cart</link>
            <link to="/signin">Sign in</link>
        </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} ></Route>
      <Route path="/" component={HomeScreen} exact></Route>  
        
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}
export default App;



