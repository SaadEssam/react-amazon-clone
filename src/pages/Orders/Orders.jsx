import { React, useState, useEffect } from "react";
import Meta from "../../components/Meta";
import { useAuth } from "../../context/GlobalState";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Order from "../../components/Order/Order";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      const collRef = collection(db, "users", user?.uid, "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      <Meta title="Your Orders" />
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
