import logo from './logo.svg';
import './App.css';
import FormattedData from './data.js';
import { CategoryButton } from './components/CategoryButton';
import data from './data.json';
import { ProductCard } from './components/ProductCard';
import { Home } from './screens/Home.jsx';
function App() {
  const {
    categoryArray,
    uniqueCatArray,
    productsPerCategory,
    priceList,
    priceyProducts,
    inventoryValue,
  } = FormattedData();
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
    >
      <Home />
      {/* <div style={{ display: 'flex', gap: '10px' }}>
        <h2>Category Array</h2>
        {uniqueCatArray.map((category, index) => (
          <CategoryButton catName={category} />
        ))}
      </div>
      {data.map((product) => (
        <ProductCard product={product} />
      ))}
      <div style={{ display: 'flex', gap: '10px' }}>
        <h2>Unique Category Array</h2>
        {uniqueCatArray.map((category, index) => (
          <p key={index}>{category},</p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <h2>productsPerCategory</h2>
        {Object.entries(productsPerCategory).map(([category, count], index) => (
          <p key={index}>
            {category}: {count}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <h2>Price List</h2>
        {priceList.map((item, index) => (
          <p key={index}>
            {item.name}: {item.price}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <h2>Pricey Products</h2>
        {priceyProducts.map((item, index) => (
          <p key={index}>
            {item.name}: {item.price}
          </p>
        ))}
      </div>
      <p>Total Inventory Value: ${inventoryValue}</p> */}
    </div>
  );
}

export default App;
