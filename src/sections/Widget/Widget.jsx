import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Widget.css";

const Widget = () => {
  return (
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={images.mainBanner1}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Trending Now</h4>
                <h5>Fuji Instax Mini 11</h5>
                <p>From $990.00 or $31.99/mo</p>
                <Link to="#" className="buy-btn text-white">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={images.subBanner1}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Macbook Pro M2</h5>
                  <p>From $1699.00 or $64.99/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.subBanner2}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $1100.00 or $52.99/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.subBanner3}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>16% Off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shot the latest brand styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={images.subBanner4}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
