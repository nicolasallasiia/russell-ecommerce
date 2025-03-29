import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Cervezas from "./pages/cervezas";
import Tragos from "./pages/tragos";
import Menu from "./pages/menu";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Bienvenido a Russell Beer Pub</h1>} />
        <Route path="/cervezas" element={<Cervezas />} />
        <Route path="/tragos" element={<Tragos />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;