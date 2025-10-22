import React, { useState } from "react";
import { Code, Users } from "lucide-react";
import {
  FaJava,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skills = {
  programacion: [
    { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#f7df1e" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6DB33F" /> },
    { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  ],

  blandas: [
    "Pensamiento analítico",
    "Pensamiento crítico",
    "Liderazgo",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Adaptabilidad",
    "Resolución de problemas",
    "Aprendizaje continuo",
    "Gestión del tiempo",
    "Proactividad",
  ],
};

function SeccionHabilidades() {
  const [categoria, setCategoria] = useState("programacion");

  return (
    <section id="skills" className="min-h-[90vh] text-center py-16">
      <h2 className="text-4xl font-extrabold text-purple-400 mb-8 scroll-mt-40">
        Mis habilidades
      </h2>

      {/* Botones de categoría */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setCategoria("programacion")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
            categoria === "programacion"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
          }`}
        >
          <Code size={18} /> Programación
        </button>

        <button
          onClick={() => setCategoria("blandas")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
            categoria === "blandas"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
          }`}
        >
          <Users size={18} /> Habilidades blandas
        </button>
      </div>

      {/* Habilidades */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-10">
        {categoria === "programacion"
          ? skills.programacion.map((skill, i) => (
              <div
                key={i}
                className="bg-[#101522] hover:bg-[#181d2b] p-5 rounded-xl shadow-md transition transform hover:scale-105 flex flex-col items-center"
              >
                <div className="mb-3">{skill.icon}</div>
                <p className="text-white font-medium">{skill.name}</p>
              </div>
            ))
          : skills.blandas.map((skill, i) => (
              <div
                key={i}
                className="bg-[#181d2b] p-5 rounded-xl shadow-md text-white font-medium hover:bg-[#20263a] transition transform hover:scale-105 flex items-center justify-center"
              >
                {skill}
              </div>
            ))}
      </div>
    </section>
  );
}

export default SeccionHabilidades;
