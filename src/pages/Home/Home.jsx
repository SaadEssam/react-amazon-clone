import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Home.css';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { 
  MdOutlineLocalShipping, 
  MdOutlineCardGiftcard, 
  MdOutlineHeadsetMic,
  MdCreditCard,
} from 'react-icons/md';
import Brand from '../../sections/Brand/Brand';
import Blog from '../../sections/Blog/Blog';
import Products from '../../sections/Products/Products';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src={images.mainBanner1} className="img-fluid rounded-3" alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>Trending Now</h4>
                  <h5>Fuji Instax Mini 11</h5>
                  <p>From $990.00 or $31.99/mo</p>
                  <Link to="#" className="buy-btn text-white">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src={images.subBanner1} className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Macbook pro M2</h5>
                    <p>From $1699.00 or $64.99/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={images.subBanner2} className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $1100.00 or $52.99/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={images.subBanner3} className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>16% Off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shot the latest brand styles and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={images.subBanner4} className="img-fluid rounded-3" alt="small banner" />
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
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <MdOutlineLocalShipping />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <MdOutlineCardGiftcard />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <MdOutlineHeadsetMic />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <HiOutlineReceiptPercent />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <MdCreditCard />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-wrapper-2 py-5">
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
      <Brand />
      <Blog />
      <Products />
    </>
  );
}

export default Home;

