import React from "react";
import Meta from "../../components/Meta";

import "./Home.css";

import Widget from "../../sections/Widget/Widget";
import Services from "../../sections/Services/Services";
import Categories from "../../sections/Categories/Categories";
import Brand from "../../sections/Brand/Brand";
import Products from "../../sections/Products/Products";
import SpecialProducts from "../../sections/SpecialProducts/SpecialProducts";
import BannerCards from "../../sections/BannerCards/BannerCards";
import Blog from "../../sections/Blog/Blog";

const Home = () => {
  return (
    <>
      <Meta title="Amazon" />
      <Widget />
      <Services />
      <Categories />
      <Brand />
      <Products />
      <SpecialProducts />
      <BannerCards />
      <Blog />
    </>
  );
};

export default Home;
