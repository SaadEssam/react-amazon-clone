import React from "react";
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct";
import { data } from "../../constants";
import "./SpecialProducts.css";

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
          {data.SpecialProduct.map((product, index) => (
            <SpecialProduct
              key={product.title + index}
              brand={product.brand}
              title={product.title}
              price={product.price}
              discountPrice={product.discountPrice}
              image={product.image}
              discountDays={product.discountDays}
              productCount={product.productCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
