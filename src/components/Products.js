import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '₹1,000', img: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: '₹2,000', img: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: '₹3,000', img: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', price: '₹4,000', img: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;