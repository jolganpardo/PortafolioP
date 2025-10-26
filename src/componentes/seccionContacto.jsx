import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SeccionContacto() {
  const { t } = useTranslation("contact");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7gm9uwd",
        "template_3d6kac8",
        form.current,
        "TXrLCEh8JPTfcHbwd"
      )
      .then(
        () => alert(t("alerta_enviado")),
        (error) => alert(t("alerta_error", { error: error.text }))
      );
  };

  return (
    <section
      id="contacto"
      className="relative py-20 text-white flex flex-col items-center justify-center scroll-mt-40"
    >
      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-10">
        {/* Columna izquierda - Información y redes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h3 className="text-4xl font-bold text-blue-400">{t("titulo")}</h3>
          <p className="text-gray-300 text-lg">{t("descripcion")}</p>

          <div className="flex flex-wrap gap-6 mt-6">
            <a
              href="https://github.com/jolganpardo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-3xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jolgan-pardo-429a422a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-3xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/573124209860"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-3xl transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:davidpardo016@gmail.com"
              className="text-gray-300 hover:text-blue-400 text-3xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Columna derecha - Formulario */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-5"
        >
          <div>
            <label className="block text-gray-300 mb-2 text-left">
              {t("nombre")}
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-left">
              {t("correo")}
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-left">
              {t("mensaje")}
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            {t("boton")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default SeccionContacto;
