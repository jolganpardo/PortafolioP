import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Fotografias from "../assets/img/proyectos/Fotografias.png";
import AcmeBank from "../assets/img/proyectos/AcmeBank.png";
import Calendario from "../assets/img/proyectos/CalendarioAhorro.png";
import GestionPoblacion from "../assets/img/proyectos/GestionPoblacion.png";
import HappyFeet from "../assets/img/proyectos/Happyfeet.png";
import GestionAgricola from "../assets/img/proyectos/GestionAgricola.jpg";

const proyectos = [
  {
    id: 1,
    titulo: "Gestión de una Finca de Producción Agrícola",
    descripcion:
      "Sistema de base de datos diseñado para administrar una finca de producción agrícola. Permite controlar inventarios, empleados, maquinaria, ventas y producción, automatizando procesos mediante procedimientos almacenados, funciones, triggers y eventos. Optimiza la gestión y el análisis de datos con consultas analíticas y control de roles y permisos.",
    enlace: "https://github.com/davida282/JolganPardo_DavidArdila_ProyectoMySQL",
    imagen: GestionAgricola,
  },
  {
    id: 2,
    titulo: "Calendario Ahorro",
    descripcion:
      "Calendario de Ahorro es una aplicación web desarrollada para visualizar y gestionar un plan de ahorro diario a lo largo del mes. Utiliza una interfaz clara que muestra cada día como una casilla que cambia de estado al ahorrar, facilitando el seguimiento visual de metas de ahorro con una experiencia interactiva sencilla.",
    enlace: "https://jolganpardo.github.io/Calendario_Ahorro/",
    imagen: Calendario,
  },
  {
    id: 3,
    titulo: "Veterinaria Happy Feet",
    descripcion:
      "Aplicación de consola de gestión de una veterinaria desarrollada en Java y MySQL, que permite administrar información de mascotas, dueños, veterinarios, citas, historiales médicos, inventario y facturación. Implementa una arquitectura MVC con JDBC y ofrece una experiencia completa para la administración de clínicas veterinarias.",
    enlace:
      "https://github.com/jolganpardo/HappyFeet_Veterinaria_PardoJolgan_OlarteJesus",
    imagen: HappyFeet,
  },
  {
    id: 4,
    titulo: "Banco Acme Bank",
    descripcion:
      "Aplicación bancaria desarrollada en JavaScript, destinada a gestionar funciones bancarias como cuentas de usuario, transacciones, historial de actividades, seguridad de acceso y visualización de datos financieros. Desarrollado en colaboración por Jolgan Pardo (yo) y Fredy León.",
    enlace:
      "https://jolganpardo.github.io/ProyectoAcmebank_JavaScript_PardoJolgan_LeonFredy/",
    imagen: AcmeBank,
  },
  {
    id: 5,
    titulo: "Fotografías - Capturamos los Sentimientos",
    descripcion:
      "Proyecto de una sola página construido con HTML y CSS (sin frameworks) para una pareja de fotógrafos de bodas. Incluye secciones de inicio, “Nosotros”, galería, precios y contacto, además de un menú móvil tipo hamburguesa y un botón de chat fijo. Desarrollado por Jolgan Pardo.",
    enlace: "https://jolganpardo.github.io/Proyecto-Fotografias/",
    imagen: Fotografias,
  },
  {
    id: 6,
    titulo: "Gestión de Datos de Población",
    descripcion:
      "Aplicación en consola desarrollada en Python para administrar y analizar datos de población mundial usando archivos JSON como base de datos. Permite registrar, consultar y actualizar información de países e indicadores, además de generar reportes estadísticos y comparativos sobre crecimiento poblacional.",
    enlace: "https://github.com/jolganpardo/Proyecto-Python-Pardo-Jolgan",
    imagen: GestionPoblacion,
  },
];

function SeccionProyectos() {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detectar si es desktop para habilitar drag
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % proyectos.length;
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="proyectos"
      className="relative py-16 scroll-mt-40 text-gray-200 bg-[rgba(0,0,0,0.35)] rounded-2xl"
    >
      <h3 className="text-3xl font-bold mb-10 text-center text-blue-400">
        Proyectos
      </h3>

      {/* Contenedor principal con flechas */}
      <div className="relative group w-full overflow-hidden">
        {/* Flecha izquierda (solo visible en desktop) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 
          bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer 
          hover:scale-110 transition-all duration-300 text-2xl"
        >
          ⮜
        </button>

        {/* Contenedor con scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory w-full touch-pan-x"
        >
          {proyectos.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              className="flex-shrink-0 snap-start w-full flex flex-col md:flex-row 
              items-center justify-center px-4 sm:px-8 py-6"
              {...(isDesktop
                ? {
                    drag: true,
                    dragElastic: 0.25,
                    dragConstraints: { top: 0, bottom: 0, left: -120, right: 120 },
                    whileHover: {
                      scale: 1.02,
                      rotate: 0.5,
                      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.25)",
                    },
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }
                : {})}
            >
              {/* Imagen arriba en móvil / izquierda en desktop */}
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full md:w-1/2 max-w-[600px] object-cover rounded-2xl shadow-lg mb-6 md:mb-0 md:mr-6"
              />

              {/* Texto abajo en móvil / derecha en desktop */}
              <div className="bg-gray-900/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-2xl font-semibold mb-3 text-blue-300">
                  {proyecto.titulo}
                </h4>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <a
                  href={proyecto.enlace}
                  className="text-blue-400 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flecha derecha (solo visible en desktop) */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 
          bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer 
          hover:scale-110 transition-all duration-300 text-2xl"
        >
          ⮞
        </button>
      </div>
    </section>
  );
}

export default SeccionProyectos;
