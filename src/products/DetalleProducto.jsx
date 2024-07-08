import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import productsData from '../data/productsData.json';
import '../styles.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const product = productsData.products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>{product.name}</h1>
      </header>
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button>Comprar</button>
      </div>
      <Link to="/" className="volver">Volver</Link>
      <Footer />
    </div>
  );
};

export default DetalleProducto;