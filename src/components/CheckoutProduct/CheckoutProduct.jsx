import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiFillDelete } from "react-icons/ai";
import { images } from "../../constants";
import ImageZoom from "react-image-zooom";
import "./CheckoutProduct.css";
import { useAuth } from "../../context/GlobalState";

const CheckoutProduct = ({ id, title, price, image }) => {
  const { dispatch } = useAuth();
  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
      <div className="cart-col-1 gap-15 d-flex align-items-center">
        <div className="w-25">
          <ImageZoom
            src={image}
            alt="product"
            className="img-fluid"
            zoom="200"
          />
        </div>
        <div className="w-75">
          <h5 className="title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div className="cart-col-2">
        <h5 className="price">{price}</h5>
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
          <AiFillDelete onClick={RemoveFromCart} className="delete-icon" />
        </div>
      </div>
      <div className="cart-col-4">
        <h5 className="price">{price}</h5>
      </div>
    </div>
  );
};

export default CheckoutProduct;
