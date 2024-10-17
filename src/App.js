import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ProductCatalog from './components/ProductCatalog';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import AdminPanel from './components/AdminPanel';
import Header from './components/Header';
import About from './About';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
