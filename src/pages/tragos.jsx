import React from "react";
import { tragos } from "../data/products";
import ProductCard from "../components/ProductCard";

function Tragos({ addToCart }) {
  return (
    <div>
      <h1>Tragos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {tragos.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Tragos;
