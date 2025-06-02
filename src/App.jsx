import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cervezas from "./pages/Cervezas";
import Tragos from "./pages/Tragos";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; 
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  // Inicializar carrito leyendo localStorage con seguridad
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setSuccessMessage(`${product.name} agregado al carrito`);

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === productId);
      if (index === -1) return prevCart;
      const newCart = [...prevCart];
      newCart.splice(index, 1); // elimina solo la primera aparición
      return newCart;
    });
  };

  return (
    <>
      <Header />
      <Navbar cartCount={cart.length} />

      {/* Mensaje de ok */}
      {successMessage && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            margin: "10px auto",
            textAlign: "center",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          {successMessage}
        </div>
      )}

      <Routes>
        <Route path="/cervezas" element={<Cervezas addToCart={addToCart} cart={cart} />} />
        <Route path="/tragos" element={<Tragos addToCart={addToCart} cart={cart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} cart={cart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
