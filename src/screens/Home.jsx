import FormattedData from '../data.js';
import { CategoryButton } from '../components/CategoryButton.jsx';
import data from '../data.json';
import { ProductCard } from '../components/ProductCard.jsx';
import React, { useState, useEffect } from 'react';
import { InventoryData } from '../components/InventoryData';

export const Home = () => {
  const { uniqueCatArray } = FormattedData();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = data.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
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
            selectedCategory
              ? null
              : { backgroundColor: 'gray', color: 'white' }
          }
          onClick={() => setSelectedCategory('')}
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
      </div>
      <div></div>
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
