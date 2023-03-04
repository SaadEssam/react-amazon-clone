import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { MdFavoriteBorder } from "react-icons/md";
import { TbArrowsShuffle, TbShoppingCart, TbEye } from "react-icons/tb";
import "./ProductCard.css";
import { useAuth } from "../../context/GlobalState";

const ProductCard = ({ brand, title, price, image, image02, grid }) => {
  const { dispatch, basket } = useAuth();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      product: {
        brand,
        title,
        price,
        image,
        image02,
        grid,
      },
    });
  };
  console.log(basket);

  let location = useLocation();

  return (
    <div
      className={` ${
        location.pathname === "/product" ? `col-${grid}` : "col-3"
      } `}
    >
      <Link
        to={`${location.pathname === "/" ? "product/:id" : ":id"}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <MdFavoriteBorder />
          </button>
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
            <button className="border-0 bg-transparent">
              <TbArrowsShuffle />
            </button>
            <button className="border-0 bg-transparent">
              <TbEye />
            </button>
            <button className="border-0 bg-transparent">
              <TbShoppingCart onClick={addToCart} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
