import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/cervezas">Cervezas</Link></li>
        <li><Link to="/tragos">Tragos</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/cart">Carrito ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
