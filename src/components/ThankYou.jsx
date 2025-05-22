import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();


  const { nombre, total } = location.state || {};


  if (!nombre || !total) {
    navigate("/");
    return null;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>¡Gracias por tu compra, {nombre}!</h1>
      <p>El total de tu pedido es: ${total.toFixed(2)}</p>
      <p>Esperamos verte pronto nuevamente en Russell Beer Pub.</p>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default ThankYou;
