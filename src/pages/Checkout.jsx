import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePayment = () => {
    setProcessingPayment(true);

    setTimeout(() => {
      setProcessingPayment(false);

      // Calcular total del carrito
      const total = cart.reduce((sum, item) => sum + item.price, 0);

      // Limpiar carrito
      setCart([]);

      // Redirigir a ThankYou pasando nombre y total
      navigate("/thankyou", { state: { nombre: formData.nombre, total } });
    }, 2000);
  };

  if (submitted) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Confirmar pago</h1>
        <p>Nombre: {formData.nombre}</p>
        <p>Dirección: {formData.direccion}</p>
        <p>Email: {formData.email}</p>
        <button onClick={handlePayment} disabled={processingPayment}>
          {processingPayment ? "Procesando pago..." : "Realizar Pago"}
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Dirección:
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
