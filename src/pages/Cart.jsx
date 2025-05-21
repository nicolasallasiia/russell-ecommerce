import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  // Agrupar productos por ID y contar la cantidad
  const groupedCart = cart.reduce((acc, item) => {
    const found = acc.find(product => product.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calcular el total
  const total = groupedCart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Carrito de Compras</h1>
      {groupedCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {groupedCart.map(item => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "1rem",
                paddingBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}
            >
              <img
                src={`/images/${item.imagen}`}
                alt={item.nombre}
                width="100"
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <div style={{ flex: 1 }}>
                <h2>{item.nombre}</h2>
                <p>Precio unitario: ${item.precio}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${(item.precio * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                aria-label={`Eliminar uno de ${item.nombre}`}
              >
                Eliminar uno
              </button>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
