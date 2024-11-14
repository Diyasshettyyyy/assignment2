import React from 'react';
import { Link } from 'react-router-dom';

function CakeCategories() {
  return (
    <div>
      <h1>Cake Categories</h1>
      <div className="categories">
        <Link to="/cakes">Chocolate Cakes</Link><br></br>
        <Link to="/cakes">Fruit Cakes</Link><br></br>
        <Link to="/cakes">Custom Cakes</Link><br></br>
        <Link to="/cakes">Photo Cakes</Link><br></br>
        <Link to="/cakes">Wedding Cakes</Link><br></br>
        <Link to="/cakes">Birthday Special Cakes</Link><br></br>
      </div>
    </div>
  );
}

export default CakeCategories;






