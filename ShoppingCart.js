import React from 'react';

const ShoppingCart = () => {
  const cartItems = [
    { id: 1, name: 'Chocolate Cake', price: 20, quantity: 2 },
    { id: 2, name: 'Vanilla Cake', price: 15, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;