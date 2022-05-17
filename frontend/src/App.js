import React from 'react';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
     <BrowserRouter>
<div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">Shoppa</Link>
        </div>
        <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/product"></Link>
        </div>
    </header>
    <main>
    
      <Route path="/" component={HomeScreen}></Route>  
        
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
</BrowserRouter>
  );
}
export default App;



