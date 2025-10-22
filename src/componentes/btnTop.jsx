import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BotonArriba() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // solo actualiza si cambia realmente el estado
      const shouldShow = window.scrollY > 20;
      setVisible(prev => (prev !== shouldShow ? shouldShow : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subirArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={subirArriba}
      className={`fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 cursor-pointer
        ${visible ? "opacity-100 translate-y-0 animate-bounce-slow" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default BotonArriba;
