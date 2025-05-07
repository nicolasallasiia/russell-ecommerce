import React from "react";

function Cart({ cart, removeFromCart }) {
  // Agrupar productos iguales y contar cantidades
  const grouped = cart.reduce((acc, item) => {
    const existing = acc.find((i) => i.id === item.id);
    if (existing) {
      existing.cantidad += 1;
    } else {
      acc.push({ ...item, cantidad: 1 });
    }
    return acc;
  }, []);

  const total = grouped.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div>
      <h1>Carrito</h1>
      {grouped.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {grouped.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <h2>{item.nombre}</h2>
              <p>
                Precio: ${item.precio} × {item.cantidad} = $
                {item.precio * item.cantidad}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar uno</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
