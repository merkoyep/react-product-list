import React from 'react';

export const ProductCard = ({ product, setCartItems }) => {
  const handleClick = () => {
    setCartItems((prevItems) => [...prevItems, product]);
    console.log('added to cart');
  };
  return (
    <div className='ProductCardContainer'>
      <h2 style={{ textAlign: 'center' }}>{product.name}</h2>
      <p className='productDescription'>{product.description}</p>
      <section className='cardLineItems'>
        <div className='productLineItem'>
          <h5>Category: </h5>
          <p>{product.category}</p>
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
      </section>

      <button id='addToCart' onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};
