import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../data/asyncMock";
import ProductCard from "../components/ProductCard";

function Tragos({ addToCart, cart }) {
  const [tragos, setTragos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory("tragos")
      .then(data => {
        setTragos(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando tragos...</p>;
  }

  return (
    <div>
      <h1>Tragos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {tragos.map(trago => (
          <ProductCard key={trago.id} product={trago} addToCart={addToCart} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Tragos;
