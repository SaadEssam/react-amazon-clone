import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

import { images } from "../../constants";

import { BsSearch, BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <>
      <header className="header-main py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <div>
                <Link to="/">
                  <img
                    src={images.amazon}
                    alt="app logo"
                    className="header-logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                />
                <span className="input-group-text search-icon p-3">
                  <BsSearch fontSize={20} />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <TbArrowsShuffle />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <MdFavoriteBorder />
                    <p className="mb-0">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={!user && "/login"}
                    className="d-flex align-items-center gap-10 text-white"
                    onClick={handleAuthentication}
                  >
                    <FaRegUser />
                    <p className="mb-0">
                      Hello {user ? `${user.email}` : "Guest"}
                      <br />
                      {user ? "Log Out" : "Log in"}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <BsCart3 color="#febd69" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {basket?.length}
                      </span>
                      {/* <p className="mb-0">$ 200</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent 
                        border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <CgMenuGridO fontSize={20} />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item text-white" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item text-white" to="#">
                        Another action
                      </Link>
                      <Link className="dropdown-item text-white" to="#">
                        Something else here
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                    <NavLink to="/product" className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to="/blogs" className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact-us" className="text-white">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
