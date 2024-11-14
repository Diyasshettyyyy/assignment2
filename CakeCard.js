import React, { useState } from 'react';
import CakeCard from './CakeCard';

const CakeList = () => {
  const [cart, setCart] = useState([]);

  const cakes = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake',
      price: 20,
      image: '/images/chocolate-cake.jpg',
    },
    {
      id: 2,
      name: 'Vanilla Cake',
      description: 'Light and fluffy vanilla cake',
      price: 18,
      image: '/images/vanilla-cake.jpg',
    },
  ];

  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  return (
    <div className="cake-list">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
      ))}
      <div>
        <h2>Cart: {cart.length} item(s)</h2>
      </div>
    </div>
  );
};

export default CakeList;