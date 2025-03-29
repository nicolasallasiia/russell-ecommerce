import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/cervezas">Cervezas</Link></li>
        <li><Link to="/tragos">Tragos</Link></li>
        <li><Link to="/menu">Menú</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
