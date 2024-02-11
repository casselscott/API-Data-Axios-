import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.title}
              className="card-image"
            />
            <div className="card-content">
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <p>Rating: {product.rating.rate}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
