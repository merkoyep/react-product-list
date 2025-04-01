import React from 'react';

export const CategoryButton = ({
  catName,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <button
      style={
        selectedCategory === catName
          ? { backgroundColor: 'gray', color: 'white' }
          : null
      }
      onClick={() => setSelectedCategory(catName)}
    >
      {catName}
    </button>
  );
};
