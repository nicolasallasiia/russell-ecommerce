import React from "react";
import { tragos } from "../data/products";

function Tragos() {
  return (
    <div className="tragos">
      <h1>Tragos</h1>
      <div className="product-list">
        {tragos.map((trago) => (
          <div key={trago.id} className="product-card">
            <img src={`/images/${trago.imagen}`} alt={trago.nombre} />
            <h2>{trago.nombre}</h2>
            <p>Precio: ${trago.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tragos;
