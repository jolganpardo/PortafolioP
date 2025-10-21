import React from "react";
import imagenPerfil from "../assets/perfil.jpg";

function SeccionPresentacion() {
  return (
    <section id="inicio" className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-4xl font-extrabold">
          ¡Hola! Soy <span className="text-blue-400">Jolgan</span>
        </h2>
        <p className="text-gray-300 max-w-xl">
          Desarrollador full-stack apasionado por crear experiencias digitales 
          rápidas, limpias y funcionales. Me gusta mantener el código ordenado 
          y modular, siguiendo los principios SOLID.
        </p>
        <a
          href="#proyectos"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Ver mis proyectos
        </a>
      </div>
      <img
        src={imagenPerfil}
        alt="Foto de perfil"
        className="w-60 h-60 rounded-full mt-8 md:mt-0 shadow-lg border-4 border-blue-500"
      />
    </section>
  );
}

export default SeccionPresentacion;
