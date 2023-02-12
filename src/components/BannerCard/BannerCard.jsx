import React from "react";
import './BannerCard.css';

const BannerCard = ({ label, subtitle, title, image}) => {
  return (
    <div className="col-3">
      <div className="card-img position-relative">
        <img src={image} className="img-fluid" alt="banner-card" />
        <div className="card-content position-absolute">
          <h5>{label}</h5>
          <h6>{subtitle}</h6>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;