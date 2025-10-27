import React from "react";
import { useTranslation } from "react-i18next";
import Computador from "../assets/img/sobreMi/Computador.jpg";
import Video from "../assets/video/VideoPresentacion.mp4";

function SeccionSobreMi() {
  const { t } = useTranslation("about");

  return (
    <section
      id="sobreMi"
      className="flex flex-col md:flex-row items-center justify-center py-20 px-10 bg-[rgba(0,0,0,0.35)] text-gray-200 rounded-2xl scroll-mt-40"
    >
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
      <a
        href="https://drive.google.com/file/d/1iQ55s4tDUQRHCHUvURWFlPRtiDNgNAPS/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Computador}
          alt={t("Imagen Fondo")}
          className="rounded-2xl shadow-[0_0_40px_#9333ea80] border border-[#a855f7]/30 max-w-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        />
      </a>
      </div>

      {/* Texto */}
      <div className="md:w-1/2 md:pl-16 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#6366f1]">
            {t("titulo")}
          </span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          {t("parrafo1.parte1")}{" "}
          <span className="text-indigo-400 font-semibold">
            {t("parrafo1.fullstack")}          </span>{" "}
          {t("parrafo1.parte2")}
        </p>

        <p className="text-gray-400 italic">{t("parrafo2")}</p>
      </div>
    </section>
  );
}

export default SeccionSobreMi;
