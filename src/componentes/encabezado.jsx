import React from "react";

function Encabezado() {
  return (
    <header className="flex justify-center items-center py-6 px-4 space-x-8">
        <a href="#inicio" className="px-4 py-2 rounded-md transition-all duration-700 font-bold
             hover:bg-[rgba(255,255,255,0.52)] hover:text-black
             hover:-translate-y-1 hover:scale-115">Inicio</a>
       <a href="#sobreMi" className="px-4 py-2 rounded-md transition-all duration-700 font-bold
             hover:bg-[rgba(255,255,255,0.52)] hover:text-black
             hover:-translate-y-1 hover:scale-115">Sobre Mi</a>   
       <a href="#skills" className="px-4 py-2 rounded-md transition-all duration-700 font-bold
             hover:bg-[rgba(255,255,255,0.52)] hover:text-black
             hover:-translate-y-1 hover:scale-115">Habilidades</a>     
        <a href="#proyectos" className="px-4 py-2 rounded-md transition-all duration-700 font-bold
             hover:bg-[rgba(255,255,255,0.52)] hover:text-black
             hover:-translate-y-1 hover:scale-115">Proyectos</a>
        <a href="#contacto" className="px-4 py-2 rounded-md transition-all duration-700 font-bold
             hover:bg-[rgba(255,255,255,0.52)] hover:text-black
             hover:-translate-y-1 hover:scale-115">Contacto</a>
        
    </header>
  );
}

export default Encabezado;
