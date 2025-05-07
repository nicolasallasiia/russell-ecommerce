import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cervezas from "./pages/Cervezas";
import Tragos from "./pages/Tragos";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  // Leer el carrito desde localStorage o usar un array vacío
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(savedCart);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar el carrito en localStorage
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar el carrito actualizado en localStorage
  };

  return (
    <>
      <Header />
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/cervezas" element={<Cervezas addToCart={addToCart} />} />
        <Route path="/tragos" element={<Tragos addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
