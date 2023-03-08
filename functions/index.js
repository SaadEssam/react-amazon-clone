const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config

const app = express();

// middleware

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/checkout/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// example endpoint
// http://127.0.0.1:5001/clone-94d39/us-central1/api

// Listen command

exports.api = functions.https.onRequest(app);
