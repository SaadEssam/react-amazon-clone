import React from "react";
import BannerCard from "../../components/BannerCard/BannerCard";
import { data } from "../../constants";
import './BannerCards.css';

const BannerCards = () => {
  return (
    <section className="banner-card py-3 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          {data.bannerCard.map((card, index) => (
            <BannerCard
              key={card.title + index} 
              label={card.label} 
              subtitle={card.subtitle} 
              title={card.title} 
              image={card.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BannerCards;