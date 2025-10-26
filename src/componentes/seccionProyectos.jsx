import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Fotografias from "../assets/img/proyectos/Fotografias.png";
import AcmeBank from "../assets/img/proyectos/AcmeBank.png";
import Calendario from "../assets/img/proyectos/CalendarioAhorro.png";
import GestionPoblacion from "../assets/img/proyectos/GestionPoblacion.png";
import HappyFeet from "../assets/img/proyectos/Happyfeet.png";
import GestionAgricola from "../assets/img/proyectos/GestionAgricola.jpg";

function SeccionProyectos() {
  const { t } = useTranslation("project");
  const scrollRef = useRef(null);

  // Safe initial detection (avoid errors en SSR)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  // Imágenes en el mismo orden que tu JSON de traducciones (lista)
  const imagenes = [
    GestionAgricola,
    Calendario,
    HappyFeet,
    AcmeBank,
    Fotografias,
    GestionPoblacion,
  ];

  // Tus enlaces originales (misma correspondencia por índice)
  const enlaces = [
    "https://github.com/davida282/JolganPardo_DavidArdila_ProyectoMySQL",
    "https://jolganpardo.github.io/Calendario_Ahorro/",
    "https://github.com/jolganpardo/HappyFeet_Veterinaria_PardoJolgan_OlarteJesus",
    "https://jolganpardo.github.io/ProyectoAcmebank_JavaScript_PardoJolgan_LeonFredy/",
    "https://jolganpardo.github.io/Proyecto-Fotografias/",
    "https://github.com/jolganpardo/Proyecto-Python-Pardo-Jolgan",
  ];

  // Obtenemos el arreglo de proyectos desde i18next (puede ser [] al inicio)
  const proyectos = t("lista", { returnObjects: true }) || [];

  // actualización de isDesktop en resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll — se reinicia cuando cambia la cantidad de proyectos
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || proyectos.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % proyectos.length;
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [proyectos.length]);

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="proyectos"
      className="relative py-16 scroll-mt-40 text-gray-200 bg-[rgba(0,0,0,0.35)] rounded-2xl"
    >
      <h3 className="text-3xl font-bold mb-10 text-center text-blue-400">
        {t("titulo")}
      </h3>

      <div className="relative group w-full overflow-hidden">
        {/* Flecha izquierda — solo en desktop */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 
            bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer 
            hover:scale-110 transition-all duration-300 text-2xl"
          aria-label="Scroll left"
        >
          ⮜
        </button>

        {/* Contenedor con scroll horizontal (touch-pan-x para mejor experiencia móvil) */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory w-full touch-pan-x"
        >
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-start w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-6"
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
              <img
                src={imagenes[index]}
                alt={proyecto.titulo}
                className="w-full md:w-1/2 max-w-[600px] object-cover rounded-2xl shadow-lg mb-6 md:mb-0 md:mr-6"
              />

              <div className="bg-gray-900/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-2xl font-semibold mb-3 text-blue-300">
                  {proyecto.titulo}
                </h4>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <a
                  href={enlaces[index] || "#"}
                  className="text-blue-400 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("verProyecto")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flecha derecha — solo en desktop */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 
            bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer 
            hover:scale-110 transition-all duration-300 text-2xl"
          aria-label="Scroll right"
        >
          ⮞
        </button>
      </div>
    </section>
  );
}

export default SeccionProyectos;
