import React from "react";
import { menu } from "../data/products";
import ProductCard from "../components/ProductCard";

function Menu({ addToCart }) {
  return (
    <div>
      <h1>Menú de Comidas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menu.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
