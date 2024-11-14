import React from 'react';
import { useParams } from 'react-router-dom';

function CakeDetail() {
  const { id } = useParams();
  const cakes = [
    { id: 1, name: 'Chocolate Cake', price: 15, description: 'Rich chocolate flavor with creamy frosting.' },
    { id: 2, name: 'Fruit Cake', price: 18, description: 'A delicious fruit-filled cake with light sponge.' },
    { id: 3, name: 'Vanilla Cake', price: 12, description: 'Classic vanilla cake with a soft texture.' }
  ];
  const cake = cakes.find(cake => cake.id === parseInt(id));

  return (
    <div>
      <h1>{cake.name}</h1>
      <p>{cake.description}</p>
      <p>${cake.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeDetail;