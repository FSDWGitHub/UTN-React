import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="content">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <Link to={`/producto/${product.id}`}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
