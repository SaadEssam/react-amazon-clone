import React from 'react';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Signup = () => {
  return (
    <>
      <Meta title="Create Account" />
      <BreadCrumb title="Create Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" name="first-name" placeholder="First Name" className="form-control" />
                  </div>
                  <div>
                    <input type="text" name="last-name" placeholder="Last Name" className="form-control" />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className="buy-btn border-0 text-white">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>  );
}

export default Signup;