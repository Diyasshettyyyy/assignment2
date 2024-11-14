import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CakeCategories from './components/CakeCategories';
import CakeDetail from './components/CakeDetail';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cakes" element={<CakeCategories />} />
        <Route path="/cakes/:id" element={<CakeDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;