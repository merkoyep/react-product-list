import { useMemo, useState, useEffect } from 'react';

export const ShoppingCart = ({ items, setItems }) => {
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [discount, setDiscount] = useState();
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState(items);
  const [subtotal, setSubtotal] = useState(0);

  const Discounts = {
    SAVE10: 0.1,
    SAVE30: 0.3,
    BIRTHDAY: 0.15,
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (items.length > 0) {
      setCartItems(items);
    }
  }, [items]);

  const totalPrice = useMemo(() => {
    const price = cartItems
      .reduce((acc, item) => acc + Number(item.price.substring(1)), 0)
      .toFixed(2);
    setSubtotal(price);
    if (discount) {
      setDiscountedTotal((price * discount).toFixed(2));
      return (price * (1 - discount)).toFixed(2);
    }
    return price;
  }, [cartItems, discount]);

  const mappedItems = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
  }, [cartItems]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = event.target.elements[0].value;
    if (code in Discounts) {
      setDiscount(Discounts[code]);
      setError('');
    } else {
      setError('Discount code is invalid.');
    }
  };
  const handleClearCart = (event) => {
    event.preventDefault();
    setCartItems([]);
    setItems([]);
    setDiscount(null);
  };

  return (
    <div className='cartContainer'>
      <div className='cart'>
        <button id='clearCart' onClick={handleClearCart}>
          Clear Cart
        </button>
        <h1>🛒 Cart</h1>
        {error ? <p id='error'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Discount code' />
          <button type='submit'>Apply</button>
        </form>
        <div className='cartLineItems'>
          {mappedItems.map((item, index) => (
            <div className='cartLineItem' key={index}>
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>{item.price}</p>
            </div>
          ))}
          <p id='subtotal'>Subtotal: ${subtotal}</p>
          {discount ? (
            <p className='discountLine'>You saved ${discountedTotal}</p>
          ) : null}
          <h4 className='cartTotal'>Cart Total: ${totalPrice}</h4>
        </div>
      </div>
    </div>
  );
};
