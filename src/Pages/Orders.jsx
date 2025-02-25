import React, { useState } from "react";
// import OrderCard from "../components/PendingOrderCard";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Col from "react-bootstrap/Col";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState([]);
  const token = localStorage.getItem("sesionToken");

  const handleOrders = () => {
    fetch("http://localhost:8080/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error(error));
  };

  //solo aparece el useffect cuando el componente al que pertenece en este caso Orders se renderiza
  // si pongo una dependecia (variable) en el array vacio se va a ejecutar el usseEffet cada vez que cambia esa variable.

  const handleClickPendings = () => {
    handleOrders();
    setShowOrders(orders.filter((order) => order.status === "pending"));
  };

  const handleClickCooked = () => {
    handleOrders();
    setShowOrders(orders.filter((order) => order.status === "cooked"));
  };

  return (
    <Col className="text-center">
      <Header />
      <div>
        <Button
          style={{ fontSize: "1.4rem" }}
          className="mt-5 mb-5 mx-3"
          variant="warning"
          onClick={() => handleClickPendings()}
        >
          Ordenes Pendientes
        </Button>
        <Button
          style={{ fontSize: "1.4rem" }}
          className="mt-5 mb-5 mx-3"
          variant="warning"
          onClick={() => handleClickCooked()}
        >
          Ordenes Por Entregar
        </Button>
        {showOrders.map((order) => (
          <OrderCard order={order} key={order.id} setOrders={setOrders} />
        ))}
      </div>
    </Col>
  );
};

export default Orders;
