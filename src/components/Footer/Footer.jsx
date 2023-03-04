import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaRegPaperPlane,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center text-white">
                <FaRegPaperPlane fontSize={40} />
                <h2 className="mb-8 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                />
                <button className="input-group-text sub-btn p-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  222 Tremont St Boston, <br /> United States <br />
                  Zip/Postal Code: 02116
                </address>
                <a
                  href="tel: +91 54869875"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 54869875
                </a>
                <a
                  href="mailto: XXXXX@amazon.com"
                  className="mt-2 b-block mb-0 text-white"
                >
                  XXXXX@amazon.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                  <a className="text-white" href="#">
                    <FaFacebookSquare fontSize={20} />
                  </a>
                  <a className="text-white" href="#">
                    <FaTwitterSquare fontSize={20} />
                  </a>
                  <a className="text-white" href="#">
                    <FaInstagramSquare fontSize={20} />
                  </a>
                  <a className="text-white" href="#">
                    <FaYoutubeSquare fontSize={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="#" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Term & Conditions
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="#" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="#" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="#" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
