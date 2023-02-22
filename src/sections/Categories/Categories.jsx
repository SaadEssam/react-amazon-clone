import React from 'react';
import { data } from '../../constants';
import './Categories.css';

const Categories = () => {
  return (
  <section className="home-wrapper-2 py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex align-items-center flex-wrap justify-content-between rounded-3">
            {data.Categories.map((category, index) => {
              return (
                <div className="d-flex align-items-center gap" key={index} >
                  <div>
                    <h6>{category.title}</h6>
                    <p className="mb-0">{category.quantity}</p>
                  </div>
                  <img src={category.img} alt="category" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Categories;