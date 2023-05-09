import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import Header from '../components/Header';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("data/orders.json")
      .then((response) => response.json())
      .then((data) => setOrders(data["orders"]))
      .catch((error) => console.error(error));
  }, []);

  const pendingOrders = orders.filter((order) => order.status === "pending");

  return (
    <div>
    <nav>
      <Header/>
    </nav> 
    <h1 className="titleOrders">Ordenes Pendientes</h1>
      {pendingOrders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
      </div>
  );
};

export default Orders;