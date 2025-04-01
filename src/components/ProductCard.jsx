import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className='ProductCardContainer'>
      <h2 style={{ textAlign: 'center' }}>{product.name}</h2>
      <div className='productLineItem'>
        <h5>Category: </h5>
        <p>{product.category}</p>
      </div>
      <div className='productLineItem'>
        <h5>Description: </h5>
        <p>{product.description}</p>
      </div>
      <div className='productLineItem'>
        <h5>Price: </h5>
        <p>{product.price}</p>
      </div>
      <div className='productLineItem'>
        <h5>Rating: </h5>
        <p>{product.rating}</p>
      </div>
      <div className='productLineItem'>
        <h5>Units: </h5>
        <p>{product.units}</p>
      </div>
    </div>
  );
};
