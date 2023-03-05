import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CurrencyFormat from "react-currency-format";

import "./Cart.css";
import { useAuth } from "../../context/GlobalState";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../context/AppReducer";

const Cart = () => {
  const { user, basket } = useAuth();
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
              {basket.length > 0 ? (
                basket.map((product) => (
                  <CheckoutProduct
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                ))
              ) : (
                <div className="d-wrap">
                  <h4 className="mt-3">Your Amazon Cart is empty.</h4>
                  <Link to="/" className="backToHome">
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
            <div className="col-12 py-2 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/product" className="buy-btn">
                  Continue to Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>
                    SubTotal:{" "}
                    <span className="subtotal-price">
                      <CurrencyFormat
                        renderText={(value) => <span>{value}</span>}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </span>
                  </h4>
                  <p>*Taxes and Shipping calculated at checkout</p>
                  <Link to="/checkout" className="buy-btn">
                    Checkout Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
