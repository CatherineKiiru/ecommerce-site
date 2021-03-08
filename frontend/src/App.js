import React from 'react';

function App() {
  return (
    <div class="grid-container">
    <header class="row">  <!--the two divs within the header are the child of the header-->
        <div>
            <a class="brand" href="index.html">amazona</a>
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in</a>
        </div>
    </header>
    <main>
        <div class="row center"> 
            <div class="card">
                <a href="product.html">
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>
            <div class="card">
                <a href="product.html">
                    
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star-half-o"></i></span>
                        <span><i class="fa fa-star-o"></i></span> 
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>

            <div class="card">
                <a href="product.html">
                  
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>

            <div class="card">
                <a href="product.html">
                    
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>

            <div class="card">
                <a href="product.html">
                    
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>

            <div class="card">
                <a href="product.html">
                    
                    <img class="medium" src="./images/p1.jpg" alt="">
                </a>
                <div class="card-body">
                    <a href="product.html">
                        <h2>Nike Slim shirts</h2>
                    </a>
                    <div class="rating">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                    </div>
                    <div class="price">$120</div>
                </div>
            </div>
        </div>
    </main>
    <footer class="row center">All rights reserved</footer>
</div>
  );
}

export default App;
