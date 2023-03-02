import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import './Login.css';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    }).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      className="form-control" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      className="form-control" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password ?</Link>
                    <div 
                      className="d-flex justify-content-center align-items-center gap-15 mt-3"
                    >
                      <button 
                        className="buy-btn border-0 text-white" 
                        type="submit"
                        onClick={signIn}
                      >
                        Login
                      </button>
                      <Link to="/signup" className="buy-btn signup">Signup</Link>
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

export default Login;