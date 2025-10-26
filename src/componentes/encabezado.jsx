import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

function Encabezado() {
  const { t, i18n } = useTranslation("header"); // asumiendo namespace "header"
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const cambiarIdioma = () => {
    const nuevo = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nuevo);
  };

  const links = [
    { href: "#inicio", label: t("inicio") },
    { href: "#sobreMi", label: t("sobreMi") },
    { href: "#skills", label: t("habilidades") },
    { href: "#proyectos", label: t("proyectos") },
    { href: "#contacto", label: t("contacto") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 backdrop-blur-sm
        ${scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#inicio" className="text-xl font-bold text-white">
          {t("nombre")} {/* ejemplo: Jolgan Pardo traducible */}
        </a>

        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-md transition-all duration-700 font-bold
                hover:bg-[rgba(255,255,255,0.52)] hover:text-black
                hover:-translate-y-1 hover:scale-110"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none p-2 rounded hover:bg-white/10 transition"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <button
          onClick={cambiarIdioma}
          className="ml-4 px-3 py-1 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition"
        >
          {t("botonIdioma")}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-md flex flex-col items-center space-y-4 py-6 animate-fadeIn">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-semibold hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Encabezado;
