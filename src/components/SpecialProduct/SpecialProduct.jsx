import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./SpecialProduct.css";

const SpecialProduct = ({
  brand,
  title,
  price,
  discountPrice,
  image,
  discountDays,
  productCount,
}) => {
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={image} className="img-fluid" alt="special product" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="product-title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p>
              <span className="discount-price">{discountPrice}</span> &nbsp;{" "}
              <strike className="price">{price}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>{discountDays} </b>days
              </p>
              <div className="countdown d-flex gap-10 align-items-center">
                <span className="">1</span>:<span className="">1</span>:
                <span className="">1</span>
              </div>
            </div>
            <div className="products-count my-3">
              <p>Products: {productCount}</p>
              <div className="progress" style={{ height: "3" + "px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-label="Example 1px high"
                  style={{ width: "25" + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="#" className="buy-btn text-white">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
