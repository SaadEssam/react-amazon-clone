import React from 'react';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

import { RxCross2 } from 'react-icons/rx';
import { images } from '../../constants';
import './CompareProducts.css';

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <RxCross2 className="position-absolute cross" />
                <div className="product-card-img">
                  <img src={images.product01} />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD
                  </h5>
                  <p className="price mb-3 mt-3">$600</p>

                  <div>
                    <div className="product-detail">
                      <h6>Brand :</h6>
                      <h7>Apple</h7>
                    </div>
                    <div className="product-detail">
                      <h6>Type :</h6>
                      <h7>Desktop Computer</h7>
                    </div>
                    <div className="product-detail">
                      <h6>SKU :</h6>
                      <h7>SKU001</h7>
                    </div>
                    <div className="product-detail">
                      <h6>Availability :</h6>
                      <h7 className="text-success">In Stock</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <RxCross2 className="position-absolute cross" />
                <div className="product-card-img">
                  <img src={images.product03} />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Samsung DW80R2031US 55 dBA Stainless Built-in Dishwasher
                  </h5>
                  <p className="price mb-3 mt-3">$758</p>

                  <div>
                    <div className="product-detail">
                      <h6>Brand :</h6>
                      <h7>Samsung</h7>
                    </div>
                    <div className="product-detail">
                      <h6>Type :</h6>
                      <h7>Smart TV</h7>
                    </div>
                    <div className="product-detail">
                      <h6>SKU :</h6>
                      <h7>SKU003</h7>
                    </div>
                    <div className="product-detail">
                      <h6>Availability :</h6>
                      <h7 className="text-danger">Out of Stock</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProducts;