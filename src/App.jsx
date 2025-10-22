import React from "react";
import Encabezado from "./componentes/encabezado";
import FondoInteractivo from "./componentes/fondoInteractivo"; 
import SeccionPresentacion from "./componentes/seccionPresentacion";
import SeccionSobreMi from "./componentes/seccionSobreMi";
import SeccionHabilidades from "./componentes/seccionHabilidades";
import SeccionProyectos from "./componentes/seccionProyectos";
import SeccionContacto from "./componentes/seccionContacto";
import PieDePagina from "./componentes/pieDePagina";
import BotonArriba from "./componentes/btnTop";

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
          <SeccionSobreMi />
          <SeccionHabilidades />
          <SeccionProyectos />
          <SeccionContacto />
          <BotonArriba />
        </main>
        <PieDePagina />
      </div>
    </div>
  );
}

export default AplicacionPrincipal;