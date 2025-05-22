import React from "react";
import { menu } from "../data/products";
import ProductCard from "../components/ProductCard";

function Menu({ addToCart, cart }) {
  return (
    <div>
      <h1>Menú de Comidas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {menu.map((plato) => (
          <ProductCard key={plato.id} product={plato} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
