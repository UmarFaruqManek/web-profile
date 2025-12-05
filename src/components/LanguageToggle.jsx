import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-colors duration-200 border border-white/10"
      aria-label="Toggle Language"
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
