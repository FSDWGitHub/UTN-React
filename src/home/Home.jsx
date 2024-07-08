import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Footer from '../components/Footer.jsx';
import productsData from '../data/productsData.json';

import '../styles.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Ecommerce React</h1>
        <nav>
          <Link to="/registro" className="nav-link">Registro</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;