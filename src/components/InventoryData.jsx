import React, { useState, useEffect } from 'react';
import data from '../data.json';

export const InventoryData = ({ selectedCategory }) => {
  const [inventoryValue, setInventoryValue] = useState('0.00');
  const [totalUnits, setTotalUnits] = useState(0);
  useEffect(() => {
    if (selectedCategory !== 'All') {
      const filteredItems = data.filter(
        (item) => item.category === selectedCategory
      );
      const filteredUnits = filteredItems.reduce(
        (acc, product) => acc + product.units,
        0
      );
      setTotalUnits(filteredUnits);
      const inventoryValue = filteredItems
        .reduce(
          (acc, item) =>
            acc + parseFloat(item.price.replace('$', '')) * item.units,
          0
        )
        .toFixed(2);
      setInventoryValue(inventoryValue);
    } else {
      const inventoryValue = data
        .reduce(
          (acc, item) =>
            acc + parseFloat(item.price.replace('$', '')) * item.units,
          0
        )
        .toFixed(2);
      setInventoryValue(inventoryValue);
      const totalUnits = data.reduce((acc, product) => acc + product.units, 0);
      setTotalUnits(totalUnits);
    }
  }, [selectedCategory]);

  return (
    <div style={{ margin: '10px' }}>
      <h2 style={{ textAlign: 'center', margin: '8px' }}>
        Category: {selectedCategory ? selectedCategory : 'All'}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>Inventory:</h3>
          <p>{totalUnits.toLocaleString()}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>Value</h3>
          <p>
            $
            {parseFloat(inventoryValue).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
