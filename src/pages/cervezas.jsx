import React from "react";
import { cervezas } from "../data/products";

function Cervezas({ addToCart }) {
  return (
    <div>
      <h1>Cervezas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cervezas.map((cerveza) => (
          <div
            key={cerveza.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={`/images/${cerveza.imagen}`}
              alt={cerveza.nombre}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{cerveza.nombre}</h2>
            <p>Precio: ${cerveza.precio}</p>
            <button onClick={() => addToCart(cerveza)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cervezas;
