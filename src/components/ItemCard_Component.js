import React from 'react';
import './ItemCard_Component.css';

const ItemCard_Component = ({ image, title, description,link }) => {
  return (
    <div className="product-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="product-image" />
        <div className="product-content">
          <h2 className="product-name">{title}</h2>
          <p className="product-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ItemCard_Component;

