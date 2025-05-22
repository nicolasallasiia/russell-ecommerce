import React from "react";
import { cervezas } from "../data/products";
import ProductCard from "../components/ProductCard";

function Cervezas({ addToCart, cart }) {
  return (
    <div>
      <h1>Cervezas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {cervezas.map((cerveza) => (
          <ProductCard key={cerveza.id} product={cerveza} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Cervezas;
