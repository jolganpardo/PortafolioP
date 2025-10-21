import React from "react";
import Encabezado from "./componentes/Encabezado";
import FondoInteractivo from "./componentes/fondoInteractivo"; // ✅ Asegúrate que el nombre coincida
import SeccionPresentacion from "./componentes/SeccionPresentacion";
import SeccionProyectos from "./componentes/SeccionProyectos";
import SeccionContacto from "./componentes/SeccionContacto";
import PieDePagina from "./componentes/PieDePagina";

function AplicacionPrincipal() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 🔹 Fondo interactivo detrás de todo */}
      <FondoInteractivo />

      {/* 🔹 Contenido principal totalmente transparente */}
      <div className="relative z-10">
        <Encabezado />
        <main className="container mx-auto px-6">
          <SeccionPresentacion />
          <SeccionProyectos />
          <SeccionContacto />
        </main>
        <PieDePagina />
      </div>
    </div>
  );
}

export default AplicacionPrincipal;