import React from "react";

const proyectos = [
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación React con autenticación y almacenamiento en la nube.",
    enlace: "#",
  },
  {
    id: 2,
    titulo: "Portafolio Animado",
    descripcion: "Sitio web con animaciones suaves usando Framer Motion y Tailwind.",
    enlace: "#",
  },
];

function SeccionProyectos() {
  return (
    <section id="proyectos" className="py-16 scroll-mt-40">
      <h3 className="text-3xl font-bold mb-10 text-center text-blue-400">Proyectos</h3>
      <div className="grid md:grid-cols-2 gap-10">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h4 className="text-xl font-semibold mb-2">{proyecto.titulo}</h4>
            <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
            <a
              href={proyecto.enlace}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeccionProyectos;
