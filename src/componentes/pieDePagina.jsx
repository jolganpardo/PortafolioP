import React from "react";
import { useTranslation } from "react-i18next";

function PieDePagina() {
  const { t } = useTranslation("footer"); // usa el namespace "footer"

  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-700">
      {t("texto", { year: new Date().getFullYear() })}
    </footer>
  );
}

export default PieDePagina;
