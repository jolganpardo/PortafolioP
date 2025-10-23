import React from "react";
import { ChevronDown } from "lucide-react";
import imagenPerfil from "../assets/img/sobreMi/perfil.jpg";

function SeccionPresentacion() {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 relative scroll-mt-40"
    >
      {/* Imagen */}
      <img
        src={imagenPerfil}
        alt="Foto de perfil"
        className="w-60 h-80 md:w-70 md:h-90 rounded-full shadow-[0_0_30px_#3b82f680] border-4 border-blue-500 mb-8 md:mb-0 md:mr-16 "
      />

      {/* Texto principal */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-[2px_3px_5px_#9028AD] relative inline-block">
          Jolgan Pardo
          {/* Línea luminosa debajo */}
          <span className="absolute left-0 bottom-[-8px] w-full h-[3px] bg-gradient-to-r from-blue-600 via-gray-300 to-purple-500 rounded-full animate-pulse"></span>
        </h2>

        <h3 className="text-indigo-300 text-xl font-medium">
          Desarrollador Full-Stack Junior
        </h3>

        {/* Frase con efecto máquina de escribir */}
        <p className="text-white text-2xl font-bold whitespace-nowrap overflow-hidden border-r-4 border-indigo-400 pr-2 animate-typing-strong">
          Diseñando soluciones que cuentan historias.
        </p>
<br />
        <a
          href="#contacto"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-transform hover:scale-105 mt-2"
        >
          Contáctame
        </a>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        <ChevronDown className="text-indigo-400 w-7 h-7" />
      </div>
    </section>
  );
}

export default SeccionPresentacion;
