import React from 'react';
import './Home.css';

import Widget from '../../sections/Widget/Widget';
import Services from '../../sections/Services/Services';
import Categories from '../../sections/Categories/Categories';
import Brand from '../../sections/Brand/Brand';
import Products from '../../sections/Products/Products';
import SpecialProducts from '../../sections/SpecialProducts/SpecialProducts';
import Blog from '../../sections/Blog/Blog';

const Home = () => {
  return (
    <>
      <Widget />
      <Services />
      <Categories />
      <Brand />
      <Products />
      <SpecialProducts />
      <Blog />
    </>
  );
}

export default Home;

