import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = ['Top offers', 'Mobiles', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Grocery'];
  
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <img
            src={`https://via.placeholder.com/50?text=${category}`}
            alt={category}
          />
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
