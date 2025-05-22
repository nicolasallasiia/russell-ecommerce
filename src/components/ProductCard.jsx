import React from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart, cart }) {
  // Verificar si el producto ya está en el carrito
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button 
        onClick={() => !isInCart && addToCart(product)} 
        disabled={isInCart}
        className={isInCart ? "in-cart" : ""}
      >
        {isInCart ? "Agregado ✔" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ProductCard;
