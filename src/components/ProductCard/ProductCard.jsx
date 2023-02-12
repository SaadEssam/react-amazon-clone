import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { MdFavoriteBorder } from 'react-icons/md';
import { TbArrowsShuffle, TbShoppingCart, TbEye } from 'react-icons/tb';
import './ProductCard.css';


const ProductCard = ({ brand, title, price, image, image02 }) => {
  return (
    <div className="col-3">
      <Link to="#" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="#">
            <MdFavoriteBorder />
          </Link>
        </div>
        <div className="product-image">
          <img src={image} alt="products" />
          <img src={image02} alt="products" />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">{price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="#">
              <TbArrowsShuffle />
            </Link>
            <Link to="#">
              <TbEye />
            </Link>
            <Link to="#">
              <TbShoppingCart />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;