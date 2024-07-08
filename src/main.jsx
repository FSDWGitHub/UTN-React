import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Registro from './auth/Registro.jsx';
import Login from './auth/Login.jsx';
import DetalleProducto from './products/DetalleProducto.jsx';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
};

root.render(<App />);