import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../constants/data';
import './Products.css';

const Products = () => {
  return (
  <div className="blog py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-3">Featured Collection</h3>
          <div className="app_blog" id="blog">
            <div className="app_blog-container">
              <div className="app_blog-container_groupB">
                {data.products.map((product, index) => (
                  <ProductCard 
                    key={product.title + index} 
                    brand={product.brand} 
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Products;