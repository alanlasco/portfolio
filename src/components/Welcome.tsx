import React from 'react';
import { Link } from 'react-scroll'; // Importa el componente Link de react-scroll
import '../stylesheets/welcome.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";
export const Welcome = () => {
  const{t} = useTranslation(["welcome"]);

  return (
    <>
    <Suspense fallback="Cargando traducciones">
      <div id='inicio' className='welcome-container'>
        <div className='foto'>
          <div className='texto-container'>
            <p className={t("claseTexto")}>{'> '}{t("texto")}</p>
            <p className='nombre'>{t("nombre")}</p>
            <p className='cargo'>{t("cargo")}</p>
            <p className='frase'>
              {t("frase")}{' '}
              <span className='texto_resaltado'>{t("textoResaltadoUno")}</span> {t("and")}{' '}
                <span className='texto_resaltado'>{t("textoResaltadoDos")}</span> {t("fraseDos")}
            </p>
            {/* Utiliza Link para enlazar al elemento con el nombre "proyectos" */}
            <Link to="proyectos" smooth={true} duration={500} offset={-100}>
              <button className="button" data-text="Awesome">
                  <span className="actual-text">&nbsp;{t("proyectos")}&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                  &nbsp;{t("proyectos")}&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      </Suspense>
    </>
  );
};
