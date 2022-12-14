import React from "react";
import Contenedor from "./componentes/Contenedor";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Elemento1 from "./pages/Elemento1"
import Elemento2 from "./pages/Elemento2"
import Sesion from "./pages/Sesion"

function App() {
  return (
    <div className="App">
       <Contenedor />
       <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elemento1" element={<Elemento1 />} />
          <Route path="/elemento2" element={<Elemento2 />} />
          <Route path="/iniciar sesión" element={<Sesion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
