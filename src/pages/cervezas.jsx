import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../data/asyncMock";
import ProductCard from "../components/ProductCard";

function Cervezas({ addToCart, cart }) {
  const [cervezas, setCervezas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory("cervezas")
      .then((data) => {
        setCervezas(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando cervezas...</p>;
  }

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
