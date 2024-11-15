// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar'; // A simple Navbar component for navigation

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          {/* Routes for the application */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
