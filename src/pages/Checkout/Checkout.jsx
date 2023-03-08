import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Meta from "../../components/Meta";
import { images } from "../../constants";
import { useAuth } from "../../context/GlobalState";
import { getBasketTotal } from "../../context/AppReducer";
import CurrencyFormat from "react-currency-format";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import axios from "../../components/axios";
import { doc, setDoc } from "firebase/firestore";
import "./Checkout.css";
import { db } from "../../firebase";

const Checkout = () => {
  const [phone, setPhone] = useState("");
  const { user, basket, dispatch } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/checkout/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders", { replace: true });
        dispatch({
          type: "EMPTY_CART",
        });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  };
  return (
    <>
      <Meta title="Checkout" />
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <img
                  src={images.amazon02}
                  alt="amazon"
                  className="header-logo mb-3"
                />
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark" href="#">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <div className="w-100 mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      ← Return to Cart
                    </Link>
                  </div>
                </div>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">Hello {user?.email}</p>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  {/* <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div> */}
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div> */}
                  <div className="flex-grow-1">
                    <PhoneInput
                      country={"eg"}
                      enableSearch={true}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                  {/* <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc"
                      className="form-control"
                    />
                  </div> */}
                  {/* <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div> */}
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100 card-stripe">
                    <CardElement onChange={handleChange} />
                  </div>
                  <div className="w-100">
                    <button
                      type="submit"
                      className="checkout-buy"
                      disabled={processing || disabled || succeeded}
                    >
                      {processing ? "processing" : "Buy Now"}
                    </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>
                    <CurrencyFormat
                      renderText={(value) => <span>{value}</span>}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$10</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <p>Total</p>
                <p>
                  <CurrencyFormat
                    renderText={(value) => <span>{value + 10}</span>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
