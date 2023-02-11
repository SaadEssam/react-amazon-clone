import React from "react";
import images from '../../constants/images';
import './Categories.css';

const Categories = () => {
  return (
  <section className="home-wrapper-2 py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex align-items-center flex-wrap justify-content-between rounded-3">
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Cameras</h6>
                <p className="mb-0">10 Items</p>
              </div>
              <img src={images.camera} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Computers & Laptop</h6>
                <p className="mb-0">8 Items</p>
              </div>
              <img src={images.laptops} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Mobiles & Tablets</h6>
                <p className="mb-0">14 Items</p>
              </div>
              <img src={images.tablets} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>smartwatch's</h6>
                <p className="mb-0">5 Items</p>
              </div>
              <img src={images.smartwatchs} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Headphones</h6>
                <p className="mb-0">4 Items</p>
              </div>
              <img src={images.music} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Smart TV</h6>
                <p className="mb-0">8 Items</p>
              </div>
              <img src={images.tv} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Home Appliances</h6>
                <p className="mb-0">9 Items</p>
              </div>
              <img src={images.home} />
            </div>
            <div className="d-flex align-items-center gap">
              <div>
                <h6>Gaming Console</h6>
                <p className="mb-0">5 Items</p>
              </div>
              <img src={images.ps5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Categories;