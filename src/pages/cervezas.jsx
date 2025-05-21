import React from "react";
import { cervezas } from "../data/products";
import ProductCard from "../components/ProductCard";

function Cervezas({ addToCart }) {
  return (
    <div>
      <h1>Cervezas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {cervezas.map((cerveza) => (
          <ProductCard key={cerveza.id} product={cerveza} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Cervezas;
