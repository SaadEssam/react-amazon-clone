import React from "react";
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { 
  MdOutlineLocalShipping, 
  MdOutlineCardGiftcard, 
  MdOutlineHeadsetMic,
  MdCreditCard,
} from 'react-icons/md';
import './Services.css';

const Services = () => {
  return (
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
  );
}

export default Services;