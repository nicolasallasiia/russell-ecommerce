import React from "react";
import { cervezas } from "../data/products";

function Cervezas() {
  return (
    <div className="cervezas">
      <h1>Cervezas</h1>
      <div className="product-list">
        {cervezas.map((cerveza) => (
          <div key={cerveza.id} className="product-card">
            <img src={`/images/${cerveza.imagen}`} alt={cerveza.nombre} />
            <h2>{cerveza.nombre}</h2>
            <p>Precio: ${cerveza.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cervezas;
