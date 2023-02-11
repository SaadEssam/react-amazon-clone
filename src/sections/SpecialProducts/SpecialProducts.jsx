import React from 'react';
import SpecialProduct from '../../components/SpecialProduct/SpecialProduct';
import './SpecialProducts.css';

const SpecialProducts = () => {
  return (
    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>
  );
}

export default SpecialProducts;