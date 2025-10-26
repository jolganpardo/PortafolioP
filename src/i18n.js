import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa archivos de traducción
import header_es from "./locales/es/header.json";
import header_en from "./locales/en/header.json";
import footer_es from "./locales/es/footer.json";
import footer_en from "./locales/en/footer.json";
import contact_es from "./locales/es/contact.json";
import contact_en from "./locales/en/contact.json";
import skills_es from "./locales/es/skills.json";
import skills_en from "./locales/en/skills.json";
import presentacion_es from "./locales/es/presentacion.json";
import presentacion_en from "./locales/en/presentacion.json";
import project_es from "./locales/es/project.json";
import project_en from "./locales/en/project.json";
import about_es from "./locales/es/about.json";
import about_en from "./locales/en/about.json";
// (Puedes seguir agregando luego: about, skills, projects, contact)

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        header: header_es,
        footer: footer_es,
        about: about_es,
        skills: skills_es,
        project: project_es,
        contact: contact_es,
        presentacion: presentacion_es
      },
      en: {
        header: header_en,
        footer: footer_en,
        about: about_en,
        skills: skills_en,
        project: project_en,
        contact: contact_en,
        presentacion: presentacion_en
      },
    },
    lng: "es", // idioma inicial
    fallbackLng: "es", // idioma por defecto si falta algo
    interpolation: { escapeValue: false },
  });

export default i18n;
