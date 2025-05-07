import React from "react";
import { tragos } from "../data/products";

function Tragos({ addToCart }) {
  return (
    <div>
      <h1>Tragos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {tragos.map((trago) => (
          <div
            key={trago.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={`/images/${trago.imagen}`}
              alt={trago.nombre}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{trago.nombre}</h2>
            <p>Precio: ${trago.precio}</p>
            <button onClick={() => addToCart(trago)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tragos;
