import FormattedData from '../data.js';
import { CategoryButton } from '../components/CategoryButton.jsx';
import data from '../data.json';
import { ProductCard } from '../components/ProductCard.jsx';
import React, { useState, useEffect } from 'react';
import { InventoryData } from '../components/InventoryData';
import { ShoppingCart } from '../components/ShoppingCart';

export const Home = () => {
  const { uniqueCatArray } = FormattedData();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      const filtered = data.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else if (selectedCategory === 'All') {
      setFilteredProducts(data);
    }
  }, [selectedCategory]);
  return (
    <div
      style={{
        width: '75vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <button
          style={
            selectedCategory === 'All'
              ? { backgroundColor: 'gray', color: 'white' }
              : null
          }
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {uniqueCatArray.map((category, index) => (
          <CategoryButton
            key={index}
            catName={category}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
        <button
          style={
            displayCart ? { backgroundColor: 'gray', color: 'white' } : null
          }
          onClick={() => setDisplayCart(!displayCart)}
        >
          Cart
        </button>
      </div>
      <div>
        <div>
          {displayCart && (
            <ShoppingCart items={cartItems} setItems={setCartItems} />
          )}
        </div>
      </div>
      <InventoryData selectedCategory={selectedCategory} />

      <div
        className='productsContainer'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};
