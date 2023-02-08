import React from 'react';
import Marquee from "react-fast-marquee";
import images from '../../constants/images';
import './Brand.css';

const Brand = () => {
  return (
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={images.brand01} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand02} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand03} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand04} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand05} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand06} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand07} />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand08} />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;