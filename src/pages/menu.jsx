import React from "react";
import { menu } from "../data/products";

function Menu() {
  return (
    <div className="menu">
      <h1>Menú</h1>
      <div className="product-list">
        {menu.map((plato) => (
          <div key={plato.id} className="product-card">
            <img src={`/images/${plato.imagen}`} alt={plato.nombre} />
            <h2>{plato.nombre}</h2>
            <p>Precio: ${plato.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
