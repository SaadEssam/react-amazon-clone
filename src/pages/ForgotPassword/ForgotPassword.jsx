import React from 'react';
import { Link } from 'react-router-dom';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mb-3 mt-2">we will send you an email to reset your password</p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="email" name="email" placeholder="Email" className="form-control" />
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center flex-column gap-15 mt-3">
                    <button className="buy-btn border-0 text-white" type="submit">Submit</button>
                    <Link to="/login" >Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;