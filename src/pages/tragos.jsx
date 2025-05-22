import React from "react";
import { tragos } from "../data/products";
import ProductCard from "../components/ProductCard";

function Tragos({ addToCart, cart }) {
  return (
    <div>
      <h1>Tragos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {tragos.map((trago) => (
          <ProductCard key={trago.id} product={trago} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Tragos;
