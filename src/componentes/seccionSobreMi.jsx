import React from "react";

function SeccionSobreMi() {
  return (
    <section
      id="sobreMi"
      className="flex flex-col md:flex-row items-center justify-center py-20 px-10 bg-[rgba(0,0,0,0.35)] text-gray-200 rounded-2xl"
    >
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
        <img
          src="/ruta/a/tu/imagen.jpg"
          alt="Desarrollando proyectos"
          className="rounded-2xl shadow-[0_0_40px_#9333ea80] border border-[#a855f7]/30 max-w-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Texto */}
      <div className="md:w-1/2 md:pl-16 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#6366f1]">
            Sobre mí
          </span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          Soy un desarrollador <span className="text-indigo-400 font-semibold">Full-Stack Junior </span> 
          que disfruta convertir ideas en experiencias digitales funcionales y atractivas. 
          Me apasiona la intersección entre diseño y lógica, donde cada línea de código 
          cuenta una historia. Busco crear soluciones que conecten con las personas, 
          aprendiendo y creciendo con cada proyecto que construyo.
        </p>

        <p className="text-gray-400 italic">
          Siempre en busca del equilibrio entre creatividad, estructura y propósito.
        </p>
      </div>
    </section>
  );
}

export default SeccionSobreMi;
