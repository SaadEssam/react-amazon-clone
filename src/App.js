import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import OurStore from "./pages/OurStore/OurStore";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import CompareProducts from "./pages/CompareProducts/CompareProducts";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Signup from "./pages/Signup/Signup";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import Orders from "./pages/Orders/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51LpvHqJsaKztgHd5j9lnHRRlRrcMAW33Hlaost9eZD1ckuXGiiz5ptmN4FPR10fo8I5nCNf7rUHHN6N140qRbor300eT2kbrGS"
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="checkout"
              element={
                <Elements stripe={stripePromise}>
                  <Checkout />
                </Elements>
              }
            />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="orders" element={<Orders />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
