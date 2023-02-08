import React from 'react';
import ReactStars from "react-rating-stars-component";
import './ProductCard.css';


const ProductCard = ({ brand, title, price, image }) => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
        <img src={image} alt="products" />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;