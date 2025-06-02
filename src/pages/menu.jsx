import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../data/asyncMock";
import ProductCard from "../components/ProductCard";

function Menu({ addToCart, cart }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory("menu")
      .then((data) => {
        setMenu(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando menú...</p>;
  }

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
