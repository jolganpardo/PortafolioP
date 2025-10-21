import React from "react";

function Encabezado() {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <h1 className="text-2xl font-bold text-blue-400">Mi Portafolio</h1>
      <nav className="space-x-6">
        <a href="#inicio" className="hover:text-blue-400 transition">Inicio</a>
        <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
        <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
      </nav>
    </header>
  );
}

export default Encabezado;
