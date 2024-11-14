import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Cake Shop!</h1>
      <div className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cakes">
          <div className="cake">
            <img src="C:\Users\Diya\Pictures\chocolate.jpg" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <Link to="/cakes/1">View Details</Link>
          </div>
          <div className="cake">
            <img src="c:\Users\Diya\Downloads\skill lab images\fruit.jpg" alt="Fruit Cake" />
            <h3>Fruit Cake</h3>
            <Link to="/cakes/2">View Details</Link>
          </div>
          <div className="cake">
            <img src="c:\Users\Diya\Downloads\skill lab images\vanilla.jpg" alt="Vanilla Cake" />
            <h3>Vanilla Cake</h3>
            <Link to="/cakes/3">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;