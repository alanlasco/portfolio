import React, { useState } from "react";
import "../stylesheets/languagebtn.css";
import i18n from "../config/i18nextConfig";
export const LanguagesBtn = () => {
  const [language, setLanguage] = useState<string>("es");
  const changeLanguage = () => {
    i18n.changeLanguage(language === "es" ? "en" : "es");
    setLanguage(language === "es" ? "en" : "es");
  };
  return (
    <>
      <div onClick={() => changeLanguage()} className="card-btn-lan">
        <div className="language">
          <p></p>
          {language === "es" ? ">Es" : ">En"}
        </div>
      </div>
    </>
  );
};
