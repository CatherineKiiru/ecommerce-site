import React from 'react'

export default function Rating(props) { /*create Rating component and pass props because we need to read 2 values i.e. rating & numReviews*/
    const {rating, numReviews} = props; /* insert your rating div from the product.JS file below*/
    return ( 
        <div className="rating">  
            <span>
                <i className= { 
                    rating >= 1
                    ?"fa fa-star"
                    : rating>=0.5
                    ? "fa fa-star-half-o"
                    :"fa fa-star-o"
                    }
                ></i>
            </span>
            <span>
                <i className= { 
                    rating >= 2
                    ?"fa fa-star"
                    : rating>=1.5
                    ? "fa fa-star-half-o"
                    :"fa fa-star-o"
                    }
                ></i>
            </span>
            <span>
                <i className= { 
                    rating >= 3
                    ?"fa fa-star"
                    : rating>=2.5
                    ? "fa fa-star-half-o"
                    :"fa fa-star-o"
                    }
                ></i>
            </span>
            <span>
                <i className= { 
                    rating >= 4
                    ?"fa fa-star"
                    : rating>=3.5
                    ? "fa fa-star-half-o"
                    :"fa fa-star-o"
                    }
                ></i>

            </span>
            <span>
                <i className= { 
                    rating >= 5
                    ?"fa fa-star"
                    : rating>=4.5
                    ? "fa fa-star-half-o"
                    :"fa fa-star-o"
                    }
                ></i>
            </span>
            <span>{numReviews +  ' reviews'}</span>
         </div>
    )
}