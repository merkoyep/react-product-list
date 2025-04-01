import data from './data.json';

const ModifiedData = () => {
  const categoryArray = data.map((item) => item.category);
  const uniqueCatArray = [...new Set(categoryArray)];

  const productsPerCategory = data.reduce((acc, product) => {
    const { category } = product;
    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});

  const priceList = data.map((product) => ({
    name: product.name,
    price: product.price,
  }));

  const priceyProducts = priceList.filter((item) => {
    const priceValue = parseFloat(item.price.replace('$', ''));
    return priceValue > 50;
  });

  const inventoryValue = data
    .reduce(
      (acc, product) => acc + parseFloat(product.price.replace('$', '')),
      0
    )
    .toFixed(2);

  return {
    categoryArray,
    uniqueCatArray,
    productsPerCategory,
    priceList,
    priceyProducts,
    inventoryValue,
  };
};

export default ModifiedData;
