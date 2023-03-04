import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../constants";
import "./Brand.css";

const Brand = () => {
  return (
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper rounded-3">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={images.brand01} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand02} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand03} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand04} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand05} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand06} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand07} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={images.brand08} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
