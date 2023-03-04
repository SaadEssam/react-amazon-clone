import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

import { RxCross2 } from "react-icons/rx";
import { images } from "../../constants";

import "./Wishlist.css";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <RxCross2 className="position-absolute cross" />
                <div className="product-card-img">
                  <img src={images.product03} alt="wishlist" />
                </div>
                <div className="wishlist-product-details">
                  <h5 className="product-title">
                    Samsung DW80R2031US 55 dBA Stainless Built-in Dishwasher
                  </h5>
                  <p className="price mb-3 mt-3">$758</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <RxCross2 className="position-absolute cross" />
                <div className="product-card-img">
                  <img src={images.product04} alt="wishlist" />
                </div>
                <div className="wishlist-product-details">
                  <h5 className="product-title">
                    Beats Studio Buds – True Wireless Noise Cancelling Bluetooth
                    Earbuds
                  </h5>
                  <p className="price mb-3 mt-3">$99.95</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card position-relative">
                <RxCross2 className="position-absolute cross" />
                <div className="product-card-img">
                  <img src={images.product01} alt="wishlist" />
                </div>
                <div className="wishlist-product-details">
                  <h5 className="product-title">
                    Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD
                  </h5>
                  <p className="price mb-3 mt-3">$600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
