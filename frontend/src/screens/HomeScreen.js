import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';

export default function HomeScreen() {
  const [products, setProducts] = useState ([]);
  useEffect(() =>{
    const fetchData = async () => {
      const { data } = await axios.get ('/api/products');
      setProducts(data);
    };
    fetchData();
  },[]);
  

    return (            
          <div className="row center">
            {products.map((product) => (
                <Product key={product._id} product={product}></Product> 
            ))}  
        </div>          
    );
}