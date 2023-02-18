import React from 'react';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const ResetPassword = () => {
  return (
    <>
    <Meta title="Reset Password" />
    <BreadCrumb title="Reset Password" />
    <div className="login-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="password" name="password" placeholder=" Password" className="form-control" />
                </div>
                <div>
                  <input type="password" name="confirm password" placeholder="Confirm Password" className="form-control" />
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="buy-btn border-0 text-white">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>  
  );
}

export default ResetPassword;