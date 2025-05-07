import React from "react";
import { menu } from "../data/products";


function Menu({ addToCart }) {
  return (
    <div>
      <h1>Menú de Comidas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {menu.map((plato) => (
          <div
            key={plato.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={`/images/${plato.imagen}`}
              alt={plato.nombre}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{plato.nombre}</h2>
            <p>Precio: ${plato.precio}</p>
            <button onClick={() => addToCart(plato)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
