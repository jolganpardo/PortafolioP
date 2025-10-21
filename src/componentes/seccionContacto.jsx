import React from "react";

function SeccionContacto() {
  return (
    <section id="contacto" className="py-16 text-center">
      <h3 className="text-3xl font-bold text-blue-400 mb-6">Contacto</h3>
      <p className="text-gray-300 mb-4">
        Si te interesa colaborar o tienes una propuesta, escríbeme:
      </p>
      <a
        href="mailto:jolgan.dev@gmail.com"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold transition"
      >
        Enviar correo
      </a>
    </section>
  );
}

export default SeccionContacto;
