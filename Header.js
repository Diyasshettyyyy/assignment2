import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        
          <Link to="/">Home</Link>
          < Link to="/cakes">Cake Categories</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About Us</Link>
       
      </nav>
    </header>
  );
}

export default Header;