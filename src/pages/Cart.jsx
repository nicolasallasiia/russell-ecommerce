import React from "react";
import { useNavigate } from "react-router-dom";  
import "./Cart.css";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const navigate = useNavigate(); 

  // Agrupar productos por ID
  const groupedCart = cart.reduce((acc, item) => {
    const found = acc.find(prod => prod.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calcular total
  const total = groupedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {groupedCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {groupedCart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-buttons">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>

          {/* Botón para ir a Checkout */}
          <button
            onClick={() => navigate("/checkout")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
