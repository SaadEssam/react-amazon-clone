import React from 'react';
import { Link } from 'react-router-dom';
import Meta from "../../components/Meta";
import { MdErrorOutline } from 'react-icons/md';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <>
      <Meta title="Page Not Found" />
      <div className="NotFound-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center gap-10 align-items-center mb-3">
                <h2>404</h2>
                <MdErrorOutline />
              </div>
              <h4 className="text-center mb-3">Page Not Found</h4>
              <p className="text-center mb-3">The page you are looking for doesn't exist 
                or an other error occurred.</p>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <Link to="/" className="buy-btn">Go back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;