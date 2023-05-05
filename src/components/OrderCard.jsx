import React from "react";
import Table from "./Table";

const OrderCard = ({ order }) => {

const handleA = (id) => { console.log("este es el id ",id) }

  return (
    <div
      className="card mb-3"
      style={{
        maxWidth: "30rem",
        background: "#E6AF2E",
        borderRadius: "15px",
        padding: "15px",
        fontSize: "18px"
      }}
    >
      <p><b>Orden id:</b> {order.id}</p>
      <p><b>Estatus: </b>{order.status}</p>
      <Table products={order.products} />

      <button type="button" className="btn btn-danger" onClick={() => handleA(order.id)}>Enviar</button>
    </div>
  );
};

export default OrderCard;
