import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './SpecialProduct.css';

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Samsung</h5>
            <h6 className="title">Samsung Galaxy Note10+</h6>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="">$100</span> &nbsp; <strike>$200</strike>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;