import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <h1>Russell Beer Pub</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/cervezas">Cervezas</a>
          <a href="/tragos">Tragos</a>
          <a href="/menu">Menú</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
