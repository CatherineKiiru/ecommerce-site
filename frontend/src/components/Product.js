import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props; /*defines product into curly brackets so as to fetch product from props above */
    return (
        <div>
            <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img 
                        className="medium" 
                        src={product.image} 
                        alt={product.name}
                        />
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                <h2>{product.name}</h2>
                        </a>
                        <Rating   /* This is the usage of the rating component */
                         rating={product.rating} 
                         numReviews={product.numReviews} /*for numReviews,inside Rating.js, add a span, after the last span & enter <span>{numReviews + 'reviews'}</span> */
                        ></Rating> 
                        
                <div className="price">${product.price}</div>
                    </div>
                </div>  
        </div>
    )
}

