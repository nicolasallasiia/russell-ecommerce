import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#222",
        color: "#fff",
        padding: "10px 20px",
        marginBottom: "20px",
      }}
    >
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Cervezas
        </Link>
        <Link to="/tragos" style={{ color: "white", textDecoration: "none" }}>
          Tragos
        </Link>
        <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>
          Comidas
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Carrito
        </Link>
      </nav>
    </header>
  );
}

export default Header;
