import React from 'react';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { images } from '../../constants';
import ImageZoom from "react-image-zooom";

import './Cart.css';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <ImageZoom src={images.product01} alt="product" className="img-fluid" zoom="200" />
                  </div>
                  <div className="w-75">
                    <h5 className="title">Apple iMac M1 Desktop Computer 24" M1 8GB RAM 256GB SSD</h5>
                    <p className="color">Storage: 256GB</p>
                    <p className="storage">SKU: SKU001</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$600</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input 
                      type="number" 
                      name="" 
                      min={1} 
                      max={10} 
                      className="form-control quantity" 
                      id="" 
                      defaultValue={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$600</h5>
                </div>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <ImageZoom src={images.product02} alt="product" className="img-fluid" zoom="200" />
                  </div>
                  <div className="w-75">
                    <h5 className="title">AAA</h5>
                    <p className="color">BBB</p>
                    <p className="storage">CCC</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$700</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input 
                      type="number" 
                      name="" 
                      min={1} 
                      max={10} 
                      className="form-control quantity" 
                      id="" 
                      defaultValue={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$700</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/product" className="buy-btn">Continue to Shopping</Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $1300</h4>
                  <p>*Taxes and Shipping calculated at checkout</p>
                  <Link to="/checkout" className="buy-btn">Checkout Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;